import { supabase } from "@/lib/supabase/config";
import { SignUpUserType } from "../types/authTypes";

export async function signUpUser({
  email,
  password,
  fullName,
}: SignUpUserType) {
  const {
    data: { user },
    error: signUpError,
  } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log('user', user)
  if (signUpError || !user) {
    console.log("Error while registering to the Users table");
    throw new Error("Could not register");
  }
  console.log('profile', {user:user.id, fullName, email})
  const {data, error:profileError} = await supabase.from("profiles").insert([
    {
      user_id: user.id,
      full_name:fullName,
      email,
    },
  ]).select('*');
  if(profileError){
    console.log("Error while registering to the Profiles table");
    throw new Error("Could not register");
  }
  console.log(data)
  return data
}

//smth wrong , maybe i am blind and cant find the problem
