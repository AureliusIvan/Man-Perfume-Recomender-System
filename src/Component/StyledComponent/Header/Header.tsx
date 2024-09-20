import React, {ReactNode, useState} from "react";
import {Grid} from "@material-ui/core";
import styled from "@emotion/styled";
import style from "./Header.module.scss";
import {CustomButton as Button} from "../CustomButton/CustomButton";
import {LogoImage} from "../CustomImage/CustomImage";
import {Text} from "../Typography/CustomTypography";
import Spacer from "../../../Pages/User/Spacer/spacer";
import {useMediaQuery} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLogin, setLogout} from "@/Redux/feature/dataSlice";
import {setCookie} from "react-use-cookie";
import {useTranslation} from "react-i18next";
import CustomToggle from "../CustomToggle/CustomToggle";

const Margin = "35px";

const GridContainer = styled(Grid)(() => ({
  alignItems: "center",
  paddingRight: "5px",
}));

interface Props {
  children?: ReactNode;
  clicked?: any;
  pathTo: string;
}

// ...props belom bisa dipake (?)
const NavLink = ({pathTo, children, ...props}: Props) => {
  return (
      <Link to={pathTo}>
        <Button variant="outlined" width="100px" {...props}>
          {children}
        </Button>
      </Link>
  );
};

const ButtonNavLink = ({pathTo, children, clicked, ...props}: Props) => {
  return (
      <Link to={pathTo} onClick={clicked}>
        <Button {...props}>{children}</Button>
      </Link>
  );
};

export default function Header() {
  const isMobile = useMediaQuery<boolean>("(max-width:600px)");

  const loggedIn = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const [show] = useState<boolean>(true);

  const {i18n, t} = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    let lang_code = "";

    if (checked) lang_code = "en";
    else lang_code = "id";

    i18n.changeLanguage(lang_code);
  };

  return (
      <GridContainer container className={show ? style.Header : style.HeaderHide}>
        {!isMobile ? (
            <Grid
                item
                sm={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  paddingLeft: Margin,
                }}
            >
              <LogoImage/>
              <Text width="70px" fontSize="10px" textalign="left" marginleft="10px">
                {t("webName")}
              </Text>
              <Spacer y={"20px"}/>
            </Grid>
        ) : (
            ""
        )}

        <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "right",
              paddingRight: isMobile ? "0px" : Margin,
            }}
        >
          <CustomToggle defaultChecked onChange={onChangeLang}/>
          {loggedIn ? (
              <>
                <NavLink pathTo="/admin">{t("home")}</NavLink>
                <ButtonNavLink
                    pathTo="/"
                    clicked={() => {
                      dispatch(setLogout());
                      setCookie("TOKEN", "");
                      window.location.reload();
                    }}
                >
                  {t("logout")}
                </ButtonNavLink>
              </>
          ) : (
              <>
                <NavLink pathTo="/">{t("home")}</NavLink>
                <ButtonNavLink pathTo="/admin/login">Admin</ButtonNavLink>
              </>
          )}
        </Grid>
      </GridContainer>
  );
}