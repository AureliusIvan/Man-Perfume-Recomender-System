import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CustomButton } from "../CustomButton/CustomButton";
import Typography from "@mui/material/Typography";
import style from "./CustomCard.module.scss";
import { Text, Title } from "../Typography/CustomTypography";
import { Badge, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Spacer from "../../../Pages/User/Spacer/spacer";
import { CustomModal } from "../CustomModal/CustomModal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@material-ui/core";
import { Flex } from "../CustomBox/CustomBox";

const GridContainer = styled(Grid)(() => ({
    alignItems: "left",
    gap: "20px",
    padding: "20px",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));

const GridItem = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));

const CContent = styled(CardContent)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
    borderRadius: "20px",
    transform: "scaleY(1.2)",
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
            <Card
                sx={{
                    overflow: "visible",
                    width: props.width ? props.width : "95%",
                    backgroundColor: props.backgroundColor
                        ? props.backgroundColor
                        : "rgba(254, 255, 255, 0)",
                    margin: props.margin ? props.margin : "10px",
                }}
            >
                <CardMedia
                    component="img"
                    height="160"
                    image={
                        props.image
                            ? props.image
                            : "https://cdn.pixabay.com/photo/2017/03/14/11/42/perfume-2142830_960_720.jpg"
                    }
                    alt={props.title ? props.title : "Perfume"}
                />

                <CContent>
                    <Typography
                        sx={{
                            transform: "scaleY(0.8)",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {props.title ? props.title : "Perfume"}
                    </Typography>
                    <Typography
                        sx={{
                            transform: "scaleY(0.8)",
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {props.description
                            ? props.description
                            : "Perfumes can be defined as substances that emit and diffuse a pleasant and fragrant odor. They consist of manmade mixtures of aromatic chemicals and essential oils."}
                    </Typography>
                </CContent>
            </Card>
        </>
    );
}

function ResultCardDetail(props: any) {
    const { t } = useTranslation();
    const md = useMediaQuery<boolean>("(max-width:900px)");

    React.useEffect(() => {
        console.log(props.data);
    }, []);
    // store object
    const data = props.data;
    const formattedAmount = data.harga.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    return (
        <div className={style.container}>
            {data ? (
                <Flex
                    direction={md ? "column" : "row"}
                    align={md ? "auto" : "left"}
                    justify={md ? "center" : "left"}
                    className={style.detail}
                >
                    {md ? (
                        <h2 className={style.name}>
                            {data.brand} - {data.nama}
                        </h2>
                    ) : null}
                    <img
                        className={style.images}
                        src={data.foto}
                        alt={`Images from ${data.nama}`}
                    />
                    <Flex
                        direction="column"
                        align="left"
                        className={style.prodDetail}
                    >
                        {!md ? (
                            <h2 className={style.name}>
                                {data.brand} - {data.nama}
                            </h2>
                        ) : null}
                        <div>
                            <span>{t("brand")} : </span>
                            {data.brand}
                        </div>
                        <div>
                            <span>{t("scent")} : </span>
                            {data.tipe_aroma}
                        </div>
                        <div>
                            <span>{t("size")} : </span>
                            {data.ukuran}
                        </div>
                        <div>
                            <span>{t("price")} : </span>
                            {formattedAmount}
                        </div>
                        <div className={style.deskripsi}>{data.deskripsi}</div>
                        <CustomButton bgcolor={"rgb(0,0,0,0)"}>
                            <a
                                className={style.linkondetail}
                                href={data.link_pembelian}
                            >
                                {t("link")}
                            </a>
                        </CustomButton>
                    </Flex>
                </Flex>
            ) : (
                "Error"
            )}
        </div>
    );
}

export function ResultCard1(props: any) {
    const { t } = useTranslation();

    const md = useMediaQuery<boolean>("(max-width:900px)");
    const sum = parseFloat(props.accuracy) * 100;
    const Akurasi = sum.toFixed(2);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Flex>
            <CustomModal
                open={open}
                xbutton={true}
                portrait={md ? true : false}
                onClose={props.onClose ? props.onClose : handleClose}
                overflowY={"scroll"}
                button={
                    <div className={style.imgContainer} onClick={handleOpen}>
                        {props.rank && (
                            <Flex className={style.badge}><p>{props.rank}</p></Flex>
                        )}
                        <img
                            className={style.img}
                            src={
                                props.image
                                    ? props.image
                                    : "https://cdn.pixabay.com/photo/2017/03/14/11/42/perfume-2142830_960_720.jpg"
                            }
                            alt={props.title ? props.title : "Perfume"}
                        />
                        <Flex
                            direction="column"
                            justify="end"
                            className={style.descOverlay}
                        >
                            <p>
                                {props.data.brand} {props.data.nama}
                            </p>
                            {props.accuracy && (
                                <p className={style.acc}>
                                    {t("accuracy")} : {Akurasi}%
                                </p>
                            )}
                        </Flex>
                        <Flex direction="column" className={style.overlay}>
                            <h3>
                                {props.data.brand} {props.data.nama}
                            </h3>
                            {props.accuracy && (
                                <p className={style.acc}>
                                    {t("accuracy")} : {Akurasi}%
                                </p>
                            )}
                        </Flex>
                    </div>
                }
            >
                <ResultCardDetail data={props.data} />
            </CustomModal>
        </Flex>
    );
}

export function ResultCard(props: any) {
    const { t } = useTranslation();

    const sum = parseFloat(props.accuracy) * 100;
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
        <motion.div
            className={style.card}
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
                            src={
                                props.image
                                    ? props.image
                                    : "https://cdn.pixabay.com/photo/2017/03/14/11/42/perfume-2142830_960_720.jpg"
                            }
                            alt={props.title ? props.title : "Perfume"}
                        />
                    </Grid>
                    <GridItem item xs={5}>
                        <div
                            // textalign="left"
                            // texttransform="capitalize"
                            style={{
                                textAlign: "left",
                                textTransform: "capitalize",
                                wordBreak: "break-word",
                                whiteSpace: "normal",
                                hyphens: "auto",
                                fontWeight: "bold",
                            }}
                        >
                            {props.title ? props.title : "Perfume"}
                        </div>
                        <Spacer y={"15px"} />
                        <CustomModal
                            open={open}
                            xbutton={true}
                            onClose={
                                props.onClose ? props.onClose : handleClose
                            }
                            overflowY={"scroll"}
                            button={
                                <>
                                    <CustomButton
                                        onclick={() => handleOpen()}
                                        height={"24px"}
                                        width={"120px"}
                                        marginInline="0px"
                                    >
                                        {t("detail")}
                                    </CustomButton>
                                </>
                            }
                        >
                            <ResultCardDetail data={props.data} />
                        </CustomModal>
                        <a
                            href={
                                props.link
                                    ? props.link
                                    : "https://www.tokopedia.com/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CustomButton
                                marginInline="0px"
                                height={"24px"}
                                bgcolor={"rgb(0,0,0,0)"}
                                marginTop={"10px"}
                                width={"120px"}
                            >
                                {t("buy")}
                            </CustomButton>
                        </a>
                        <Spacer y={"15px"} />
                        <Text textalign="left">
                            {props.accuracy && `${t("accuracy")} : ${Akurasi}%`}
                        </Text>
                    </GridItem>
                </GridContainer>
            </div>
        </motion.div>
    );
}
