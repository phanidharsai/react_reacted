// import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet'; 
// *** can use alias while importing like import customname from './components/Greet';
// import {Message} from './components/Message';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { Lists } from './components/List';
// import { StyleSheet } from './components/StyleSheet';
// import './AppStyles.css';
// *** using above method the css style can be used by other elements as well
// import styles from './Appstyles.module.css';
// *** if used styles.success it cannot be used in any other child 
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* if alias is used in used in import should use the same name here as well */}
     {/* <Greet name='phanidharsai' package='got 16 lpa'>
      <p>Congratulations on the offer in such a short time</p> 
     </Greet>
     <Greet name='tomcruise'/> 
     <Greet name='slyvester'/> 
     <Greet name='jason'/>  */}
     {/* <Message/> */}
     {/* <ClickHandler/> */}
     {/* <ParentComponent/> */}
     {/* <UserGreeting/> */}
     {/* <Lists/> */}
     {/* <StyleSheet/>
     <h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1> */}
     <Form/>
    </div>
  );
}

export default App;
