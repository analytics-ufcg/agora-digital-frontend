import Vue from 'vue'
import Router from 'vue-router'
import Proposicoes from '@/views/Proposicoes.vue'
import Sobre from '@/views/Sobre.vue'
import Cases from '@/views/Cases.vue'
import Ajuda from '@/views/Ajuda.vue'
import Comissao from '@/views/Comissao.vue'
import FilterMenu from '@/components/menu/FilterMenu.vue'
import store from '@/stores/store'
import NProgress from 'nprogress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'proposicoes' }
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/ajuda',
      name: 'ajuda',
      component: Ajuda
    },
    {
      path: '/proposicoes',
      name: 'proposicoes',
      components: {
        default: Proposicoes,
        menu: FilterMenu
      }
    },
    {
      path: '/cases',
      name: 'cases',
      component: Cases
    },
    {
      path: '/comissao/:casaComissao/:siglaComissao',
      name: 'comissao',
      component: Comissao,
      props: true,
      beforeEnter: (to, from, next) => {
        NProgress.start()
        store.dispatch('getParlamentarCpf').then(() => {
          NProgress.done()
          next()
        }).catch(() => {
          NProgress.done()
          next()
        })
      }
    }
  ]
})
