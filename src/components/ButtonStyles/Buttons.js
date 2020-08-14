import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { withTheme } from "emotion-theming";
import { red } from "@material-ui/core/colors";
import transitions from "@material-ui/core/styles/transitions";

// RETURN A STYLED BUTTON
const StyledButton = withStyles({
  root: {
    background: "#2483d0",
    borderRadius: 17,
    color: "white",
    width: "auto",
    padding: ".5%",
    boxShadow: "0 3px 2px black",
    justifySelf: "center",
    size: "small",
    "&:hover": {
      background: "black",
      color: "white",
      boxShadow: "0 4px 3px black",
    },
    "&:active": {
      background: "#0352fc",
      boxShadow: "0 1px 1px 1px black",
    },
  },
})(Button);

// RETURN REMOVE BUTTON
const RemoveButton = withStyles({
  root: {
    background: "#bd0f32",
    borderRadius: 17,
    color: "white",
    padding: ".5%",
    boxShadow: "0 3px 2px black",
    justifySelf: "center",
    size: "small",
    "&:hover": {
      background: "black",
      color: "white",
      boxShadow: "0 4px 3px black",
    },
    "&:active": {
      background: "#0352fc",
      boxShadow: "0 1px 1px 1px black",
    },
  },
})(Button);

// RETURN SEARCHBUTTON
const SearchButton = withStyles({
  root: {
    boxShadow: "0 3px 2px black",
    justifySelf: "center",
    "&:hover": {
      background: "#2483d0",
      color: "white",
      boxShadow: "0 4px 3px w",
    },
    background: "black",
    borderRadius: 16,
    color: "white",
    padding: ".09%",
    // padding: "2%",
    margin: ".2%",
    // height: ".2%",
    // padding: "2%",
    width: "10%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);

// OBJECT STRUCTURING
export { StyledButton, RemoveButton, SearchButton };
