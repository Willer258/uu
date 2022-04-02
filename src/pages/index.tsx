import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";

function PagesViews() {
  return (
    <div className="h-full">
      <Routes>
        <Route index element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<AuthLayout />} />
        <Route path="/app/*" element={<AppLayout />} />
      </Routes>
    </div>
  );
}

export default PagesViews;
