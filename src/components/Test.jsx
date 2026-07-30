"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Test = () => {
  const session = useSession();
  return <div>Client: {JSON.stringify(session)}</div>;
};

export default Test;
