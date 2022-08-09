import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Login from './pages/Login';
import Counter from './pages/Counter';
import { store } from './store/store'
import { Provider } from 'react-redux'
import EmployeeDetails from './pages/EmployeeDetails';
import UpdateEmployee from './pages/UpdateEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}> 
    <BrowserRouter>
     <Routes> 
      <Route path="/" element={<Login />}/>
      <Route path="/list" element={<EmployeeList/>}/>
      <Route path="/create" element={<CreateEmployee/>}/>
      <Route path="/details/:id" element={<EmployeeDetails/>}/>
      <Route path="/update/:id" element={<UpdateEmployee/>}/>

      <Route path="/counter" element={<Counter/>}/>
     </Routes>
    </BrowserRouter>
    
    
    {/* <App /> */}
    </Provider>  
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
