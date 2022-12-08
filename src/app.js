import React from 'react';
import './app.css';
import DemoDrawer from './Componints/Drawer';
import DemoNavBar from './Componints/Navbar';

const App = (props) => {
  cosnt[(open, setOpen)] = React.useState(false);
  return (
    <div>
      <DemoNavBar open={open} setOpen={setOpen} />
      <DemoDrawer open={open} />
    </div>
  );
};
export default App;
