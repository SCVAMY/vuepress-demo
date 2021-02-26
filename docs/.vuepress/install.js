/**
 * install
 * 初始化依赖 & 注册组件
 * 暂时无法做 LTE & 业务组件注册，因为业务关联，路由关联，VUEX 关联，包括 Vue-Mfe 与框架，依赖，关联太多
 * 工作量和难度较大，目前不与框架和路由Vuex相关联的组件可在 component.js 中注册引入
 * 其它组件可用 iframe & 截图代替
 */

// import VueMfe from "vue-mfe";
import axios from "axios";
// import libs from "./public/libs";
// import components from './components.js';
// import Vuex from "vuex";
// import VueRouter from "vue-router";
import Element from "element-ui";
import ContentBlock from "ibuild-portal-lte/src/components/ContentBlock";

export default async function(Vue) {
  // window.VueRouter = VueRouter;
  // load libs
  // libs.call();
  window.Vue = Vue;
  // Vue.use(Vuex);
  Vue.use(Element);

  // set resources
  // const resources = await getResources();
  // VueMfe.Lazy.setConfig({ resources });
  // window.VueMfe = VueMfe;

  // window.Vuex = Vuex;
  // const store = require("./store");

  // Vue.mixin({ store: store });

  // install components
  // const promise = Object.keys(components).map(componentName => {
  //   const componentPath = components[componentName];
  //   return VueMfe.Lazy(componentPath);
  // });

  // // lazy install components
  // await Promise.all(promise).then(res => {
  //   res.map(component => {
  //     Vue.component('org-picker', component.default);
  //   });
  // });

  // install common components
  // lteComponents.components.map(({ name, component }) => {
  //   name = (name || component.name)
  //     .replace(/([A-Z])/g, "-$1")
  //     .toLowerCase()
  //     .slice(1);
  //   Vue.component(name || component.name, component);
  // });

  installComponent({ component: ContentBlock });
}

const installComponent = ({ name, component }) => {
  name = (name || component.name)
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .slice(1);
  debugger;
  Vue.component(name || component.name, component);
};

// /**
//  * @function getResources
//  * @description 获取 MFE resources
//  */
// const getResources = () => {
//   return axios.get(`/api/mfe/resources`, { hideLoading: true }).then(res => {
//     return res.data;
//   });
// };
