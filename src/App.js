import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"
import Login from "./Components/Login"
import PageNotFound from "./Components/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/404" component={PageNotFound}></Route>
          <Route component={Error} ></Route>
        </Switch>
     </Layout>
      
    </BrowserRouter>
  );
    
}

export default App;
