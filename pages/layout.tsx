import React from "react";
import Head from "next/head";

const customStyle = {
  width: "200px",
  height: "200px",
  background: "black",
  margin: "20px 20px",
  color: "white",
  fontSize: "2rem",
};

const customChildrenContainer = {
  width: "200px",
  height: "200px",
  background: "blue",
};

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div style={customStyle}> THis is navbar</div>

      <div style={customStyle}> THis is main</div>

      <div style={customChildrenContainer}> {children}</div>

      <div style={customStyle}> THis is footer</div>
    </>
  );
};

export default Layout;
