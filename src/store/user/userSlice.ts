import { createSlice } from '@reduxjs/toolkit'
import User from 'types/User';

const initialState: User = { 
    email: '',
    name: '',  
    tokenType: '',
    token: '',
    expiresOn: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.tokenType = action.payload.tokenType;
      state.token = action.payload.token;
      state.expiresOn = action.payload.expiresOn;
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer