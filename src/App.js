import React from "react";
import TemplateCard from "./components/elements/TemplateCard";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Breadcrumb from "./components/sections/Breadcrumb";
import Cards from "./components/sections/Cards";
import Discount from "./components/sections/Discount";
import Faq from "./components/sections/Faq";
import Popup from "./components/sections/Popup";
import Search from "./components/sections/Search";
import Show from "./components/sections/Show";
import Title from "./components/sections/Title";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <main className="content">
        <Breadcrumb></Breadcrumb>
        <Title></Title>
        <Discount></Discount>
        <Search></Search>
        <Cards></Cards>
        <Show></Show>
        <Faq></Faq>
      </main>
      <Footer></Footer>
      <Popup></Popup>
      <TemplateCard></TemplateCard>
    </div>
  );
}

export default App;
