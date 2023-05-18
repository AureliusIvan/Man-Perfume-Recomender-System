import { Paragraf } from "../../../Component/StyledComponent/Typography/CustomTypography";
import { useEffect, useState } from "react";
import { get, getGuest } from "../../../Component/FunctionComponent/axiosClient/axiosClient";
import { ResultCard } from "../../../Component/StyledComponent/CustomCard/CustomCard";
import { Grid as G } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Center from "../../../Component/StyledComponent/CustomCenter/Center";
import { useDispatch, useSelector } from "react-redux";
import { setDataEntry, selectDataEntry } from "@/Redux/feature/dataSlice";

const Grid = styled(G)(({ theme }) => ({
    paddingTop: '20px',
}));

const GridItem = styled(G)(({ theme }) => ({
    padding: '10px',
}));



export default function Recommendation() {
    const [item, setItem] = useState<object[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch();
    const dataEntry = useSelector(selectDataEntry);
    useEffect(() => {
        if (dataEntry) {
            try {
                setLoading(true);
                getGuest("v1/parfums/view?random=1&qty=2")
                    .then((res: any) => {
                        console.log(res)
                        setItem(res.data.data)
                        dispatch(setDataEntry(res.data))
                    }).catch((err: any) => {
                        console.log(err)
                    })
                setLoading(false);
            }
            catch (err) {
                console.log(err)
            }
        } else {
            setItem(dataEntry)
        }
    }, [])

    return (
        <>
            <Center>
                <Paragraf title={"Parfum Kekinian 2023"} width={'300px'}>
                    Daftar parfum yang mungkin anda sukai sebagai pria sejati
                </Paragraf>
            </Center>
            <Grid container>
                {item.map((item: any, index) => {
                    return (
                        <GridItem item xs={12} key={index}>
                            <ResultCard
                                title={item.nama}
                                image={item.foto}
                                data={item}
                                key={index} />
                        </GridItem>
                    )
                })}
            </Grid>
        </>
    )
}

