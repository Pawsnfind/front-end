import axios from 'axios';

export const SEARCH_SPECIES_START = 'SEARCH_SPECIES_START';
export const SEARCH_SPECIES_SUCCESS = 'SEARCH_SPECIES_SUCCESS';
export const SEARCH_SPECIES_ERROR = 'SEARCH_SPECIES_ERROR'

export const initialSearch  = initialSearchForm => dispatch => {
    dispatch ({type: SEARCH_SPECIES_START});
    // console.log(searchObj)
    return axios
        // .post(`${process.env.REACT_APP_BACKEND_URL}/api/animals`, searchObj)
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/search/initialSearch`, initialSearchForm)
        .then(res => {
            console.log('SEARCH_SPECIES_SUCCESS ', res.data)
            
            dispatch ({type: SEARCH_SPECIES_SUCCESS, payload: res.data, initialSearchForm})
            // return res.data
        })
        .catch(err => {
            dispatch({type: SEARCH_SPECIES_ERROR, payload: err.response})
        })
}