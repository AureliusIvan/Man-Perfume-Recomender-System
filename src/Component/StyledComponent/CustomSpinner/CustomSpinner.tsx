import style from "./CustomSpinner.module.scss";

export default function CustomSpinner(props: any) {
  let i = 12;
  return (
    <div className={style.lds}
      style={{
        height: "80px",
        width: "80px",
        // backgroundColor: "black",
      }}
    >
      {Array(i).fill(0).map((_, index) => {
        return (
          <div></div>
        )
      })}
    </div>
  )
}