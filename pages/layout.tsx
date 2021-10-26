import React from "react";
import Head from "next/head";
import Link from "next/link";

const customStyle = {
  nav: {
    display: "flex",
    height: "5rem",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    color: "white",
    fontSize: "2rem",
  },
  main: {
    display: "flex",
    minHeight: "45rem",
    justifyContent: "center",
    alignItems: "center",
    background: "lightGray",
    color: "black",
    fontSize: "2rem",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5rem",
    background: "purple",
    color: "white",
    fontSize: "2rem",
  },
  shit: {
    margin: "0 1rem",
    cursor: "pointer",
    "&:hover": {
      color: "purple",
    },
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div style={customStyle.nav}>
        <Link href="/" passHref>
          <a
            style={customStyle.shit}
            onMouseOver={(e) => (e.currentTarget.style.color = "yellow")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Home
          </a>
        </Link>
        <Link href="/testPage" passHref>
          <a
            style={customStyle.shit}
            onMouseOver={(e) => (e.currentTarget.style.color = "yellow")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            TestPage
          </a>
        </Link>
      </div>

      <div style={customStyle.main}> {children}</div>

      <div style={customStyle.footer}> THis is footer</div>
    </>
  );
};

export default Layout;
