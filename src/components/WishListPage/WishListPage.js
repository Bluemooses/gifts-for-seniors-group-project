import React, { Component } from "react";
import { connect } from "react-redux";
import "./WishListPage.css";
import { Card } from "@material-ui/core";
import { SearchButton } from "../ButtonStyles/Buttons";
import Gallery from "../WishlistGallery/Gallery";
import { Grid, Image, Segment, Divider, List } from "semantic-ui-react";
import SentimentalMessage from "./SentimentalMessage";
// import happy from "./happiness.jpg";

class WishList extends Component {
  goToBarrelPage = () => {
    this.props.history.push("/barrels");
  };

  render() {
    return (
      <Segment>
        {/* <h1 id="wishListHeader">WishList</h1> */}
        <SentimentalMessage />
        <Grid columns={1} relaxed="very">
          <Grid.Column>
            <div className="highPriorityItems">
              <div id="highPriority" className="priorityHeader">
                <h2 className="listHead">High Priority Items</h2>
              </div>
              <List>
                {/* Mapping through our item reducer to display items marked as high priority */}
                {this.props.state.list.map((item) => {
                  if (item.priority === true) {
                    return <ul key={item.id}>{item.item}</ul>;
                  }
                })}
              </List>
            </div>

            <Gallery />
          </Grid.Column>
          <Grid.Column verticalAlign="bottom">
            <div className="regularItems">
              <div className="priorityHeader">
                <h2 className="regularListHead">Other Items</h2>
              </div>
              <List>
                {/* Mapping through our item reducer to display remaining items */}
                {this.props.state.list.map((item) => {
                  if (item.priority === false) {
                    return <ul key={item.id}>{item.item}</ul>;
                  }
                })}
              </List>
            </div>
          </Grid.Column>
        </Grid>
        {/* <Divider vertical /> */}
        <div className="buttons">
          <SearchButton className="links" onClick={this.goToBarrelPage}>
            Find Location
          </SearchButton>
          <SearchButton className="amazonButton">
            <a
              className="amazonButton"
              href="https://smile.amazon.com/hz/wishlist/ls/X1CA7P20SWPM?type=wishlist&ref=cm_wl_list_create"
            >
              Amazon Wishlist
            </a>
          </SearchButton>
        </div>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishList);
