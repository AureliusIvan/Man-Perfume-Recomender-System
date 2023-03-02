import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // for user token / bearer token
    token: "",
    // for separate user and admin
    privilage: "guest",
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
        setUserPrivilage(state, action) {
            state.privilage = action.payload;
        },
        // for login and logout method
        setLogin(state) {
            state.isLogin = true;
            state.privilage = "admin";
            // add token cookie 
        },
        setLogout(state) {
            state.isLogin = false;
            state.privilage = "guest";
            // delete token cookie
        }
    }
});

// export selector
export const selectData = (state: any) => state.userData;
export const selectToken = (state: any) => state.userData.token;
export const selectPrivilage = (state: any) => state.userData.privilage;
export const selectIsLogin = (state: any) => state.userData.isLogin;

// export action
export const { setUserToken, setUserPrivilage, setLogin, setLogout } = userDataSlice.actions;

export default userDataSlice.reducer;