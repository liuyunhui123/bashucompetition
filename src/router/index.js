import Vue from 'vue'
import Router from 'vue-router'

import main from '@/components/Contests_main'
import prob from '@/components/Contests_prob'
import qa from '@/components/Contests_qa'
import rank from '@/components/Contests_rank'
import result from '@/components/Contests_result'
import results from '@/components/Contests_results'
import submit from '@/components/Contests_submit'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: main
    }, {
        path: '/probs/:id',
        component: prob
    }, {
        path: '/qa',
        component: qa
    }, {
        path: '/rank',
        component: rank
    }, {
        path: '/result',
        component: result
    }, {
        path: '/results',
        component: results
    }, {
        path: '/submit',
        component: submit
    }]
})