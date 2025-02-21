export type SupabaseUser={
    id:string;
    email:string;
}

export type SignUpUserType ={
    email:string;
    password:string;
    fullName:string;
}
export type SignInUserType ={
    email:string;
    password:string;
}


export type SessionUserType={
    id:string;
    email:string;
} | null

export type AuthContextStateType={
    isAuthenticated:boolean;
    isCheckingAuth:boolean;
    user:SessionUserType | null;
}
export type AuthContextValueType={
    isAuthenticated:boolean;
    user:SessionUserType | null;
}