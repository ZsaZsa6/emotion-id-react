import React from 'react';
import Games from './containers/Games'
import { connect } from 'react-redux'

export default function App() {
  return (
    <div>
      <Games/>
    </div>
  );
}
export default connect()(App)