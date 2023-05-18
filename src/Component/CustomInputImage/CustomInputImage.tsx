import React, { useEffect, useState } from 'react'
import style from "./CustomInputImage.module.scss"
import { FileUploader } from 'react-drag-drop-files'
import { useField } from 'formik';

interface CustomInputImage {
    name: string;
    type: string;
    placeholder?: string;
    handleChange?: any,
    value?: any

    [x: string]: any;
}

function CustomInputImage(props: CustomInputImage) {
    const loadFile = (e: any) => {
        // var image = document.getElementById("output");
        // // image.src = URL.createObjectURL(e.target.files[0]);
        // setTheValue(URL.createObjectURL(image))
    }
    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/pjpeg",
        "image/svg+xml",
        "image/avif",
    ]

    const [field, meta, input] = useField(props);
    const [theValue, setTheValue] = useState(meta.initialValue);

    useEffect(() => {
        // console.log("field value : " + field.value)
        input.setValue(theValue)
    }, [theValue])
    
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
                accept="image/*"
                {...field}
				{...props}
                handleChange={(file: any) => {
                    setTheValue(URL.createObjectURL(file));
                }}
            >
                <div>
                    <div className={style.profilepic}>
                        <label className={style.label}>
                            <span className={style.glyphicon}></span>
                            <span>Change Image</span>
                        </label>
                        <input id="file" type="file" accept="image/*" />
                        <img src={theValue} id="output" width="200" />
                    </div>
                </div>
            </FileUploader>
        </div>
    )
}

export default CustomInputImage