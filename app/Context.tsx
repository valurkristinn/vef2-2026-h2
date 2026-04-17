'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { getUser } from "@/src/fetch"



interface UserContextType {
    name: string
    role: string
    getUser: () => Promise<void>
    setName: (name: string) => void;
    setRole: (role: string) => void;
}

export const UserContext = createContext<UserContextType|null>(null);

export type Props = {
  children: React.ReactNode
}

export function UserProvider ({ children }: Props){
  const [name, setName] = useState("guest");
  const [role, setRole] = useState("user");

  useEffect(() => {
  const getLoggedUser = async () => {
    const res = await getUser()

    if (res?.success && res.user) {
      setName(res.user.name)
      setRole(res.user.role)
    } else {
      setName("guest")
      setRole("user")
    }

  }

    getLoggedUser()
  }, [])

    

  return (
    <UserContext.Provider value={{ name, role,setName, setRole}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext)