import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { contactsReducer } from './reducer';

const enhancer = devToolsEnhancer();
export const store = createStore(contactsReducer, enhancer);

