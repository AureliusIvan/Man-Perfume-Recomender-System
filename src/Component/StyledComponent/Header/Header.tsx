// import
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import style from "./Header.module.scss";
import { Toogle } from "../../../App/App";
import { Title } from "../Typography/CustomTypography";
import { PROJTITLE } from "../../../data";
import { CustomButton as Button } from "../CustomButton/CustomButton";

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
    paddingLeft: '5px',
}));

const GridItemRight = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    background: 'transparent',
    position: 'relative',
    margin: '0px',
    padding: '0px',
    paddingRight: '5px',
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
    return (
        <GridContainer container className={style.Header}>
            <GridItemLeft item xs={4}>
                <Toogle />
            </GridItemLeft>
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
