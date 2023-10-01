"use client";

import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function Home() {
  console.log("where i render");
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1>Check</h1>
      <Link href="projects/list">click</Link>
    </div>
  );
}

export default Home;
