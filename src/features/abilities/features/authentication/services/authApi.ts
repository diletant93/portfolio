import { axiosConfig, secretKeyHeaders } from "@/lib/axios/config";
import axios, { AxiosResponse } from "axios";
import { SupabaseUser } from "../../../types/authTypes";

//checkUserExists
//Sign up user

const apiClient = axios.create({
  baseURL: `https://${axiosConfig.suppabaseApiKey}.supabase.co/auth/v1`,
});

export async function checkUserExists(email: string) {
  try {
    const response: AxiosResponse<SupabaseUser[]> = await apiClient.get<
      SupabaseUser[]
    >(`/admin/users?email=eq.${email}`, { headers: secretKeyHeaders });
    if (response.data.length > 0) {
      console.log("User exists", response.data);
      return true;
    }
    if (response.data.length <= 0) {
      console.log("User does not exist");
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function Register(someData: { email: string }) {
  try {
    await checkUserExists(someData.email)
  } catch (error) {
    console.log(error);
    throw error;
  }
}
