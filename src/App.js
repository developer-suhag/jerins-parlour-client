import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <AuthProvider>
          <Router>
            <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <PrivateRoute path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
