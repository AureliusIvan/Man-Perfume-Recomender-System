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

    const [field, meta, input] = useField(props);
    const [src, setSrc] = useState(meta.initialValue);

    return (
        <div
            className={style.input}>
            <FileUploader
                child
                multiple={false}
                maxFileSize={1000000}
                minFileSize={0}
                maxFiles={1}
                minFiles={0}
                types={['png', 'jpeg', 'jpg']}
                // {...field}
                // {...props}
                handleChange={(file: any) => {
                    input.setValue("image", file)
                    console.log(file)
                    setSrc(URL.createObjectURL(file));
                    console.log("url : " + src);
                }}
            >
                <div>
                    <div className={style.profilepic}>
                        <label className={style.label}>
                            <span className={style.glyphicon}></span>
                            <span>Change Image</span>
                        </label>
                        <input type="file" accept="image/*" />
                        <img src={src} width="200" />
                    </div>
                </div>
            </FileUploader>
        </div>
    )
}

export default CustomInputImage