"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/src/fetch";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const response = await signup({ name, email, password });
    console.log(response);

    if (response.error) {
      setError(
        "Innskráning tókst ekki. Lykilorð þarf að vera 5 á lengd eða email er rangt.",
      );
      return;
    }
    router.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Stofna aðgang</h1>
      <h4>Nafn</h4>
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <h4>Netfang</h4>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <h4>Lykilorð</h4>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br></br>
      {error && <p>{error}</p>}

      <button type="submit">Stofna aðgang</button>
      <p>
        Ertu með aðgang? Þú getur skráð þig inn <Link href="login">hér</Link>
      </p>
    </form>
  );
}
