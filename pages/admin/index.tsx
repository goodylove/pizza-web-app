"use client";

import { CustomButton } from "@/components";
import React from "react";

function Admin() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <form className="flex flex-col gap-3">
        <h3 className="font-[500]">Admin Dashboard</h3>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="border-2 p-2 rounded-md outline-none"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 p-2 rounded-md outline-none"
        />
        <CustomButton
          className="bg-[#21965b] text-white flex items-center text-center text-[14px] justify-center gap-2 p-3  mt-3 "
          title="Sign in"
        />
      </form>
    </section>
  );
}

export default Admin;
