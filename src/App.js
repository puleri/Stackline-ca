import React from "react";
import "./css/App.css";

import ProductContainer from "./js/containers/ProductContainer";
import TableContainer from "./js/containers/TableContainer";
import ChartContainer from "./js/containers/ChartContainer";
import Header from "./js/components/Header";

export default function App() {

    return (
      <div className="grid-container">
        <div className="product-container">
          <ProductContainer />
        </div>
        <div className="chart-container">
          <ChartContainer />
        </div>
        <div className="table-container">
          <TableContainer />
        </div>
        <div className="header-container">
          <Header />
        </div>
      </div>
    );
  
}
