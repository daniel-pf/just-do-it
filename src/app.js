// WebPack dependencies imports
require('font-awesome-sass-loader')
require('./base.scss')
const Vue = require('vue')
const VueMaterial = require('vue-material')

import Navbar from './components/Navbar.vue'


Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

var app = new Vue({
  el: '#app',
  components: {Navbar},
  data: function () {
    return {itens: [
      {title: 'Tarefa A'},
      {title: 'Tarefa B'},
      {title: 'Tarefa C'},
      {title: 'Tarefa D'}
    ]}
  },
  methods: {
    log (item) {
      console.log('Elemento clicado: ' + item.title)
    }
  }
})