const components = ((r) => r.keys().map(key => r(key).default))(require.context('./', false, /\.vue$/));

export default {
  install(Vue) {
    components.forEach((Cmp) => {
      if (Cmp == null || !Cmp.name) {
        console.warn('Cmp or name is null');
        return;
      }

      Vue.component(Cmp.name, Cmp);
    });
  },
};
