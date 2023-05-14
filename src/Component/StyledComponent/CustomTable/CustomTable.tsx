import * as React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Confirmations, CustomModal } from "../CustomModal/CustomModal";

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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: any
) {
  return { name, calories, fat, carbs, protein };
}

// export const editPerfumeData = [
//   name,
//   cal,
//   fat,
//   carbs,
//   pro,
//   // { dataCal: cal },
//   // { dataFat: fat },
//   // { dataCarbs: carbs },
//   // { dataPro: pro },
// ];

// JUST FOR EXAMPLE
const rows = [
  createData("Parfum Bunga", 159, 6.0, 24, 4),
  createData("Parfum Apa gitu", 237, 9.0, 37, 4.3),
  createData("Parfum Laki-laki", 262, 16.0, 24, 6.0),
  createData("Parfum refil", 305, 3.7, 67, 4.3),
  createData("Parfum jambu air", 356, 16.0, 49, 3.9),
  createData("Parfum Bunga", 159, 6.0, 24, 4),
  createData("Parfum Apa gitu", 237, 9.0, 37, 4.3),
  createData("Parfum Laki-laki", 262, 16.0, 24, 6.0),
  createData("Parfum refil", 305, 3.7, 67, 4.3),
  createData("Parfum jambu air", 356, 16.0, 49, 3.9),
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nama Parfum</StyledTableCell>
            <StyledTableCell align="right">Aroma</StyledTableCell>
            <StyledTableCell align="right">Harga&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Merk&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">
                <CustomModal
                  xbutton
                  children
                  useFormik
                  formName="editPerfume"
                  title="Edit"
                  deletable
                  fName={row.name}
                  fMerk={row.calories}
                  // fScent={}
                  // fSize={}
                  // fMinPrice={}
                  // fMaxPrice={}
                  // fImage={}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Confirmations
                  title="Delete"
                  onConfirm={""}
                  onCancel={""}
                ></Confirmations>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
