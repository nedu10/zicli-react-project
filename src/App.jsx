/* eslint-disable react/no-typos */
import React from "react"
import { Route } from "react-router-dom"
import * as ROUTES from './Constants/routes.jsx';
import Home from "./Containers/Home"

const App = () => {
  return (
    <Route path={ROUTES.HOME} component={Home} />
  )
}

export default App