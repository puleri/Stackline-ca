import React from "react";

const Table = props => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sortBy("weekEnding")}>
              <div className='table-col'>
                week ending
                <span className="arrowIcon"> {props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailSales")}>
              <div className='table-col'>
                retail sales <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("wholesaleSales")}>
              <div className='table-col'>
                whosale sales <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("unitsSold")}>
              <div className='table-col'>
                units sold <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailerMargin")}>
              <div className='table-col'>
                retailer margin <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
