import update from "react-addons-update";
import constants from "./actionConstants";

const { SET_NAME, SET_AGE } = constants;

export function setName(){
    return {
        type:SET_NAME,
        payload:"Isaac"
    }
}

export function setAge() {
    return {
        type: SET_AGE,
        payload: 23
    }
}
function handleSetName(state, action){
    return update(state, {
        name:{
            $set:action.payload
        }
    })
}

function handleSetAge(state, action){
    return update(state, {
        age:{
            $set:action.payload
        }
    })
}

const ACTION_HANDLERS = {
    SET_NAME:handleSetName,
    SET_AGE: handleSetAge
};

const initialState = {};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
