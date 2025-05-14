import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Component/Home";
import { Footer } from "../Component/Footer";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
};
