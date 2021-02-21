import axios from 'axios';
import types from './types';
import {useSelector, useDispatch} from 'react-redux';
import store from "./store";
import { CURRENCY_OPTIONS as currencyDetails } from '../currenciesData';

const URL = 'https://api.github.com/users/Venky1409';

export const RandomAction = () => {
    return async (dispatch) => {
        await axios.get(URL)
        .then(res => {
            dispatch({type: types.FETCH_PROFILE_SUCCESS, payload: res.data});
        });
        };
};

export const fetch_details = () => {
    return {
      type: "FETCH_RATES"
    };
  };
  
  export const fetch_receive_post = post => {
    return {
      type: "FETCH_SUCCESS_RATES",
      payload: post
    };
  };
  
  export const fetch_receive_error = () => {
    return {
      type: "FETCH_FAILED_RATES"
    };
  };

  export const fetch_conversion_post = post => {
    return {
      type: "FETCH_SUCCESS_CONVERSION",
      payload: post
    };
  };

  export const fetch_initial_rates = () => {
    return {
      type: "FETCH_INITIAL_RATES"
    };
  };

  export const fetch_exchange_rates = () => {
    store.dispatch(fetch_details());
    return async (dispatch) => {
        await axios.get("https://api.exchangeratesapi.io/latest?base=USD")
        .then(res => {
            const rates = [];
            Object.entries(res.data.rates).map(([key,value], index) => (
                rates.push({'name': key, 'rate': value.toFixed(3)})
            ));
            for(let i = 0; i < rates.length; i++) {
                for(let j= 0; j < currencyDetails.length; j++) {
                    if(rates[i].name == currencyDetails[j].value) {
                        rates[i].text = currencyDetails[j].text;
                    }
                }
            }
            dispatch(fetch_receive_post(rates));
        });
    };
  };

  export const get_initial_rates = () => {
    store.dispatch(fetch_details());
    return async (dispatch) => {
      dispatch(fetch_initial_rates());
    };
  };

  export const get_conversion_rates = (src, des, value) => {
    store.dispatch(fetch_details());
    return async (dispatch) => {
        await axios.get(`https://api.exchangeratesapi.io/latest?symbols=${des}&base=${src}`)
        .then(res => {
            let data = {};
            let dividedResult = 1/res.data.rates[des];
            data.selectFromOutputValue = value * res.data.rates[des];
            data.selectFromText = `1 ${src} = ${res.data.rates[des]} ${des}`;
            data.selectToText = `1 ${des} = ${dividedResult} ${src}`;
            dispatch(fetch_conversion_post(data));
        });
    };
  };