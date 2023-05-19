import {
  post,
  del,
  get,
} from "@/Component/FunctionComponent/axiosClient/axiosClient";
import { useEffect } from "react";

export function appendData(values: any) {

  useEffect(() => {
    console.log(values);
  }, [values]);
  const formdata = new FormData();
  // harusnya 13
  formdata.append("foto", values.foto);
  formdata.append("nama", values.name);
  formdata.append("brand", values.merk);
  formdata.append("tipe_aroma", values.scent);
  formdata.append("tipe_parfum", values.scent);
  formdata.append("ukuran", values.size);
  formdata.append("harga", values.price);
  formdata.append("link_pembelian", values.link);
  formdata.append("deskripsi", values.desc);
  formdata.append("foto", values.image);

  formdata.append("aroma_index", values.scentIdx);
  formdata.append("durability_index", values.durIdx);
  formdata.append("price_index", values.priceIdx);
  formdata.append("quality_index", values.qualityIdx);

  return formdata;
}

// masalah ada di image input 
// -> kolom harus diisi / image harus dalam bentuk .jpg, .jpeg, .png

export async function add(values: any, foto: any) {
  const formdata = new FormData();
  formdata.append("foto", foto);
  formdata.append("nama", values.name);
  formdata.append("brand", values.merk);
  formdata.append("tipe_aroma", values.scent);
  formdata.append("tipe_parfum", values.scent);
  formdata.append("ukuran", values.size);
  formdata.append("harga", values.price);
  formdata.append("link_pembelian", values.link);
  formdata.append("deskripsi", values.desc);
  formdata.append("foto", values.image);
  formdata.append("aroma_index", values.scentIdx);
  formdata.append("durability_index", values.durIdx);
  formdata.append("price_index", values.priceIdx);
  formdata.append("quality_index", values.qualityIdx);

  await post("v1/admin/parfums/create", formdata)
    // await get("v1/admin/parfums/view")
    .then((res: any) => {
      console.log(values.get("foto"))
      console.log("foto : ", foto)
      if (res.status === 200) {
        console.log("creation done successfully!")
        console.log("will be added : ", values.get("foto"));
        // window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function delData(id: any) {
  await del("v1/admin/parfums/delete/" + id)
    // await get("v1/parfums/view?random=1&qty=2")
    .then((res: any) => {
      if (res.status === 200) {
        console.log("Delete success!")
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function update(values: any, id: any) {
  await post("v1/admin/parfums/update/" + id, values)
    // await get("v1/admin/parfums/view")
    .then((res: any) => {
      if (res.status === 200) {
        // console.log("Edit successful!")
        // window.location.reload();
        console.log("to be edited : ", id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// reference : https://bobbyhadz.com/blog/typescript-http-request-axios
