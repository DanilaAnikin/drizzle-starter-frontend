"use client";
import LoginUser from "../components/LoginUser";
import { userLogged } from "../services/userService";
import { useEffect, useState } from "react";
import CreateUser from '../components/CreateUser';
import UserList from '../components/UserList';


export default function Home() {
  const isLogged = typeof window !== "undefined" ? userLogged() : false;
  const [logged, setLogged] = useState(isLogged);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    if (logged === false) {
      const checkLogin = async () => {
        const status = await userLogged();
        setLogged(status);
        
        console.log(isLogged);
        
        checkLogin();
      }
    }
  }, []);

  if (logged === null) return <div>Loading...</div>;
  
  if (logged) return <div><UserList /></div>;
  if (register) return <div><CreateUser goLogin={() => setRegister(false)} /></div>
  return <div><LoginUser goRegister={() => setRegister(true)} /></div>
}
