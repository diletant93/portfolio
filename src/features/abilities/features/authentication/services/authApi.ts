import { supabase } from "@/lib/supabase/config";
import { SignUpUserType } from "../types/authTypes";

export async function signUpUser({
  email,
  password,
  fullName,
}: SignUpUserType) {
  try {

    const isUserExisted = await checkUserExists(email)
    if(isUserExisted) throw new Error("User already exists");

    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError || !user) {
      console.log("Error while registering to the Users table");
      throw new Error("Could not register");
    }

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
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
  
}

export async function checkUserExists(email:string){
  try {
    const {data, error} = await supabase.from('profiles').select('email').eq('email',email);
    if(error){
      console.log("Error while checking if user exists");
      throw new Error("Could not check if user exists");
    }
    return data.length > 0
  } catch (error) {
    console.log("Error while checking if user exists");
    throw new Error("Could not check if user exists");    
  }
}


//smth wrong , maybe i am blind and cant find the problem
