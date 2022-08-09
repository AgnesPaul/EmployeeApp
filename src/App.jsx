import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import { useEffect, useState } from 'react';
import TextField from './components/TextFeild';
import CreateEmployee from './pages/CreateEmployee';
import Counter from './pages/Counter';
import EmployeeList from './pages/EmployeeList';


function App() {

  const [userName, setUserName] = useState('Your name');
  const [displayName, setDisplayName] = useState('');

  

  const onUserNameChanged= (value) => {
    setUserName(value);
    
  }

  
  useEffect(()=>{
    setUserName('Agnes')
  },[]);

  useEffect(()=>{
    console.log('displayName --->', displayName);
    if (displayName !== '') {
      setUserName('');
    }
  },[displayName]);

  useEffect(()=>{
    console.log('userName --->', userName);
  },[userName]);
  

  const onButtonClicked = () => {
      setDisplayName(userName)
     
      
  }



  return (
    <div className="App">
      
      {/* <InputField value ={userName} label="User name" onChange={onUserNameChanged}/>
      <Button label="Click me" handleClick={onButtonClicked}/>
      <TextField label = {displayName}/> */}
      {/* <CreateEmployee/> */}
      
    </div>
  );
}

export default App;
