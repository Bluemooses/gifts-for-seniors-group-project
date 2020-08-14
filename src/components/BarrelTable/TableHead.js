import React, { Component } from "react";

class BarrelHead extends Component {
  render() {
    let item = this.props.item;

    return (
      <thead className="tableHeader">
        <tr className="coolTableTr">
          <th className="hostTag">Host</th>
          <th>Street Number</th>
          <th className="cityTag">City</th>
          <th>Zipcode</th>
          <th>Dates</th>
          <th>Hours</th>
          <th>Description</th>
          <th>Status</th>
          <th>Public/Private</th>
          <th>Edit</th>
        </tr>
      </thead>
    );
  }
}

export default BarrelHead;
