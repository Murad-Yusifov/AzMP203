import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import HEader from "../pages/HEader";
import { UserProvider } from "../context/Context";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />           
          </Route>
          <Route path="/header" element={<HEader />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default Router;
