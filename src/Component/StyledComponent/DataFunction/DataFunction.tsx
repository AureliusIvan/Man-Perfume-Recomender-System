import React from "react";
import { get } from "@/Component/FunctionComponent/axiosClient/axiosClient";

export async function add(values: any) {
  // await post("v1/admin/parfums/create", {
  await get("v1/parfums/view?random=1&qty=2")
    .then((res: any) => {
      if (res.status === 200) {
        console.log("will be added : " + values);
      } else {
        console.log("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function delData(id: any) {
  // await del("v1/admin/parfums/delete/" + id)
  await get("v1/parfums/view?random=1&qty=2")
    .then((res: any) => {
      if (res.status === 200) {
        console.log("id to delete : " + id);
      } else {
        console.log("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function update(values: any) {
  // await post("v1/admin/parfums/update/" + values.id)
  await get("v1/parfums/view?random=1&qty=2")
    .then((res: any) => {
			if (res.status === 200) {
        console.log("to be edited : " + values.name);
      } else {
        console.log("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// reference : https://bobbyhadz.com/blog/typescript-http-request-axios