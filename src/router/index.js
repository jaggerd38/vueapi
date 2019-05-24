import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import lista_personas from '@/components/personas/lista_personas'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/personas',
            name: 'lista_personas',
            component: lista_personas
        }
    ],
    mode: 'history'
})