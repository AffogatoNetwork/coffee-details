import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CoffeeBatchDetails from "./components/CoffeeBatchDetails";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:ipfsHash" component={CoffeeBatchDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
