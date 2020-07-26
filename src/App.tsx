import React from 'react';
import InstagramImages from './components/InstagramImages';
import Container from 'react-bootstrap/Container';
import {ToastContainer} from 'react-toastify';
import Feature from './components/Feature';
// CSS
import './app.scss';

const ACCOUNT_NAME = "appreciationbyobservation";
const DISPLAY_AMOUNT = 9;

const App = () => (
  <Container
    className="app"
    fluid
  >
    <Feature viewHeight={50}>
      <h1>Appreciation by Observation</h1>
      <p className="text-muted">
        Photography by 
        <a
          href="https://garthtoland.com/"
          rel="noopener noreferrer"
          target="_blank"
          style={{marginLeft: '4px'}}
        >
          Garth
        </a>
      </p>
      <p className="text-muted">
        📍
        <a
          href="https://goo.gl/maps/UuGpmEwFoCrctA1E9"
          rel="noopener noreferrer"
          target="_blank"
          style={{marginLeft: '4px'}}
        >
          Belfast
        </a>
      </p>
    </Feature>
    <InstagramImages
      accountUsername={ACCOUNT_NAME}
      displayAmount={DISPLAY_AMOUNT}
    />
    <ToastContainer position="bottom-right" />
  </Container>
);

export default App;
