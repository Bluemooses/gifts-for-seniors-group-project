import React, { Component } from "react";
import { connect } from "react-redux";
import "./GoogleMap.css";
import { Image } from "semantic-ui-react";
class InsetGoogleMap extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.state.searchTerm);
    let street = this.props.barrel.street;
    let zipcode = this.props.barrel.zipcode;
    let city = this.props.barrel.city;
    let host = this.props.barrel.host;
    let googlekey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    console.log(googlekey);
    let imageSource = `https://maps.googleapis.com/maps/api/staticmap?center=${street},${city},${zipcode}&zoom=10&size=350x350&markers=size:large%7Ccolor:blue%7C${street}+${zipcode}&key=${googlekey}`;
    console.log(this.props.barrel);
    return (
      // RENDER A DEFAULT MAP WITH GIFTS FOR SENIORS LOCATION
      <Image
        label={{ as: "a", corner: "left", icon: "search" }}
        size="large"
        src={imageSource}
      ></Image>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(InsetGoogleMap);
