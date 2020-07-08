import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import FlightSearch from './component/Home/FlightSearch'
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddFlightForm from './component/admin/AddFlightForm';
import ToolBar from './component/navbar/ToolBar';
import SearchResult from './component/Home/SearchResult';

const routing = (
  <Router>
    <>
      <ToolBar />
      <Route exact path="/" component={App} />
      <Route path="/addflight" component={AddFlightForm} />
      <Route path="/searchflight" component={FlightSearch} />
      <Route path="/searchresult" render={(props)=><SearchResult {...props}/>}/>
    </>
  </Router>
)

ReactDOM.render(
  // <React.StrictMode>
    /* <FlightSearch /> */
    /* <App /> */

  // </React.StrictMode>
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
