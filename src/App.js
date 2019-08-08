import React from "react"
import ConsoleObserver from "./js/ConsoleObserver"
import ElementObserver from "./js/ElementObserver"
import HistoryObserver from "./js/HistoryObserver"
import Model from "./js/Model"
import "./App.css"

function App() {
  const model = new Model();
  
  return(
    <Model/>
  )
}



export default App;
