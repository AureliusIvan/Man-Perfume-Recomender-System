import { post, del, get } from "@/Component/FunctionComponent/axiosClient/axiosClient";

export async function add(values : any) {
  // await post("v1/admin/parfums/create", {
  await get("v1/parfums/view?random=1&qty=2", {
		// nama: values.name,
		// tipe_aroma : values.scent,
    // password: values.password,
  })
    .then((res: any) => {
      if (res.status === 200) {
        console.log("will be added : " + values);
      } else {
				
      }
    })
    .catch((err) => {
      console.log(err);
    });
	}
	
	export async function delData(id : any) {
		// await del("v1/admin/parfums/delete/" + id)
		await get("v1/parfums/view?random=1&qty=2")
    .then((res: any) => {
			if (res.status === 200) {
        console.log("id to delete : " + id);
      } else {
				
      }
    })
    .catch((err) => {
      console.log(err);
    });
	}
	
	export async function update(values : any) {
		// await post("v1/admin/parfums/update/" + values.id)
		await get("v1/parfums/view?random=1&qty=2")
    .then((res: any) => {
			if (res.status === 200) {
        console.log("to be edited : " + values.name);
      } else {
				
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// reference : https://bobbyhadz.com/blog/typescript-http-request-axios