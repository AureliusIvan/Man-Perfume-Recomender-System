// import
import React from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import style from "./Header.module.scss";
import { Toogle } from "../../../App/App";
import { CustomButton as Button } from "../CustomButton/CustomButton";
import { LogoImage } from "../CustomImage/CustomImage";
import { Text } from "../Typography/CustomTypography";
import Spacer from "../../../Pages/User/Spacer/spacer";
import { useMediaQuery } from "@mui/material";
import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogin, setLogout } from "@/Redux/feature/dataSlice";

import { setCookie } from "react-use-cookie";

const Margin = "35px";

const GridContainer = styled(Grid)(() => ({
  // display: 'flex',
  alignItems: "center",
  // gap: '10px',
  paddingRight: "5px",
}));

const GridItemLeft = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  background: "transparent",
  position: "relative",
  margin: "0px",
  padding: "0px",
  paddingLeft: Margin,
}));

const GridItemRight = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  background: "transparent",
  position: "relative",
  margin: "0px",
  padding: "0px",
  paddingRight: Margin,
}));

const GridItemCenter = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  position: "relative",
  margin: "0px",
  padding: "0px",
}));

interface Props {
  children?: ReactNode;
  clicked?: any;
  pathTo: string;
}

// ...props belom bisa dipake (?)
const NavLink = ({ pathTo, children, ...props }: Props) => {
  return (
    <Link to={pathTo}>
      <Button variant="outlined" {...props}>
        {children}
      </Button>
    </Link>
  );
};

const ButtonNavLink = ({ pathTo, children, clicked, ...props }: Props) => {
  return (
    <Link to={pathTo} onClick={clicked}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};

export default function Header() {
  const isMobile = useMediaQuery<boolean>("(min-width:600px)");

  const loggedIn = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const [show] = useState<boolean>(true);

  return (
    <GridContainer container className={show ? style.Header : style.HeaderHide}>
      {isMobile && (
        <GridItemLeft item xs={4}>
          <LogoImage />
          <Text width="70px" fontSize="10px" textalign="left" marginleft="10px">
            SISTEM PENDUKUNG KEPUTUSAN
          </Text>
          <Spacer y={"20px"} />
          {/* <Toogle /> */}
        </GridItemLeft>
      )}

      <GridItemCenter item xs={4}>
        {/* <Title>
                    {PROJTITLE}
                </Title> */}
      </GridItemCenter>
      <GridItemRight item xs={4}>
        {/* <Toogle /> */}

        {loggedIn ? (
          <>
            <NavLink pathTo="/admin">Home</NavLink>
            <ButtonNavLink
              pathTo="/"
              clicked={() => {
                dispatch(setLogout());
                setCookie("TOKEN", "");
                window.location.reload();
              }}
            >
              Log Out
            </ButtonNavLink>
          </>
        ) : (
          <>
            <NavLink pathTo="/">Home</NavLink>
            <ButtonNavLink pathTo="/admin/login">Admin</ButtonNavLink>
          </>
        )}

        {/* loggedIn value read as [object object] on console log
        {loggedIn ? (
          <ButtonNavLink
            pathTo="/"
            clicked={() => {
              dispatch(setLogout());
              console.log("logged in : " + { loggedIn });
            }}
          >
            Log Out
          </ButtonNavLink>
        ) : (
          <ButtonNavLink
            pathTo="/admin/login"
            clicked={() => console.log("now logged in : " + { loggedIn })}
          >
            Admin Mode
          </ButtonNavLink>
        )} */}
      </GridItemRight>
    </GridContainer>
  );
}
