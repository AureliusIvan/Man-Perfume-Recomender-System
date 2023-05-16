import React, { useEffect, useState } from 'react'
import style from "./CustomInputImage.module.scss"
import { FileUploader } from 'react-drag-drop-files'

interface CustomInputImage {
    handleChange: any,
    value: any
}


function CustomInputImage(props: CustomInputImage) {
    const loadFile = (e: any) => {
        // var image = document.getElementById("output");
        // image.src = URL.createObjectURL(e.target.files[0]);
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

    return (
        <div
            className={style.input}>
            <FileUploader
                child
                handleChange={(file: any) => props.handleChange ? props.handleChange(file) : null}
                // types={fileTypes}
                multiple={false}
                maxFileSize={1000000}
                minFileSize={0}
                maxFiles={1}
                minFiles={0}
                accept="image/*"
            >
                <div
                >
                    <div className={style.profilepic}>
                        <label className={style.label}>
                            <span className={style.glyphicon}></span>
                            <span>Change Image</span>
                        </label>
                        <input id="file" type="file" onChange={loadFile} />
                        <img src={!props.value ? "https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" : URL.createObjectURL(props.value)} id="output" width="200" />
                        {/* {vaksin && vaksin.name} */}
                    </div>
                </div>
            </FileUploader>
        </div>
    )
}

export default CustomInputImage