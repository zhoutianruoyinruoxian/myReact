export default {
  state: {
    title: 'default',
  },
  mutations: {
    changeTitle(setState, getState, title) {
      setState({ title });
    },
  },
};
