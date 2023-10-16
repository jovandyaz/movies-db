import { createAsyncThunk } from "@reduxjs/toolkit";
import { newSessionUri } from "@/services/urls";
import client from "@/services/client";

export const authUser = createAsyncThunk("auth/getSession", async () => {
  try {
    const resp = await client.get(newSessionUri);
    return resp;
  } catch (error: any) {
    throw new Error(error.message);
  }
});
