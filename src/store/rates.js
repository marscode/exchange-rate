import { getExchangeRates } from "../api";


export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

// initial state
const initialState = {
    amount : '12.00',
    currencyCode : "JPY",
    currencyData : { USD: 1.0}
}



export function ratesReducer(state = initialState, action){
    switch(action.type){
        case AMOUNT_CHANGED:
            return {...state, amount: action.payload}
        case CURRENCY_CODE_CHANGED:
            return {...state, currencyCode: action.payload}
        case "ratesReceived":
            return {...state, currencyData: action.payload}
            default:
            return state;
    }
}

// selectors
export const getAmount = state=> state.rates.amount;
export const getCurrencyCode = state => state.rates.currencyCode;
export const getCurrencyData = state => state.rates.currencyData;


// action types
export const AMOUNT_CHANGED = "amountChanged";
export const CURRENCY_CODE_CHANGED = "currencyCodeChanged";

//action creators
export const changeAmount = (amount) => ({
    type: AMOUNT_CHANGED,
    payload : amount // parameter

});
export function changeCurrencyCode(currencyCode){
    return function changeCurrencyCodeThunk(dispatch){
        dispatch({
            type: CURRENCY_CODE_CHANGED,
            payload: currencyCode
        });
        getExchangeRates(currencyCode, supportedCurrencies).then(rates => {
            dispatch({
                type: "ratesReceived",
                payload: rates
            })
        })
    };
}