import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NextAvailabilityPage from './NextAvailabilityComponents/NextAvailabilityPage';
import ShipsWithNoFutureAssignmentPage from './ShipsWithNoFutureAssignmentComponents/ShipsWithNoFutureAssignmentPage';
import MainMatchingPage from './MainMatchingComponents/MainMatchingPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/next-availability" component={NextAvailabilityPage} />
        <Route path="/ships-with-no-future-assignment" component={ShipsWithNoFutureAssignmentPage} />
        <Route path="/main-matching" component={MainMatchingPage} />
        <Route path="/" component={NextAvailabilityPage} />
      </Switch>
    </Router>
  );
}

export default App;