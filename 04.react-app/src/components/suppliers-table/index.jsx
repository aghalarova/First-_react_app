import React from "react";
import "./index.css";
const SuppliersTable = ({ suppliers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {suppliers?.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>{item.address.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
