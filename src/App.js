import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './hoc/DefaultLayout';
import Home from './containers/Home';
import SecondPage from './containers/SecondPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Page2" component={SecondPage} />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    );
  }
}

export default App;
