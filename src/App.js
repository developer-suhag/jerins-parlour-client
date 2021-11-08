import "./App.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { CssBaseline } from "@mui/material";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Navigation></Navigation>
      </CssBaseline>
    </div>
  );
}

export default App;
