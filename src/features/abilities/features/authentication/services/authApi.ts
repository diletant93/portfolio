import { supabase } from "@/lib/supabase/config";
import { SessionUserType, SignInUserType, SignUpUserType } from "../types/authTypes";

export async function signUpUser({
  email,
  password,
  fullName,
}: SignUpUserType) {
  try {
    const isUserExisted = await checkUserExists(email);
    if (isUserExisted) throw new Error("User already exists");

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

    const { data, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          user_id: user.id,
          full_name: fullName,
          email,
        },
      ])
      .select("*");
    if (profileError) {
      console.log("Error while registering to the Profiles table");
      throw new Error("Could not register");
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInUser({ email, password }: SignInUserType) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("Error while signing in");
      throw new Error("Could not sign in");
    }
    return data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getCurrentUser (){
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log("Error while checking user session");
      throw new Error("Could not check user session");
    }
    return data.user as SessionUserType;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function logoutUser(){
  try {
    const {error} = await supabase.auth.signOut()
    if (error) {
      console.log("Error while logging out");
      throw new Error("Could not log out");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function checkUserExists(email: string) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("email")
      .eq("email", email);
    if (error) {
      console.log("Error while checking if user exists");
      throw new Error("Could not check if user exists");
    }
    return data.length > 0;
  } catch (error) {
    console.log("Error while checking if user exists");
    throw new Error("Could not check if user exists");
  }
}

//smth wrong , maybe i am blind and cant find the problem
