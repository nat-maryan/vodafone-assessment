import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './hoc/DefaultLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultLayout>
          <div>HOME</div>
        </DefaultLayout>
      </BrowserRouter>
    );
  }
}

export default App;
