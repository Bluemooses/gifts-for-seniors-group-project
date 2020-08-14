import React, { Component } from "react";
import { connect } from "react-redux";
import "../BarrelAdmin/BarrelAdmin.css";
import { StyledButton } from "../ButtonStyles/Buttons";
import { FormControl } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import TextField from "@material-ui/core/TextField";
import "./BarrelInputForm.css";
class BarrelInput extends Component {
  state = {
    host: "",
    street: "",
    city: "",
    zipcode: "",
    description: "",
    dates: "",
    hours: "",
    public: true,
    searchTerm: this.props.state.searchTerm,
  };

  addBarrel = (event) => {
    const barrelData = Object.values(this.state);
    // FILL ALL THE FORM FIELDS PLEASE
    for (let i = 0; i < barrelData.length; i++) {
      if (barrelData[i] === "") {
        return alert("All form fields must be filled out.");
      }
    }
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TO_LIST", payload: this.state });
    this.setState({
      host: "",
      street: "",
      city: "",
      zipcode: "",
      description: "",
      dates: "",
      hours: "",
      public: true,
    });
  };

  handleInput = (event) => {
    console.log("state:", this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleRadioButton = (event) => {
    if (event.target.value === "true") {
      this.setState({
        ...this.state,
        public: true,
      });
    } else {
      this.setState({
        ...this.state,
        public: false,
      });
    }
    console.log("public", this.state.public);
  };

  render() {
    return (
      <div className="barrelForm">
        <h3 id="addDonationH3" className="tableTitle">
          Add a Donation Location
        </h3>

        <form>
          <div className="addBarrels">
            <div className="addBarrelInput">
              {/* INPUT FIELDS */}
              <TextField
                type="submit"
                label="Host Name"
                variant="outlined"
                name="host"
                type="text"
                value={this.state.host}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                variant="outlined"
                label="Street"
                name="street"
                type="text"
                value={this.state.street}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="City"
                variant="outlined"
                name="city"
                type="text"
                value={this.state.city}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Zipcode"
                name="zipcode"
                type="text"
                variant="outlined"
                value={this.state.zipcode}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Description"
                name="description"
                type="text"
                variant="outlined"
                value={this.state.description}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Dates"
                variant="outlined"
                name="dates"
                type="text"
                value={this.state.dates}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Hours"
                name="hours"
                type="text"
                variant="outlined"
                value={this.state.hours}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  row
                  aria-label="public"
                  name="public"
                  // value={this.state.public}
                  onChange={this.handleRadioButton}
                  classes="label"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Public"
                    labelPlacement="Top"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Private"
                    labelPlacement="Top"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <StyledButton
              id="theSubmitButtonForCarolyn"
              className="addBarrelButton"
              onClick={this.addBarrel}
            >
              Submit
            </StyledButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelInput);
