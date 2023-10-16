import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "../thunks/authThunk";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  errorMessage?: string;
  sessionId?: string;
  expiresAt?: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  errorMessage: "",
  sessionId: "",
  expiresAt: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = initialState.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(authUser.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.errorMessage = "";
      state.sessionId = payload.guest_session_id;
      state.expiresAt = payload.expires_at;
    });

    builder.addCase(authUser.rejected, (state, action) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.isLoading = false;
      state.errorMessage =
        action.error.message ?? "Algo salió mal. Por favor, intenta de nuevo.";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
