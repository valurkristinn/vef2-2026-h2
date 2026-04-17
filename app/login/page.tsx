"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/src/fetch";


export default function Login(){
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setError("");


    const response = await login({ email, password });
    console.log(response)

    if(response.error){
      setError("Rangur innsláttur á email/lykilorði")
      return
    }
    router.push("/");

  }

    return(
    
    <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <h4>Email</h4>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />   
        <h4>Password</h4>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        {error && <p>{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>
        
    );
}