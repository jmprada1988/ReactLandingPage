import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToComponent = component => {
    scroller.scrollTo(component, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToComponent("featured")}>
          Dates For each event
        </ListItem>
        <ListItem button onClick={() => scrollToComponent("about")}>
          About the Company
        </ListItem>
        <ListItem button onClick={() => scrollToComponent("highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToComponent("pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToComponent("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
