import React from 'react';
import './App.css';
import TextInputChange from './minComponents/TextInputChange';
import OpenErrorMessageBox from './components/OpenErrorMessageBox';
import MainComponent from './components/MainComponent';
import SignIn from './components/SignIn'

function App() {

  const [iputStates, setInputStates] = React.useState([]);

  const handleChangeData = (arg) => {
    let baseData = iputStates;
    let t = true;
    for (let i = 0; i < baseData.length; i++) {
      if(baseData[i].row == arg.row && baseData[i].col == arg.col){
        baseData[i].value = arg.value;
        t = false;
      }
    }
    if(t) {
      setInputStates(iputStates.concat([arg]));
    } else {
      setInputStates(baseData);
    }
  }

  return (
    <div className="App">
      {/* <TextInputChange error={true} value="111" row="11" col="10" onChangeData={handleChangeData}/>
      <br/>
      <TextInputChange value="" row="12" col="16" onChangeData={handleChangeData}/>
      <br/>
      <OpenErrorMessageBox/> */}
      {/* <MainComponent/> */}
      <SignIn/>
    </div>
  );
}

export default App;
