import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/Login'
import register from '@/components/Register_page'

import adminLogin from '@/components/Adminlogin'
import adminManage from '@/components/Admin_manage'
import editContest from '@/components/editContest'
import addContest from '@/components/addContest'
import manageContest from '@/components/manageContest'
import manageProblem from '@/components/manageProblem'
import newProb from '@/components/newProb'

import announcement from '@/components/Announcement_page'
import mainpage from '@/components/Mainpage'
import contest from '@/components/Contest_view'
import problem from '@/components/Problem'
import problemset from '@/components/ProblemSet'
import profile from '@/components/Profile'
import ranks from '@/components/Rank'
import result from '@/components/Result'
import results from '@/components/Results'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            component: login
        }, {
            path: '/register',
            component: register
        },


        {
            path: '/',
            component: mainpage
        }, {
            path: '/announcement',
            component: announcement
        }, {
            path: '/contest',
            component: contest
        }, {
            path: '/problemSet/scope.row.ID',
            component: problem
        }, {
            path: '/problemset',
            component: problemset
        }, {
            path: '/profile',
            component: profile
        },


        {
            path: '/adminLogin',
            component: adminLogin
        }, {
            path: '/adminManage',
            component: adminManage
        }, {
            path: '/addContest',
            component: addContest
        }, {
            path: '/editContest',
            component: editContest
        }, {
            path: '/manageContest',
            component: manageContest
        }, {
            path: '/manageProblem',
            component: manageProblem
        }, {
            path: '/newProb',
            component: newProb
        }, {
            path: '/ranks',
            component: ranks
        }, {
            path: '/result',
            component: result
        }, {
            path: '/results',
            component: results
        }
    ]
})