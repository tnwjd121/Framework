import { AppBar, Toolbar, Typography } from "@mui/material"
import Carlist from './component/Carlist';
import AddCar from './component/AddCar';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist/>
    </div>
  );
}

export default App;
