/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Theme provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { useReducer, useEffect, useMemo } from 'react';

/* Website includes */
import logMessage from '../../utils/logging';

/* Local includes */
import RobotContext from './Context';
import { setHub, setComponents } from './store/actions';
import reducer from './store/reducer';

function Provider(props) {

    /* --------- Gather inputs --------- */
    const { period, children, persistKey = 'robot' } = props;
    const componentName = 'RobotProvider';

    const savedState = JSON.parse(localStorage.getItem(persistKey));
    const [robotState, dispatch] = useReducer(reducer, {
        components: [],
        hub: [],
        ...savedState,
    });

    /* ----- Manage robot characteristics retrieval ------ */
    useEffect(() => {

        logMessage(componentName, 'useEffect[robotState, period] --- BEGIN');
        /* eslint-disable padded-blocks, brace-style */
        function getStatus() {

            fetch('v1/robot/component')
                .then((response) => response.json())
                .then((data) => dispatch(setComponents(data !== null ? data : robotState.components)))
                .catch((err) => {
                    logMessage(componentName, err.message);
                });

            fetch('v1/robot/hub')
                .then((response) => response.json())
                .then((data) => dispatch(setHub(data !== null ? data : robotState.hub)))
                .catch((err) => {
                    logMessage(componentName, err.message);
                });
        }
        const interval = setInterval(() => getStatus(), period)
        logMessage(componentName, 'useEffect[robotState, period] --- END');
        return () => {
            clearInterval(interval);
        }
        /* eslint-disable padded-blocks, brace-style */

    }, [robotState, period]);

    useEffect(() => {

        logMessage(componentName, 'useEffect[componentsState, persistKey] --- BEGIN');
        localStorage.setItem(persistKey, JSON.stringify(robotState));
        logMessage(componentName, 'useEffect[componentsState, persistKey] --- END');

    }, [robotState, persistKey]);

    const memorizedValue = useMemo(() => ({ components:robotState.components, hub:robotState.hub }), [robotState]);

    /* ----------- Define HTML --------- */
    return (
        <RobotContext.Provider value={memorizedValue}>
            {children}
        </RobotContext.Provider>
    );

}

export default Provider;
