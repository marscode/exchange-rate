// initial state
const initialState = {
    name: "Marbel",
    loggedIn: false
}



export function userReducer(state = initialState, action){
    return state;
}


// selectors

export const getName = state => state.user.name;