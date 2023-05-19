import React, { useEffect, useState } from 'react'
import style from "./CustomInputImage.module.scss"
import { FileUploader } from 'react-drag-drop-files'
import { useField } from 'formik';

interface CustomInputImage {
    name: string;
    type: string;
    placeholder?: string;
    handleChange?: void,
    value?: any
    
    [x: string]: any;
}

function CustomInputImage(props: CustomInputImage) {
    const loadFile = (e: any) => {
        // var image = document.getElementById("output");
        // // image.src = URL.createObjectURL(e.target.files[0]);
        // setSrc(URL.createObjectURL(image))
    }
    const fileTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png",
    ]

    const [field, meta, input] = useField(props);
    const [src, setSrc] = useState(meta.initialValue);

    return (
        <div
            className={style.input}>
            <FileUploader
                child
                // types={fileTypes}
                multiple={false}
                maxFileSize={1000000}
                minFileSize={0}
                maxFiles={1}
                minFiles={0}
                // accept="image/*"
                types={['png', 'jpeg', 'jpg']}
                {...field}
                {...props}
                handleChange={(file: any) => {
                    input.setValue("image", file)
                    console.log(file)
                    setSrc(URL.createObjectURL(file));
                }}
            >
                <div>
                    <div className={style.profilepic}>
                        <label className={style.label}>
                            <span className={style.glyphicon}></span>
                            <span>Change Image</span>
                        </label>
                        <input id="file" type="file" accept="image/*" />
                        <img src={src} id="output" width="200" />
                    </div>
                </div>
            </FileUploader>
        </div>
    )
}

export default CustomInputImage