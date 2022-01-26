import React from 'react';
import './styles/App.scss';

import TitleBar from './components/TitleBar';
import Splash from './components/Splash';
import HowItWorks from './components/HowItWorks';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Splash />
      <HowItWorks />
      <Tutorials />
      <Footer />
    </div>
  );
}

export default App;
