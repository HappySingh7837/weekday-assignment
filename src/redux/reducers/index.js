import { combineReducers } from 'redux';
import  uiReducer  from '../reducers/uiReducer/uiReducer';
import { persist } from '../service/redux-persist';

const otpPersistConfig = {
    key: "walletStore",
  };

export default combineReducers({
    common:persist(otpPersistConfig,uiReducer),
  
});
