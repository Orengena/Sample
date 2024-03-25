import { useState } from 'react'
import './App.css'
import Pixabay from './componnet/Pixabay'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import OverView from './componnet/OverView'
import Empty from './componnet/Empty'

function App() {

  return (
    <>
        <Empty/>

        <Switch>
          <Route path={"/home"}>
            <Pixabay/>
          </Route>
          <Route path={"/overview/:id"}>
            <OverView/>
          </Route>
        </Switch>
    </>
  )
}

export default App
