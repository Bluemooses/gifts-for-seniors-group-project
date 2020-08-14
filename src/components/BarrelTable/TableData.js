import React, { Component } from "react";

class BarrelData extends Component {
  render() {
    let item = this.props.item;

    return (
      <tr className="barrelItem">
        <td>{item.hosts}</td>
        <td>{item.street}</td>
        <td>{item.city}</td>
        <td>{item.zipcode}</td>
        <td>{item.dates}</td>
        <td>{item.hours}</td>
        <td>{item.description}</td>
        <td>{item.status ? "Active" : "Deactivated"}</td>
        <td>{item.public ? "Public" : "Private"}</td>

        <td>
          <i
            class="edit icon"
            onClick={() => {
              this.props.editItem(item);
            }}
          ></i>
        </td>
      </tr>
    );
  }
}

export default BarrelData;
