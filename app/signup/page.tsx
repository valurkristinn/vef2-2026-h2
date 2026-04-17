"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/src/fetch";


export default function Signup(){
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setError("");


    const response = await signup({name, email, password });
    console.log(response)

    router.push("/");

  }

    return(
    
    <form onSubmit={onSubmit}>
        <h1>Sign up</h1>

        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          Signup
        </button>
      </form>
        
    );
}