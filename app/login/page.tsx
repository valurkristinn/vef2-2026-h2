"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/src/fetch";
import {getUser} from "@/src/fetch";
import { useUserContext } from "../Context";


export default function Login(){
    const router = useRouter();
    const user = useUserContext()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setError("");

    const response = await login({ email, password });

    console.log(response)

    if(response.success){
      setError("Rangur innsláttur á email/lykilorði")
      return
    }

    if (!user) return null
    const userRes = await getUser();

    if (userRes.success && userRes.user) {
      user.setName(userRes.user.name);
      user.setRole(userRes.user.role);
    }
      
    router.push("/");

  }

    return(
    
    <form onSubmit={onSubmit}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p>{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>
        
    );
}