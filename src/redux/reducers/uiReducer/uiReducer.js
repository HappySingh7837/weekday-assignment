import { leaves } from "@/const/dummy";
import { LEAVESDATA, LOADER, MESSAGES, OTPRESPONSE, POSTDATA, USERDATA } from "@/redux/actionType";
import { leaveDetails } from "@/redux/actions/uiAction";

const initialState = {
  loader: false,
  
  userData: null,
  leavesData:leaves
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOADER: {
      newState.loader = action.payload;
      return newState;
    }
   
    case USERDATA: {
      newState.userData = action.payload;
      return newState;
    }
    case LEAVESDATA: {
      newState.leavesData = action.payload;
      return newState;
    }
    default: {
      return newState;
    }
  }
};
