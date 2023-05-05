import React from "react";
import "../src/Components/App.css";
import Navbar from "../src/Components/Navbar";
import Hero from "../src/Components/Hero";
import Card from "../src/Components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
