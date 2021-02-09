import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import UserRouter from './Router/UserRouter'
import AdminRouter from './Router/AdminRouter'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Route path="/" component={UserRouter} />
        <Route path="/" component={AdminRouter} />
      </BrowserRouter>
    </>
  )
}

export default App;
