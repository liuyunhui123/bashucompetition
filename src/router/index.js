import Vue from 'vue'
import Router from 'vue-router'
import editContest from '@/components/editContest'
import addContest from '@/components/addContest'
import manageContest from '@/components/manageContest'
import manageProblem from '@/components/manageProblem'
import newProb from '@/components/newProb'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/editContest',
        component: editContest
    }, {
        path: '/manageContest',
        component: manageContest
    }, {
        path: '/manageProblem',
        component: manageProblem
    }, {
        path: '/addContest',
        component: addContest
    }, {
        path: '/newProb',
        component: newProb
    }]
})