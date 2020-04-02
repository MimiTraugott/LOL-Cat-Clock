
import React, {Component} from 'react';
import './App.css';
import SideBarMenu from './ReusableComponents/SideBarMenu';

export const menuContent =
[
  {
      icon: 'icon-class-name',
      label: 'IHC',
      content: [
          {
              icon: 'icon-class-name',
              label: 'Today',
              to: '#another-link',
          },
          {
              icon: 'icon-class-name',
              label: 'Last 3 days',
              to: '#another-link',
          },
      ],
  },
  {
      icon: 'icon-class-name',
      label: 'LDS',
      content: [
          {
              icon: 'icon-class-name',
              label: 'Today',
              to: '#another-link',
          },
          {
              icon: 'icon-class-name',
              label: 'Last 3 days',
              to: '#another-link',
          },
      ],
  },
  {
    icon: 'icon-class-name',
    label: 'Mayo Clinic',
    content: [
        {
            icon: 'icon-class-name',
            label: 'Today',
            to: '#another-link',
        },
        {
            icon: 'icon-class-name',
            label: 'Last 3 days',
            to: '#another-link',
        },
    ],
},
{
  icon: 'icon-class-name',
  label: 'Chicago Regional',
  content: [
      {
          icon: 'icon-class-name',
          label: 'Today',
          to: '#another-link',
      },
      {
          icon: 'icon-class-name',
          label: 'Last 3 days',
          to: '#another-link',
      },
  ],
},
{
  icon: 'icon-class-name',
  label: 'St Judes',
  content: [
      {
          icon: 'icon-class-name',
          label: 'Today',
          to: '#another-link',
      },
      {
          icon: 'icon-class-name',
          label: 'Last 3 days',
          to: '#another-link',
      },
  ],
},
{
  icon: 'icon-class-name',
  label: 'Mount Sinai',
  content: [
      {
          icon: 'icon-class-name',
          label: 'Today',
          to: '#another-link',
      },
      {
          icon: 'icon-class-name',
          label: 'Last 3 days',
          to: '#another-link',
      },
  ],
}
];


class App extends Component {
  state = { 
    rawMenuData: null
  }

  componentDidMount(){
    
  }

  formatMenuData(){

  }


  render() { 
    return ( 
      <div className="App">
        <SideBarMenu content={menuContent} />
      <div className="remaining-content">
      </div>
      </div>
     );
  }
}
 
export default App;

