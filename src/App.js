import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import UserRouter from './Router/UserRouter'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Route path="/" component={UserRouter} />
      </BrowserRouter>
    </>
  )
}

export default App;
