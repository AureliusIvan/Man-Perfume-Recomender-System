import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../Component/FunctionComponent/axiosClient/axiosClient";


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
        // for login and logout method
        setLogin(state) {
            state.isLogin = true;
            state.privilege = "admin";
            // add token cookie 
        },
        setLogout(state) {
            state.isLogin = false;
            state.privilege = "guest";
            // delete token cookie
        },
        setDataEntry(state, action) {
            state.dataEntry = action.payload;
        }
    }
});

// export selector
export const selectData = (state: any) => state.userData;
export const selectToken = (state: any) => state.userData.token;
export const selectprivilege = (state: any) => state.userData.privilege;
export const selectIsLogin = (state: any) => state.userData.isLogin;
export const selectDataEntry = (state: any) => state.userData.dataEntry;

// export action
export const { setUserToken, setUserPrivilege, setLogin, setLogout, setDataEntry } = userDataSlice.actions;

export default userDataSlice.reducer;