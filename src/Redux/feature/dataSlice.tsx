import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
};

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserToken(state, action) {
            state.token = action.payload.token;
        }
    }
});

export const selectData = (state: any) => state.userData;

export const { setUserToken } = userDataSlice.actions;

export default userDataSlice.reducer;