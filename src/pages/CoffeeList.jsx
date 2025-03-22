import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch("/data/coffee.json")
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 px-8 pb-30 pt-10">
      {coffeeData.map((coffee) => ( 
        <ProductCard
          key={coffee.id}
          img={coffee.image_url}
          name={coffee.name}
          description={coffee.description}
          price={coffee.price}
        />
      ))}
    </div>
  );
};

export default CoffeeList;
