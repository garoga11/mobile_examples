import React from "react"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <NewBadge></NewBadge>
       {  /*<Main title={"Welcome"}></Main> */}
      </Layout>
      
    </React.Fragment>
  );
    
}

export default App;
