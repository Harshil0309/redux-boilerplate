import React from "react";

import { useSelector } from "react-redux";

const products = [
  {
    name: "Product1",
    priceInDollar: 10,
  },
  {
    name: "Product2",
    priceInDollar: 20,
  },
  {
    name: "Product3",
    priceInDollar: 23,
  },
  {
    name: "Product4",
    priceInDollar: 55,
  },
];

function ProductPage() {
  const currency = useSelector((state) => {
    return state.currency;
  });

  const renderProductPrice = (price) => {
    if (currency.currency == "$") {
      return price;
    }
    return price * 80;
  };

  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <div>
              <h1>{product.name}</h1>
              <div>{renderProductPrice(product.priceInDollar)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
