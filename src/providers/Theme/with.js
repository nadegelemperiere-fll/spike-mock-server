/* ------------------------------------------------------
# Copyright (c) [2023] Nadege LEMPERIERE
# All rights reserved
# -------------------------------------------------------
# Theme provider with
# -------------------------------------------------------
# Nadège LEMPERIERE, @01 may 2023
# Latest revision: 01 may 2023
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

/* Local includes */
import ThemeContext from './Context';

function withContainer(Component) {

    function ChildComponent(props) {

        /* eslint-disable react/jsx-props-no-spreading */
        return (
            <ThemeContext.Consumer>
                {(contextProps) => (<Component {...contextProps} {...props} />) }
            </ThemeContext.Consumer>
        );
        /* eslint-enable react/jsx-props-no-spreading */

    }
    return ChildComponent;

}

export default withContainer;
