// src/app/page.tsx
"use client";

import React from "react";
import NotificationSection from "./components/NotificationSection";
import CardSection from "./components/CardSection";
import FooterSection from "./components/FooterSection";
import NavBar from "./components/NavBar";

export default function Page() {
  return (
    <main>
      <NotificationSection />
      <NavBar />
      <CardSection />
      <FooterSection />
      <div className="p-6">
        <h1 className="text-3xl font-bold"></h1>
      </div>
    </main>
  );
}
