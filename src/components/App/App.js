import React, { Component } from 'react';
import './App.css';
import {JsxBasics} from '../JSX_Basics';
import {PropsReceiver} from '../Props';
import {StatefulComp} from '../StateFul';



//Component can render other components
//PropsReceiver and JSX basics are being rendered by App
class App extends Component {
  render() {
    return (
      <div>
        <StatefulComp/>
        <PropsReceiver heading="I am a Prop"/>
        <JsxBasics/>
      </div>
    );
  }
}

export default App;
