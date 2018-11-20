import * as React from 'react'
import Content from './layout/content'
import Footer from './layout/footer'
import Header from './layout/header'

import 'bulma/css/bulma.css'
import './App.css'


class App extends React.Component {
  public render() {
    return (
      <div className="layout">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
