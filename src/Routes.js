import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Detail from './pages/Detail';
import List from './pages/List/List';
import Main from './pages/Main/Main';
import MyDaily from './pages/MyDaily/MyDaily';
import Review from './pages/Review/Review';
import Search from './pages/Search/Search';
import SearchResult from './pages/Search/SearchResult';
import ReservationDetail from './pages/Reservation/ReservationDetail';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/list" component={List} />
        <Route exact path="/mydaily" component={MyDaily} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/result" component={SearchResult} />
        <Route exact path="/reservation/:id" component={ReservationDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
