import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Recommended from "./components/Recommended";
import MostPopular from "./components/MostPopular";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Recommended />
      <MostPopular />
      <Footer />
    </>
  );
}

export default App;