import logo from './logo.svg';
import './App.css';

function App() {
  const user={
    firstname: "phanidhar sai",
    lastname: "marripudi"
  };
  function formatUser(user){
    return user.firstname+" "+ user.lastname;
  }
  function greeting(user){
    if(user){
      return <h1>hello, {formatUser(user)}</h1>
    }
    else{
      return <h1>hello stranger</h1>
    }
  }
  // const element = <h1>Congrats you have been selected</h1>
  return <div>{greeting(user)}</div>;
  }

export default App;
