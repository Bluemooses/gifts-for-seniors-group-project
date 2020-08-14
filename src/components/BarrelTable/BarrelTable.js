import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input, TextField } from "@material-ui/core";
import "./BarrelTable.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import TableData from "./TableData.js";
import BarrelHead from "./TableHead.js";
import BarrelInputs from "./BarrelInputs.js";
class BarrelTable extends Component {
  state = {
    itemToEdit: 0,
    hosts: "",
    street: "",
    city: "",
    description: "",
    zipcode: "",
    hours: "",
    status: true,
    date: "",
    barrelStatus: false,
    toggleEvent: false,
    public: true,
    openModal: false,
  };

  editItem = (item) => {
    this.setState({
      ...this.state,
      itemToEdit: item.id,
      hosts: item.hosts,
      street: item.street,
      public: item.public,
      city: item.city,
      description: item.description,
      zipcode: item.zipcode,
      status: item.status,
      date: item.dates,
      hours: item.hours,
      searchTerm: this.props.state.searchTerm,
    });
    console.log("ITEM IS", item.public);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  updateStatus = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      status: item.status,
      previousSearch: this.props.state.searchTerm,
    };
    this.props.dispatch({
      type: "UPDATE_STATUS",
      payload: data,
    });
  };

  updatePublic = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      public: item.public,
      previousSearch: this.props.state.searchTerm,
    };
    this.props.dispatch({
      type: "UPDATE_PUBLIC",
      payload: data,
    });
  };

  trackEdit = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    });
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  deleteItem = (id) => {
    let dataObject = {
      id: id,
      previousSearch: this.props.state.searchTerm,
    };

    console.log(dataObject);
    this.props.dispatch({
      type: "DELETE_BARREL",
      payload: dataObject,
    });
    // console.log("payload", id);
  };

  saveChanges = () => {
    this.props.dispatch({
      type: "UPDATE_BARREL",
      payload: this.state,
    });
    console.log(this.state);
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  submitAlert = (item) => {
    console.log(item);
    confirmAlert({
      title: "Delete Barrel Location",
      message: "This action is permanent, are you sure?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteItem(item),
        },
        {
          label: "Cancel",
          onClick: () => this.cancelEdit(),
        },
      ],
    });
  };

  render() {
    return (
      <div className="table-container">
        <table class="ui celled table">
          {/* TABLE HEADERS */}
          <BarrelHead />
          <tbody>
            {/* IF EDITING, DISPLAY THIS */}
            {this.props.state.searchBarrels.map((item) => {
              if (item.id === this.state.itemToEdit) {
                return (
                  <BarrelInputs
                    updateStatus={this.updateStatus}
                    updatePublic={this.updatePublic}
                    trackEdit={this.trackEdit}
                    item={item}
                    submitAlert={this.submitAlert}
                    cancelEdit={this.cancelEdit}
                    saveChanges={this.saveChanges}
                    hosts={this.state.hosts}
                    street={this.state.street}
                    city={this.state.city}
                    zipcode={this.state.zipcode}
                    dates={this.state.dates}
                    hours={this.state.hours}
                    description={this.state.description}
                  />
                );
              } else {
                // RETURN A TABLE WITH DATA
                return <TableData editItem={this.editItem} item={item} />;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelTable);
