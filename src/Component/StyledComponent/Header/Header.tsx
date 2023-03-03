// import
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import style from "./Header.module.scss";
import { Toogle } from "../../../App/App";
import { Title } from "../Typography/CustomTypography";
import { PROJTITLE } from "../../../data";
import { CustomButton as Button } from "../CustomButton/CustomButton";
import { LogoImage } from "../CustomImage/CustomImage";
import { Text } from "../Typography/CustomTypography";
import Spacer from "../../../Pages/User/Spacer/spacer";
// import useMediaQuery from "@material-ui/material/useMediaQuery";
import { useMediaQuery } from "@mui/material";
import { Custommotion as M } from "../CustomAnimation/Custommotion";
import { useState, useEffect } from "react";

const Margin = "35px";

const GridContainer = styled(Grid)(() => ({
    // display: 'flex',
    alignItems: 'center',
    // gap: '10px',
    paddingRight: '5px',
}));

const GridItemLeft = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    background: 'transparent',
    position: 'relative',
    margin: '0px',
    padding: '0px',
    paddingLeft: Margin,
}));

const GridItemRight = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    background: 'transparent',
    position: 'relative',
    margin: '0px',
    padding: '0px',
    paddingRight: Margin,
}));


const GridItemCenter = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    position: 'relative',
    margin: '0px',
    padding: '0px',
}));



export default function Header(props: any) {
    const isMobile = useMediaQuery('(min-width:600px)');

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {

        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (

        <GridContainer container className={show ? style.Header : style.HeaderHide}>
            {isMobile &&
                <GridItemLeft item xs={4}>
                    <LogoImage />
                    <Text width="70px" fontSize="10px" textalign="left" marginleft="10px">
                        SISTEM PENDUKUNG KEPUTUSAN
                    </Text>
                    <Spacer y={"20px"} />
                    <Toogle />
                </GridItemLeft>
            }

            <GridItemCenter item xs={4}>
                {/* <Title>
                    {PROJTITLE}
                </Title> */}
            </GridItemCenter>
            <GridItemRight item xs={4}>
                {/* <Toogle /> */}
                <Button variant="outlined">
                    Home
                </Button>
                <Button>
                    Admin Mode
                </Button>
            </GridItemRight>
        </GridContainer>
    )
}
