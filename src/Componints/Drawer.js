import React from 'react';
const DemoDrawer = (props) => {
  return (
    <div className={props.open ? '' : 'drawer-toggle'}>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};
export default DemoDrawer;
