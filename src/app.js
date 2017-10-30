require('bootstrap');
require('font-awesome-sass-loader');
require('vue');
const css = require('./base.scss');

import Vue from 'vue';


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})