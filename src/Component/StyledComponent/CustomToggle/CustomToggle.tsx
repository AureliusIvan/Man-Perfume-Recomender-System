import {styled} from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const CustomToggle = styled(Switch)(() => ({
  width: 68,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(28px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'><mask id='a'><circle cx='256' cy='256' r='256' fill='%23fff'/></mask><g mask='url(%23a)'><path fill='%23eee' d='m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z'/><path fill='%230052b4' d='M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z'/><path fill='%23d80027' d='M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z'/></g></svg>")`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#8796A5",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#003892",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'><mask id='a'><circle cx='256' cy='256' r='256' fill='%23fff'/></mask><g mask='url(%23a)'><path fill='%23eee' d='m0 256 249.6-41.3L512 256v256H0z'/><path fill='%23a2001d' d='M0 0h512v256H0z'/></g></svg>")`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#8796A5",
    borderRadius: 20 / 2,
  },
}));

export default CustomToggle;
