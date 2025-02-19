"use client";
import LoginUser from "../components/LoginUser";
import { userLogged } from "../services/userService";
import { useState } from "react";
import dynamic from "next/dynamic";

const UserList = dynamic(() => import("../components/UserList"), { ssr: false });
const CreateUser = dynamic(() => import("../components/CreateUser"), { ssr: false });

export default function Home() {
  const [logged, setLogged] = useState(userLogged());
  const [register, setRegister] = useState(false);

  if (logged) return <div><UserList /></div>;
  if (logged === null) return <div>Loading...</div>;
  return (
    <div>
      { 
        register ? (
          <CreateUser goLogin={() => setRegister(false)} />
        ) : (
          <LoginUser goRegister={() => setRegister(true)} />
        )
      }
    </div>
  );
}
