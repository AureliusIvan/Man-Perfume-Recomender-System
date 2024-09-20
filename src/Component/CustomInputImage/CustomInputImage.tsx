import React, {useState} from 'react'
import style from "./CustomInputImage.module.scss"
import {FileUploader} from 'react-drag-drop-files'
import {useField} from 'formik';

interface CustomInputImage {
  name?: string;
  type?: string;
  placeholder?: string;
  handleChange?: never,
  value?: never,

  [x: string]: any;
}

function CustomInputImage(props: CustomInputImage) {

  const [field, meta, input] = useField(props as never);
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
            handleChange={(file: never) => {
              input.setValue("image", file);
              setSrc(URL.createObjectURL(file));
              if (props.handleChange) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                props.handleChange(file);
              }
            }}
        >
          <div>
            <div className={style.profilepic}>
              <label className={style.label}>
                <span className={style.glyphicon}></span>
                <span>Change Image</span>
              </label>
              <input type="file" accept="image/*"/>
              <img src={src} width="200" alt={"insert file"}/>
            </div>
          </div>
        </FileUploader>
      </div>
  )
}

export default CustomInputImage