import classes from './text.module.css';

import { Box } from '@mantine/core';

export default function Demo() {
    return (
        <Box className={classes.box}>
            Text component <span className={classes.highlight}>For Testing</span>
        </Box>
    );
}