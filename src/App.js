import React from 'react'

import BlankForm from "./components/BlankForm.jsx"
import BlankList from "./components/BlankList.jsx"

import './App.css'

const App = () => {
  return (
    <div className="App">
        <h1>Welcome to the App</h1>
        <BlankForm />
        <BlankList />
    </div>
  );
};

export default App;