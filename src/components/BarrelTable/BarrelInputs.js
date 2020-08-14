import React, { Component } from "react";
import { Input, TextField } from "@material-ui/core";

class BarrelInputs extends Component {
  render() {
    let item = this.props.item;

    return (
      <tr>
        <td>
          {/* INPUT FIELDS */}
          {/* HOSTS */}
          <TextField
            autoFocus="true"
            className="editInput"
            placeholder="Host Name"
            type="text"
            multiline
            rowsMax={10}
            value={this.props.hosts}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "hosts")}
          ></TextField>
        </td>
        <td>
          {/* STREET */}
          <TextField
            multiline
            rowsMax={10}
            autoFocus="true"
            className="editInput"
            placeholder="Street Address"
            type="text"
            value={this.props.street}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "street")}
          ></TextField>
        </td>
        <td>
          {/* CITY */}
          <TextField
            autoFocus="true"
            className="editInput"
            type="text"
            rowsMax={10}
            multiline
            placeholder="City"
            value={this.props.city}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "city")}
          ></TextField>
        </td>
        <td>
          {/* ZIPCODE */}
          <TextField
            autoFocus="true"
            className="editInput"
            type="text"
            rowsMax={10}
            multiline
            placeholder="Zipcode"
            value={this.props.zipcode}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "zipcode")}
          ></TextField>
        </td>
        <td>
          {/* DATES */}
          <TextField
            autoFocus="true"
            className="editInput"
            type="text"
            rowsMax={10}
            multiline
            value={this.props.date}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "date")}
            placeholder="Dates Available"
          ></TextField>
        </td>
        <td>
          {/* HOURS */}
          <TextField
            autoFocus="true"
            className="editInput"
            type="text"
            rowsMax={10}
            multiline
            placeholder="Hours Open"
            value={this.props.hours}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "hours")}
          ></TextField>
        </td>
        <td>
          {/* DESCRIPTION */}
          <TextField
            autoFocus="true"
            className="editInput"
            type="text"
            rowsMax={10}
            multiline
            placeholder="Description"
            value={this.props.description}
            variant="outlined"
            onChange={(event) => this.props.trackEdit(event, "description")}
          ></TextField>
        </td>
        {/* ENDS INPUT FIELDS */}
        <td>
          {/* TOGGLES */}
          <div className="sliderCheckbox" class="ui slider checkbox">
            <input
              type="checkbox"
              onChange={() => {
                this.props.updateStatus(item);
              }}
              checked={item.status}
              name="newsletter"
            />{" "}
            <label className="sliderLabel">
              {item.status ? "Active" : "Not Active"}
            </label>
          </div>
        </td>
        <td>
          <div className="sliderCheckbox" class="ui slider checkbox">
            <input
              type="checkbox"
              onChange={() => {
                console.log(item.public);
                this.props.updatePublic(item);
              }}
              checked={item.public}
              name="newsletter"
            />{" "}
            <label className="sliderLabel">
              {item.public ? "Public" : "Private"}
            </label>
          </div>
        </td>
        {/* ENDS TOGGLES */}
        <td>
          <i
            class="archive icon"
            value={item.id}
            onClick={() => this.props.saveChanges()}
          >
            <p>Save</p>
          </i>
        </td>
        <td>
          <i class="ban icon" onClick={this.props.cancelEdit}>
            <p>Cancel</p>
          </i>
        </td>
        <td>
          <i class="trash icon" onClick={() => this.props.submitAlert(item.id)}>
            <p>Delete</p>
          </i>
        </td>
      </tr>
    );
  }
}

export default BarrelInputs;
