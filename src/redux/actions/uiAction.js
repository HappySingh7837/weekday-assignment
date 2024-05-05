import { LOADER, USERDATA,LEAVESDATA } from "../actionType"


export const spinner = (value)=> {
    return {
        type: LOADER,
        payload: value
    }
}



export const setUserDetails = (value)=> {
    return {
        type: USERDATA,
        payload: value
    }
}

export const leaveDetails = (value)=> {
    return {
        type: LEAVESDATA,
        payload: value
    }
}

