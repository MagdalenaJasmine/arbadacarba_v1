import React from "react";
import "./bill-table.styles.scss";

import BILL_DATA from "./bills.data.js";
class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: BILL_DATA,
    };
  }

  renderTableData() {
    return this.state.bills.map((bill, index) => {
      const { name, stage, id } = bill;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td> {name}</td>
          <td>{stage}</td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(this.state.bills[0]);
    return header.map((key, index) => {
      return <th key={index}> {key.toUpperCase()} </th>;
    });
  }
  render() {
    return (
      <div>
        <h1>Current Bills</h1>
        <table id="bills">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
