import React, { Component } from "react";
import "./App.css";
import SideBarMenu from "./ReusableComponents/SideBarMenu";

export const menuContent = [
  {
    icon: "icon-class-name",
    label: "Device Activity by Date",
    content: [
      {
        icon: "icon-class-name",
        label: "Today",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Last 3 days",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Last 7 days",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Last 30 days",
        to: "#another-link"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Devices by Clinic",
    content: [
      {
        icon: "icon-class-name",
        label: "IHC",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Johns Hopkins",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Mayo Clinic",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Massachusetts General",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "UCFS Medical Center",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "New York-Presbyterian",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Northwestern Memorial",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "UCLA",
        to: "#another-link"
      }
    ]
  }
];

class App extends Component {
  state = {
    rawMenuData: null
  };

  componentDidMount() {}

  formatMenuData() {}

  render() {
    return (
      <div className="App">
        <div></div>
        <SideBarMenu content={menuContent} />
        <div className="remaining-content"></div>
      </div>
    );
  }
}

export default App;
