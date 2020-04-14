import React from "react";
import SidebarItem from './SidebarItem'
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";

function Sidebar({ items, depthStep, depth }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SidebarItem
          key={`${sidebarItem.name}${index}`}
          depthStep={depthStep}
          depth={depth}
          {...sidebarItem}
          />
        ))}
      </List>
    </div>
  )
}
export default Sidebar
 

