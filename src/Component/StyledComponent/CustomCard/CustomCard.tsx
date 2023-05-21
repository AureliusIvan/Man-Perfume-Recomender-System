import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CustomButton } from '../CustomButton/CustomButton';
import Typography from '@mui/material/Typography';
import style from "./CustomCard.module.scss";
import { Text, Title } from '../Typography/CustomTypography';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Spacer from '../../../Pages/User/Spacer/spacer';
import { CustomModal } from '../CustomModal/CustomModal';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const GridContainer = styled(Grid)(() => ({
    alignItems: 'left',
    gap: '20px',
    padding: '20px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}));

const GridItem = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}));


const CContent = styled(CardContent)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
    borderRadius: '20px',
    transform: 'scaleY(1.2)',
}));


interface CustomCardProps {
    title?: string;
    description?: string;
    image?: string;
    width?: string;
    backgroundColor?: string;
    textAlign?: string;
    margin?: string;
}


export function CustomCard(props: CustomCardProps) {

    return (
        <>
            <Card sx={{
                overflow: 'visible',
                width: props.width ? props.width : '95%',
                backgroundColor: props.backgroundColor ? props.backgroundColor : 'rgba(254, 255, 255, 0)',
                margin: props.margin ? props.margin : '10px',
            }}>
                <CardMedia
                    component="img"
                    height="160"
                    image={props.image ? props.image : "https://cdn.pixabay.com/photo/2017/03/14/11/42/perfume-2142830_960_720.jpg"}
                    alt={props.title ? props.title : "Perfume"}
                />

                <CContent>
                    <Typography
                        sx={{
                            transform: 'scaleY(0.8)',
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {props.title ? props.title : "Perfume"}
                    </Typography>
                    <Typography
                        sx={{
                            transform: 'scaleY(0.8)',
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {props.description ? props.description : "Perfumes can be defined as substances that emit and diffuse a pleasant and fragrant odor. They consist of manmade mixtures of aromatic chemicals and essential oils."}
                    </Typography>
                </CContent>
            </Card>
        </>
    );
}



function ResultCardDetail(props: any) {
    React.useEffect(() => {
        console.log(props.data)
    }, [])
    // store object
    const data = props.data
    const formattedAmount = data.harga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    return (
        <>
            {data ?
                <div className={style.detail}>
                    {/* <h1>Result Detail</h1> */}
                    <img className={style.images} src={data.foto} alt={`Images from ${data.nama}`} />
                    <div className={style.name}>{(data.nama)}</div>
                    <div><span>Brand : </span>{data.brand}</div>
                    <div><span>Tipe Aroma : </span>{data.tipe_aroma}</div>
                    <div><span>Ukuran : </span>{data.ukuran} ml</div>
                    <div><span>Harga : </span>{formattedAmount}</div>
                    <div className={style.deskripsi}>{data.deskripsi}</div>

                    <CustomButton
                        bgcolor={'rgb(0,0,0,0)'}
                    >
                        <a className={style.linkondetail} href={data.link_pembelian}>Link Pembelian</a>
                    </CustomButton>
                </div>
                : "Error"}
        </>
    )
}




export function ResultCard(props: any) {
    const sum = (((parseFloat(props.accuracy))) * 100);
    const Akurasi = sum.toFixed(2);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1,
    // });

    // const animationVariants = {
    //     hidden: { opacity: 0, y: 50 },
    //     visible: (index: number) => ({
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             delay: index * 0.2, // Add a delay based on the item index
    //         },
    //     }),
    // };

    return (
        <motion.div className={style.card}
        // key={props.key}
        // ref={ref}
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
        // variants={animationVariants}
        // transition={{ duration: 0.5 }}
        >
            <div className={style.cardcontent}>
                <GridContainer container>
                    <Grid item xs={5} md={3}>
                        <img
                            className={style.img}
                            src={props.image ? props.image : "https://cdn.pixabay.com/photo/2017/03/14/11/42/perfume-2142830_960_720.jpg"}
                            alt={props.title ? props.title : "Perfume"}
                        />
                    </Grid>
                    <GridItem item xs={5}>
                        <div
                            // textalign="left"
                            // texttransform="capitalize"
                            style={{
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                wordBreak: 'break-word',
                                whiteSpace: 'normal',
                                hyphens: 'auto',
                                fontWeight: 'bold',
                            }}
                        >
                            {props.title ? props.title : "Perfume"}
                        </div>
                        <Spacer y={"15px"} />
                        <CustomModal
                            open={open}
                            xbutton={true}
                            onClose={props.onClose ? props.onClose : handleClose}
                            overflowY={"scroll"}
                            button={<>
                                <CustomButton
                                    onclick={() => handleOpen()}
                                    height={"24px"}
                                    width={"120px"}
                                >
                                    Info Lanjut
                                </CustomButton></>}
                        >
                            <ResultCardDetail
                                data={props.data}
                            />
                        </CustomModal>
                        <a href={props.link ? props.link : "https://www.tokopedia.com/"} target="_blank" rel="noopener noreferrer">
                            <CustomButton
                                height={"24px"}
                                bgcolor={"rgb(0,0,0,0)"}
                                marginTop={"10px"}
                                width={"120px"}
                            >
                                Shop Now
                            </CustomButton>
                        </a>
                        <Spacer y={"15px"} />
                        <Text textalign="left">
                            {props.accuracy && `Akurasi : ${Akurasi}%`}
                        </Text>
                    </GridItem>
                </GridContainer >
            </div>
        </motion.div>
    );
}

