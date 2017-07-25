import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/components/Mainpage'
import Announcement_page from '@/components/Announcement_page'
import Rank from '@/components/Rank'
import Results from '@/components/Results'
import ProblemSet from '@/components/ProblemSet'
import Problem from '@/components/Problem'
import Contest_view from '@/components/Contest_view'
import Contest_add from '@/components/Contest_add'
import Contest_manage from '@/components/Contest_manage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/mainpage',
        component: Mainpage
    }, {
        path: '/announcement_page',
        component: Announcement_page
    }, {
        path: '/rank',
        component: Rank
    }, {
        path: '/results',
        component: Results
    }, {
        path: '/problemSet',
        component: ProblemSet
    }, {
        path: '/problem',
        component: Problem
    }, {
        path: '/contest_view',
        component: Contest_view
    }, {
        path: '/contest_add',
        component: Contest_add
    }, {
        path: '/contest_manage',
        component: Contest_manage
    }]
})