import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route component={Error} ></Route>
        </Switch>
     </Layout>
      
    </BrowserRouter>
  );
    
}

export default App;
