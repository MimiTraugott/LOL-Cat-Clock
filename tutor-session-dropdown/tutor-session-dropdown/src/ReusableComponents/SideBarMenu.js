import React from 'react';
import MetisMenu from 'react-metismenu';
// import MenuConstans from './MenuConstans'



function SideBarMenu({content}) {
  return (
    <div>
    <div className="side-menu">
      <MetisMenu content={content} />
    </div>
    </div>
  );
}

export default SideBarMenu;

