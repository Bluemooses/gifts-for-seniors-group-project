import React, { Component } from "react";
import { connect } from "react-redux";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import "./BarrelClient.css";
import GoogleMap from "../GoogleMap/GoogleMap";
import InsetGoogleMap from "../GoogleMap/BarrelInsetGoogleMap";
import BarrelCard from "../BarrelCard/BarrelCard";
import { Button, Card, Image, Label, Grid } from "semantic-ui-react";
import CovidReponse from "./CovidResponse";
import Footer from "../Footer/Footer";

class BarrelClient extends Component {
  componentDidMount() {
    let homeBase = {
      street: "2300 Kennedy Street",
      zipcode: "55413",
    };
    this.props.dispatch({
      type: "SET_MAP_TO_SEARCH",
      payload: homeBase,
    });
  }

  // UPDATE MAP WITH TARGET INFORMATION (*barrel)
  setMapToDisplay = (barrel) => {
    console.log(barrel);
    let data = {
      hosts: barrel.hosts,
      street: barrel.street,
      zipcode: barrel.zipcode,
    };
    this.props.dispatch({
      type: "SET_MAP_TO_SEARCH",
      payload: data,
    });
  };

  /// }
  render() {
    return (
      <div>
        {" "}
        <CovidReponse />
        <BarrelSearch />
        <Grid columns="equal" stackable>
          <Grid.Row streched={true} columns={4}>
            {/* ONLY DISPLAY RELEVANT INFORMATION */}
            {this.props.state.searchBarrels.map((barrel) => {
              if (barrel.status === true) {
                // RETURN BARREL CARDS
                return (
                  <Grid.Column>
                    <BarrelCard
                      barrel={barrel}
                      setMapToDisplay={this.setMapToDisplay}
                    />
                  </Grid.Column>
                );
              } else {
                return null;
              }
            })}
          </Grid.Row>
        </Grid>
        <GoogleMap />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelClient);
