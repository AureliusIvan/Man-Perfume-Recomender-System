import * as React from "react";
import style from "./CustomTable.module.scss";

import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Confirmations} from "../CustomModal/CustomModal";

import {get} from "@/Component/FunctionComponent/axiosClient/axiosClient";
import {Box} from "@material-ui/core";
import EditMenu from "../CustomFormik/NewFormik/EditMenu";
import {Tooltip} from "@mui/material";
import {CustomButton} from "../CustomButton/CustomButton";

import {useTranslation} from "react-i18next"

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Wrapper = styled("div")(({theme}) => ({
  maxWidth: "100px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  // whiteSpace: "nowrap",
}));

function CustomTooltip(props: any) {
  return (
      <Tooltip title={props.title}>
        {props.children}
      </Tooltip>
  )
}

export default function CustomTable() {
  const {t} = useTranslation();
  const [perfume, setPerfume] = React.useState<any>([]);

  async function fetchPerfume() {
    await get("v1/admin/parfums/view")
        .then((res: any) => {

          if (res.status === 200) {
            setPerfume(res.data.data);
          }
        })
        .catch((err) => {
          // console.log(err);
        });
  }

  React.useEffect(() => {
    fetchPerfume();
  }, []);

  return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 700}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No</StyledTableCell>
                <StyledTableCell align="left">{t("image")}</StyledTableCell>
                <StyledTableCell align="left"
                                 sx={{
                                   maxWidth: "200px",
                                 }}
                >{t("name")}</StyledTableCell>
                <StyledTableCell align="left"
                                 sx={{
                                   maxWidth: "50px",
                                 }}
                >{t("scent")}</StyledTableCell>
                <StyledTableCell align="left"
                                 sx={{
                                   maxWidth: "50px",
                                 }}
                >{t("size")}&nbsp;(ml)</StyledTableCell>
                <StyledTableCell align="left"
                                 sx={{
                                   maxWidth: "50px",
                                 }}
                >{t("type")}</StyledTableCell>
                <StyledTableCell align="left"
                                 sx={{
                                   maxWidth: "200px",
                                 }}
                >{t("desc")}</StyledTableCell>
                <StyledTableCell align="left">{t("link")}</StyledTableCell>
                <StyledTableCell align="left">{t("option")}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {perfume
                  ? perfume.map((row: any, i: any) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell align="center">
                          {i + 1}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box className={style.imageWrap}>
                            <img src={row.foto} className={style.image}/>
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row"
                                         sx={{
                                           maxWidth: "200px",
                                         }}
                        >
                          <CustomTooltip title={row.nama.concat(" - ").concat(row.brand)}>
                            <Wrapper>
                              {row.brand} - {row.nama}
                            </Wrapper>
                          </CustomTooltip>
                        </StyledTableCell>
                        {/* <StyledTableCell align="left">{row.brand}</StyledTableCell> */}
                        <StyledTableCell align="left">
                          {row.tipe_aroma}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.ukuran}</StyledTableCell>
                        <StyledTableCell align="left">
                          {row.tipe_parfum}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <CustomTooltip title={row.deskripsi}>
                            <Wrapper>
                              {row.deskripsi}
                            </Wrapper>
                          </CustomTooltip>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <a href={row.link_pembelian}>
                            <CustomButton
                                bgcolor="green"
                                outline="1px solid green"
                            >
                              Link
                            </CustomButton>
                          </a>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <EditMenu
                              id={row.id}
                              data={row}
                              height="100px"
                          />
                          <Confirmations
                              bgcolor="#b10810"
                              outline="1px solid #820006"
                              title={`${t("delete")}`}
                              toDelete
                              xbutton
                              rowID={row.id}
                          ></Confirmations>
                        </StyledTableCell>
                      </StyledTableRow>
                  ))
                  : t("emptyEntry")}
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}
