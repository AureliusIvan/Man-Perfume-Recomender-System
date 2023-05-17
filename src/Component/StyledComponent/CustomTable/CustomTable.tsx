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
import { getCookie } from "react-use-cookie";

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

  async function fetchh() {
    const TOKEN = getCookie("TOKEN");
    console.log(TOKEN);
    await get("v1/admin/parfums/view")
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchPerfume() {
    await get("v1/parfums/view?random=1&qty=2")
      .then((res: any) => {
        // console.log(res.data.data);
        if (res.status === 200) {
          // console.log(res.data.data)
          setPerfume(res.data.data);
          // setLoading(false);
          // setCookie("TOKEN", res.data.data.token);
          // navigate("/admin");
        } else {
          // setLoading(false);
          // setMessage(res);
          // showerror();
          console.log("error! res: " + res);
        }
      })
      .catch((err) => {
        console.log(err);
        // setMessage(err);
        // showerror();
        // setLoading(false);
      });
  }

  React.useEffect(() => {
    fetchPerfume();
  }, []);

  return (
    <>
      <button onClick={fetchh}>display</button>
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
                    <StyledTableCell align="left">{}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.tipe_aroma}
                    </StyledTableCell>
                    <StyledTableCell align="left">{}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.tipe_parfum}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <CustomModal
                        xbutton
                        children
                        useFormik
                        formName="editPerfume"
                        title="Edit"
                        editornew="edit"
                        deletable
                        fName={row.nama}
                        // fMerk={}
                        fScent={row.tipe_aroma}
                        // fSize={}
                        // fPrice={}
                        fImage={row.foto}
                        // fLink={}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Confirmations
                        title="Delete"
                        toDelete
                        rowID={row.id}
                        // onConfirm={""}
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
