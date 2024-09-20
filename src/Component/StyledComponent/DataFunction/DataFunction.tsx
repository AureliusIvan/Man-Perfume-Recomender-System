import {del, post,} from "@/Component/FunctionComponent/axiosClient/axiosClient";
import {useEffect} from "react";

export function appendData(values: any) {
  const formData = new FormData();
  useEffect(() => {
    console.log(values);
  }, [values]);
  formData.append("foto", values.foto);
  formData.append("nama", values.name);
  formData.append("brand", values.merk);
  formData.append("tipe_aroma", values.scent);
  formData.append("tipe_parfum", values.scent);
  formData.append("ukuran", values.size);
  formData.append("harga", values.price);
  formData.append("link_pembelian", values.link);
  formData.append("deskripsi", values.desc);
  formData.append("foto", values.image);

  formData.append("aroma_index", values.scentIdx);
  formData.append("durability_index", values.durIdx);
  formData.append("price_index", values.priceIdx);
  formData.append("quality_index", values.qualityIdx);

  return formData;
}

export async function add(values: any, foto: any) {
  const formData = new FormData();
  formData.append("foto", foto);
  formData.append("nama", values.name);
  formData.append("brand", values.merk);
  formData.append("tipe_aroma", values.scent);
  formData.append("tipe_parfum", values.scent);
  formData.append("ukuran", values.size);
  formData.append("harga", values.price);
  formData.append("link_pembelian", values.link);
  formData.append("deskripsi", values.desc);
  formData.append("foto", values.image);
  formData.append("aroma_index", values.scentIdx);
  formData.append("durability_index", values.durIdx);
  formData.append("price_index", values.priceIdx);
  formData.append("quality_index", values.qualityIdx);

  await post("v1/admin/parfums/create", formData)
      .then((res: any) => {
        console.log(values.get("foto"))
        console.log("foto : ", foto)
        if (res.status === 200) {
          console.log("creation done successfully!")
          console.log("will be added : ", values.get("foto"));
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

export async function delData(id: any) {
  await del("v1/admin/parfums/delete/" + id)
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
      .then((res: any) => {
        if (res.status === 200) {
          console.log("to be edited : ", id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
}
