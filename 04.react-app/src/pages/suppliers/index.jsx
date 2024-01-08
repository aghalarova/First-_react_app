import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import SuppliersTable from "../../components/suppliers-table";

const SuppliersPage = () => {
  const [data, setData] = useState([]);
  const BASE_URL = `https://northwind.vercel.app/api`;
  const getData = async () => {
    let response = await axios(`${BASE_URL}/suppliers`);
    // console.log(response.data);
    setData(response.data)
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="products-page">
      <div className="container">
        <div className="products-page">
          <h2>Products Table</h2>
          <SuppliersTable suppliers={data} />
        </div>
      </div>
    </div>
  );
};

export default SuppliersPage;
