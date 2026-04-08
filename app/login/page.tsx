"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/src/fetch";


export default function Login(){
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setError("");


    const response = await adminLogin({ email, password });
    console.log(response)

    router.push("/");

  }

    return(
    
    <form onSubmit={onSubmit}>
        <h1>Admin Login</h1>

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