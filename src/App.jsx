import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPW from './pages/ResetPW';
import Feed from './pages/Feed';
import Groups from './pages/Groups';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import NewPost from './components/NewPost/NewPost';
import './App.css'; // Ensure you have a CSS file for styling

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reset_pw" component={ResetPW} />
        <Route path="/feed" component={Feed} />
        <Route path="/groups" component={Groups} />
        <Route path="/friends" component={Friends} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  );
};

export default App;
