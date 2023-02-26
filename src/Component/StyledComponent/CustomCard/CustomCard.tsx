import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@material-ui/core/Button';
import { CardActions } from '@material-ui/core';
import Typography from '@mui/material/Typography';


export default function CustomCard(props: any) {
    return (
        <Card sx={{
            maxWidth: 345,
            margin: props.margin ? props.margin : '10px',
        }}>
            {/* <CardActionArea> */}
            {/* <CustomBox> */}
            <CardMedia
                component="img"
                height="140"
                image={props.image ? props.image : "https://cdn.pixabay.com/photo/2017/03/14/11/42/perfume-2142830_960_720.jpg"}
                alt={props.title ? props.title : "Perfume"}
            />

            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={props.textAlign ? props.textAlign : "left"}
                >
                    {props.title ? props.title : "Perfume"}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={props.textAlign ? props.textAlign : "left"}
                >
                    {props.description ? props.description : "Perfumes can be defined as substances that emit and diffuse a pleasant and fragrant odor. They consist of manmade mixtures of aromatic chemicals and essential oils."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='primary' size="small">Share</Button>
                <Button color='primary' size="small">Learn More</Button>
            </CardActions>
            {/* </CustomBox> */}
            {/* </CardActionArea> */}
        </Card>
    );
}