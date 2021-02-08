import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './hoc/DefaultLayout';
import AsyncComponent from './hoc/AsyncComponent';

const Home = AsyncComponent(()=> import('./containers/Home'));
const SecondPage = AsyncComponent(()=> import('./containers/SecondPage'));

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
