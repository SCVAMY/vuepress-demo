export default () => {
  // const libs = [
  //   'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
  //   'https://cdn.jsdelivr.net/npm/vue-router@3.1.2/dist/vue-router.js',
  //   'https://cdn.jsdelivr.net/npm/vuex@3.1.0/dist/vuex.js',
  //   'https://cdn.jsdelivr.net/npm/vue-types@1.5.3/umd/vue-types.js',
  //   'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.js',
  //   'https://cdn.jsdelivr.net/npm/element-ui@2.11.0/lib/index.js',
  //   'https://cdn.jsdelivr.net/npm/vue-mfe@0.1.3/dist/vue-mfe.js'
  // ];
  const libs = [
    './libs/vue.js',
    './libs/vue-router.js',
    './libs/vuex.js',
    './libs/vue-types.js',
    './libs/axios.js',
    './libs/element-ui.js',
    './libs/vue-mfe.js'
  ];

  libs.map(src => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  });
};
