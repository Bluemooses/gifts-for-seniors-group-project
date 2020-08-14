import React, { Component } from "react";
import { connect } from "react-redux";
import "./BarrelAdmin.css";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import BarrelTable from "../BarrelTable/BarrelTable";
import BarrelInput from "../BarrelInputForm/BarrelInputForm";
class BarrelAdmin extends Component {
  render() {
    //HANDLES THE BARREL ADMIN COMPONENTS
    return (
      <div className="barrelForm">
        <BarrelInput />
        <div id="adminSearch" className="barrelSearch">
          <BarrelSearch />
        </div>
        <BarrelTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelAdmin);
