import { LinearProgress } from "@material-ui/core"
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import React from "react";
import { LinearProgressProps } from "@material-ui/core";
import styled from "@emotion/styled";


export function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
                sx={{
                    width: '100%',
                    mr: 1
                }}
            >
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2"
                >{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const CProgress = styled(LinearProgressWithLabel)(() => ({
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
}));


export default function CustomProgress() {
    const [progress] = React.useState(10);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    return (
        <CProgress
            value={progress}
        />
    );
}