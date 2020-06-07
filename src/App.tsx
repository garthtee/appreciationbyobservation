import React from 'react';
import InstagramImages from './components/InstagramImages';
import Container from 'react-bootstrap/Container';
import {ToastContainer} from 'react-toastify';
import Feature from './components/Feature';
import Contact from './components/Contact';
// CSS
import './app.scss';

const ACCOUNT_NAME = "appreciationbyobservation";

const App = () => (
  <Container
    className="app"
    fluid
  >
    <Feature viewHeight={50}>
      <h1>Appreciation by Observation</h1>
      <p className="text-muted">Photos by Garth</p>
    </Feature>
    <InstagramImages
      accountUsername={ACCOUNT_NAME}
      displayAmount={6}
    />
    {/* Hidden until complete */}
    {/* <Feature
      xs={12}
      sm={6}
      viewHeight={50}
    >
      <Contact />
    </Feature> */}
    <ToastContainer position="bottom-right" />
  </Container>
);

export default App;
