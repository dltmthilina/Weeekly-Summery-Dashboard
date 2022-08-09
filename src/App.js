import React,{useEffect} from "react"
import "./App.css"
import Form from "./components/Form";



import {useDispatch} from "react-redux"
import {getRequest} from "./store/dashboard-actions";
import Table from "./components/Table";


function App() {

  const dispatch = useDispatch();

useEffect(()=>{
 dispatch(getRequest());
 
},[]);

  return (
    <div className="App">
      <header>
        <h1>Weekly Review Summery</h1>
      </header>
      <div className="formdata">
      <Form/>
      </div>
      <div>
        <Table/>
      </div>
      
     
      
    </div>
  );
}

export default App;
