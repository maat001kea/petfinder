// src/app/page.tsx
"use client";

import React from "react";
import NotificationSection from "./components/NotificationSection";
import SingleView from "./components/SingleView";

export default function Page() {
  return (
    <main>
      <NotificationSection />
      <SingleView />

      <div className="p-6">
        <h1 className="text-3xl font-bold">Velkommen til iWatch</h1>
      </div>
    </main>
  );
}
