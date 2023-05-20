import * as React from "react";
import style from "./CustomTable.module.scss";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Confirmations, CustomModal } from "../CustomModal/CustomModal";

import { get } from "@/Component/FunctionComponent/axiosClient/axiosClient";
import { Box } from "@material-ui/core";
import EditMenu from "../CustomFormik/NewFormik/EditMenu";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomTable() {
  const [perfume, setPerfume] = React.useState<any>([]);

  async function fetchPerfume() {
    await get("v1/admin/parfums/view")
      .then((res: any) => {

        if (res.status === 200) {
          console.log(res.data.data);
          setPerfume(res.data.data);
        } else {
          console.log("error! res: " + res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    fetchPerfume();
    console.log("This is perfume:");
    console.log(perfume);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Gambar</StyledTableCell>
              <StyledTableCell align="center">Nama Parfum</StyledTableCell>
              <StyledTableCell align="center">Merk</StyledTableCell>
              <StyledTableCell align="center">Aroma</StyledTableCell>
              <StyledTableCell align="center">Ukuran&nbsp;(ml)</StyledTableCell>
              <StyledTableCell align="center">Tipe</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {perfume
              ? perfume.map((row: any, i: any) => (
                <StyledTableRow key={i}>
                  <StyledTableCell align="center">
                    <Box className={style.imageWrap}>
                      <img src={row.foto} className={style.image} />
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.nama}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.brand}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.tipe_aroma}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.ukuran}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.tipe_parfum}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* <CustomModal
                      xbutton
                      children
                      useFormik
                      formName="perfume"
                      title="Edit"
                      editornew="edit"
                      deletable
                      fId={row.id}
                      fName={row.nama}
                      fMerk={row.brand}
                      fScent={row.tipe_aroma}
                      fSize={row.ukuran}
                      fPrice={row.harga}
                      fImage={row.foto}
                      fLink={row.link_pembelian}
                      fDesc={row.deskripsi}
                      //
                      fscentIdx={row.scentIdx}
                      fdurIdx={row.durIdx}
                      fpriceIdx={row.priceIdx}
                      fqualityIdx={row.qualityIdx}
                    /> */}
                    <EditMenu
                      id={row.id}
                      data={row}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Confirmations
                      
                      title="Delete"
                      toDelete
                      xbutton
                      rowID={row.id}
                    ></Confirmations>
                  </StyledTableCell>
                </StyledTableRow>
              ))
              : "Entry Kosong"}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
