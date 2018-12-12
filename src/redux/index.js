import modules from './modules';
import storeCreater from './config/';


export const { store, mapMutations, reducers } = storeCreater(modules);

export default store;
