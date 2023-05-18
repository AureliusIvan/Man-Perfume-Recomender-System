import { createSlice } from "@reduxjs/toolkit";
// import { get } from "../../Component/FunctionComponent/axiosClient/axiosClient";


const initialState = {
    // for user token / bearer token
    dataEntry: [],
    token: "",
    // for separate user and admin
    privilege: "guest",
    // for login and logout method
    isLogin: false,
};



const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserToken(state, action) {
            state.token = action.payload;
        },
        setUserPrivilege(state, action) {
            state.privilege = action.payload;
        },
        setLogin(state) {
            state.isLogin = true;
            state.privilege = "admin";
        },
        setLogout(state) {
            state.isLogin = false;
            state.privilege = "guest";
        },
        setDataEntry(state, action) {
            state.dataEntry = action.payload;
        }
    }
});



type UserData = {
    token: string;
    privilege: string;
    isLogin: boolean;
    dataEntry: object[];
};

type AppState = {
    userData: UserData;
};

// export selector
export const selectData = (state: AppState) => state.userData;
export const selectToken = (state: AppState) => state.userData.token;
export const selectprivilege = (state: AppState) => state.userData.privilege;
export const selectIsLogin = (state: AppState) => state.userData.isLogin;
export const selectDataEntry = (state: AppState) => state.userData.dataEntry;

// export action
export const { setUserToken, setUserPrivilege, setLogin, setLogout, setDataEntry } = userDataSlice.actions;

export default userDataSlice.reducer;