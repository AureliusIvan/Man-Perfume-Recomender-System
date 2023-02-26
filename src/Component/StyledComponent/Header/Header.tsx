// import
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import style from "./Header.module.scss";
import { Toogle } from "../../../App/App";

const GridContainer = styled(Grid)(() => ({
    // display: 'flex',
    alignItems: 'center',
    // gap: '10px',
    paddingRight: '5px',
}));

const GridItem = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    position: 'relative',
    margin: '0px',
    padding: '0px',
}));

export default function Header(props: any) {
    return (
        <GridContainer container className={style.Header}>
            <GridItem item md={'auto'} lg={'auto'}>
                <Toogle />
            </GridItem>
            <GridItem item md={'auto'} lg={'auto'}>
            </GridItem>
            <GridItem item md={'auto'} lg={'auto'}>
            </GridItem>
            <GridItem item md={'auto'} lg={'auto'}>
            </GridItem>
        </GridContainer>
    )
}
