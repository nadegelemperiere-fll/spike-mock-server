/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Menu provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* Local includes */
import * as types from './types';

/* eslint-disable default-param-last */
export default function reducer(state = {}, action) {

    /* eslint-enable default-param-last */
    const { type, payload } = action;
    switch (type) {

    case types.SET_CODE:
        return { ...state, code: payload };
    case types.SET_ERROR:
        return { ...state, error: payload };
    default:
        return state;

    }

}
