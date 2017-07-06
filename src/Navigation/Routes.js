import React, {Component} from 'react';
import HomePage from '../Home/HomePage';
import AboutCreators from '../AboutCreators/AboutCreators';
import AboutIvyExg from '../AboutIvyExg/AboutIvyExg';
import ForumPage from '../Forum/ForumPage';
import MediaPage from '../Media/MediaPage';
import {Route, Switch} from 'react-router-dom';

export default class Routes extends Component {
  render() {
    return (
      <div className='pageContainer'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about/creators' component={AboutCreators} />
          <Route exact path='/about/ivy_exg' component={AboutIvyExg} />
          <Route exact path='/forum' component={ForumPage} />
          <Route exact path='/media' component={MediaPage} />
        </Switch>
      </div>
    );
  }
}
