import React from "react";
import "./PriceList.scss";
import pole from "../../assets/pole.png";

export default function PriceList() {
  const arrayPrice = [
    {
      key: 1,
      id: ".01",
      type: "Pánsky strih",
      price: "20€",
    },
    {
      key: 2,
      id: ".02",
      type: "Pánsky strih, úprava fúzov a brady",
      price: "30€",
    },
    {
      key: 3,
      id: ".03",
      type: "Úprava brady",
      price: "15€",
    },
    {
      key: 4,
      id: ".04",
      type: "Junior strih",
      price: "15€",
    },
    {
      key: 5,
      id: ".05",
      type: "Oholenie hlavy, úprava fúzov a brady",
      price: "30€",
    },
  ];

  return (
    <div className="priceList-part">
      <div className="priceList-Header">
        <img src={pole} alt="pole"></img>
        <h3>CENNÍK</h3>
        <img src={pole} alt="pole"></img>
      </div>

      <div className="priceList">
        {arrayPrice.map((index) => (
          <div className="price" key={index.key}>
            <h3>{index.id}</h3>
            <div className="priceRow">
              <div className="left"><h3>{index.type}</h3></div>
              <div className="separator"></div>
              <div className="right"><h3>{index.price}</h3></div>
            </div>
          </div>
        ))}
      </div>

            <p>Cenník platný od 1.12.2022</p>
      <div className="line"></div>
    </div>
  );
}
