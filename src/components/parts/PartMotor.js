/* ------------------------------------------------------
# Copyright (c) [2023] Nadege LEMPERIERE
# All rights reserved
# -------------------------------------------------------
# Spike motor component
# -------------------------------------------------------
# Nadège LEMPERIERE, @01 may 2023
# Latest revision: 01 may 2023
# -------------------------------------------------------*/

/* Material UI includes */
import { Box, Typography, Stack } from '@mui/material';

/* Website includes */
import { Image } from '..';

function PartMotor(props) {

    /* --------- Gather inputs --------- */
    const { size, align, text} = props;

    /* --------- Compute sizes --------- */
    const sizeSquare = `${size}px`;
    let positionSquare = 0;
    if (align === "center") { positionSquare = `calc((100% - ${sizeSquare}) / 2)`; }
    else if (align === "left") { positionSquare = '0px'; }
    else if (align === "right") { positionSquare = `calc(100% - ${sizeSquare})`; }

    /* ----------- Define HTML --------- */
    return (
        <Stack direction="column" style={{width:'100%'}}>
            <Box style={{ width:'100%', minHeight:sizeSquare, right:0, left:0, position:'relative'}}>
                <Image reference="motor" style = {{ position:'absolute', left: positionSquare, width: sizeSquare, height: sizeSquare}}/>
            </Box>
            {(text !== undefined && text.length > 0) && (<Typography style={{ width: '100%', textAlign: align, fontWeight: 'bold', marginBottom: '10px' }}> {text}° </Typography>)}
        </Stack>
    );

}

export default PartMotor;