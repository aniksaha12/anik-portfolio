import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div>
      <>
        <Header/>
        <Banner />
        <About />
        <Contact />
      </>
    </div>
  );
}
