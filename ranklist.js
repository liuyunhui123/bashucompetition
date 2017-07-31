//在8888号端口给出全局排行榜
//要求参数：requireuser（临时用户及以下不可查看ranklist）
//返回参数：按rating排好的username、rating、motto、racenumber（参赛场数）四个数组
var http=require("http");
var querystring=require('querystring');
var mysql=require("mysql");
var params;
var fs=require('fs');
var rankData=[];
var server=http.createServer(function(req,res)//传来的参数：requireuser，提出要求的用户
                              {if(req.url==="/favicon.ico")return;
							   res.setHeader('Access-Control-Allow-Origin','*');  
							   res.writeHead(200,{'Content-Type' : 'application/JSON'});
							   //console.log("step1");
							   var body='',flag=0;
							   req.on('end',function(){console.log("end!");
													   var managelevel;//由于坑爹的回调函数，这里只能现场查
													   var connection=mysql.createConnection({host:'localhost',
	                                                                                             user:'root',
	                                                                                             password:'990311',
	                                                                                             port:'3306',
	                                                                                             database:'bsoj_users'
                                                                                                 });
														 connection.connect();
														 connection.query('select managelevel from users where username="'+params.requireuser+'"',
                                                                          function(err,result)
					                                                        {var ans=result[0].managelevel;
					                                                         //console.log("mana:"+result[0].managelevel+" "+ans);
																			 if(ans>2)connect_and_feed(params,res);
																			 else console.log("Access Denied!");
																			 }
					                                                      );
                                                         connection.end();
							                             //res.write(obj);
														 }
													  );
						       req.on('data',function(data)
							                         {console.log("data!");
													  body+=data;
													  console.log(data+" arrival");
													  params=querystring.parse(decodeURIComponent(body));
						                              }
								      );
							   
							  
							  });	
server.listen(8888,"localhost",function(){
    console.log("开始监听8888...");
});					 
function connect_and_feed(params,res)
  {var connection=mysql.createConnection({host:'localhost',
                                          user:'root',
	                                      password:'990311',
	                                      port:'3306',
	                                      database:'bsoj_users'
                                         });
   connection.connect();
   connection.query('SELECT username,rating,motto,racenumber from users ORDER BY rating DESC',
     function(err,result)
	   {var tot=0,len=result.length;
	    //console.log("step8");
		if(err){console.log(err.message);return;}
		//console.log("len="+len);
		for(var i=0;i<len;i++)
		  {rankData[tot]=result[i];
		   tot++;	   
		   }
		var obj;
		obj=JSON.stringify({rankData});
		console.log(obj);res.write(obj);
		res.end();   
	    }
                    );   
   connection.end();
   }
