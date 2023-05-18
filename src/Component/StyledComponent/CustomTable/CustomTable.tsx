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

import { get } from "@/Component/FunctionComponent/axiosClient/axiosClient";



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

// JUST FOR EXAMPLE
const rows = [
  createData("Parfum Bunga", 159, 6.0, 24, 4),
  createData("Parfum Apa gitu", 237, 9.0, 37, 4.3),
  createData("Parfum Laki-laki", 262, 16.0, 24, 6.0),
  createData("Parfum refil", 305, 3.7, 67, 4.3),
  // createData("Parfum jambu air", 356, 16.0, 49, 3.9),
  // createData("Parfum Bunga", 159, 6.0, 24, 4),
  // createData("Parfum Apa gitu", 237, 9.0, 37, 4.3),
  // createData("Parfum Laki-laki", 262, 16.0, 24, 6.0),
  // createData("Parfum refil", 305, 3.7, 67, 4.3),
  // createData("Parfum jambu air", 356, 16.0, 49, 3.9),
];

export default function CustomTable() {
  const [perfume, setPerfume] = React.useState<any>([]);

  async function fetchPerfume() { 
    await get("v1/admin/parfums/view"
    ).then((res: any) => {

      // console.log(res.data.data);
      if (res.status === 200) {
        console.log(res.data.data)
        setPerfume(res.data.data);
        // console.log(perfume);
        // console.log("success! res: " + res.status)
        // setLoading(false);
        // setCookie("TOKEN", res.data.data.token);
        // navigate("/admin");
      } else {
        // setLoading(false);
        // setMessage(res);
        // showerror();
        console.log("error! res: " + res);
      }
    }
    ).catch((err) => {
      console.log(err);
      // setMessage(err);
      // showerror();
      // setLoading(false);
    })
  }

  React.useEffect(() => {
    fetchPerfume();
    // console.log(perfume)
  }, []);

  return (
    <>
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
            {perfume ?
              (perfume.map((row: any, i: any) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                    {row.nama}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
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
                  // fPrice={}
                  // fImage={}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Confirmations
                  title="Delete"
                  onConfirm={""}
                  onCancel={""}
                ></Confirmations>
              </StyledTableCell> */}
                </StyledTableRow>
              ))) : "Entry Kosong"}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
