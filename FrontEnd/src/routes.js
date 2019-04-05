/* eslint-disable global-require */
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
// Main
import App from './app';
// Explore
import Ideas from './pages/explore/exploreIdeas';
import Projects from './pages/explore/exploreProjects';
import People from './pages/explore/explorePeople';
import Apps from './pages/explore/exploreApps';
import Home from './pages/explore/home';
// Ideas
import IdeaPage from './pages/idea/ideaPage';
import NewIdeaPage from './pages/idea/newIdeaPage';
import EditIdeaPage from './pages/idea/editIdeaPage';
// Projects
import RepoPage from './pages/repo/repoPage';
import NewRepoPage from './pages/repo/newRepoPage';
import FilePage from './pages/repo/file/filePage';
import TreePage from './pages/repo/file/treePage';
import IssuePage from './pages/repo/issue/issuePage';
import MergeRequestPage from './pages/repo/mergeRequest/mergeRequestPage';
// People
import UserPage from './pages/user/userPage';
import WalletPage from './pages/payments/walletPage';
// User Actions
import LoginPage from './pages/userActions/loginPage';
import CreateAccountPage from './pages/userActions/createAccountPage';
import ResetPassword from './pages/userActions/resetPassPage';
import RequestNewPass from './pages/userActions/reqestNewPassPage';
import Messages from './pages/messages/messagesPage';
// Global
import Four0FourPage from './pages/global/four0FourPage';
import Navbar from './pages/global/components/navbar';
import Footer from './pages/global/components/footer';
import SnackBar from './pages/global/components/snackBar';
import Exchange from './pages/exchange';
//le Demo
import QuantStamp from './pages/app/quantstamp';


let Routes =()=>(
  <Router history={history}>
    <div className="app">
      <Route path="/" render={props=><Navbar {...props}/>}/>
      <Route path="/" render={props=><SnackBar {...props}/>}/>
      <div className="TheEntirePageMinusFooter">
        <Switch>
          {/* Landing */}
          <Route exact path="/" render={props=><App {...props}/>}/>
          {/* Explore Pages */}
          <Route exact path="/explore/ideas" render={props=><Ideas {...props}/>}/>
          <Route exact path="/explore/projects" render={props=><Projects {...props}/>}/>
          <Route exact path="/explore/people" render={props=><People {...props}/>}/>
          <Route exact path="/explore/apps" render={props=><Apps {...props}/>}/>
          <Route exact path="/home" render={props=><Home {...props}/>}/>
          {/* Ideas */}
          <Route exact path="/newidea" render={props=><NewIdeaPage {...props}/>}/>
          <Route exact path="/:user/idea/:idea" render={props=><IdeaPage {...props}/>}/>
          <Route exact path="/:user/idea/:idea/edit" render={props=><EditIdeaPage {...props}/>}/>
          {/* Projects */}
          <Route exact path="/newproject" render={props=><NewRepoPage {...props}/>}/>
          <Route exact path="/:user/project/:projectID" render={props=><RepoPage {...props}/>}/>
          <Route exact path="/:user/project/:projectID/file/:id/:file" render={props=><FilePage {...props}/>}/>
          <Route exact path="/:user/project/:projectID/file/*/:id/:file" render={props=><FilePage {...props}/>}/>
          <Route exact path="/:user/project/:projectID/tree/:id/:tree" render={props=><TreePage {...props}/>}/>
          <Route exact path="/:user/project/:projectID/tree/*/:id/:tree" render={props=><TreePage {...props}/>}/>
          <Route exact path="/:user/project/:projectID/issue/:id" render={props=><IssuePage {...props}/>}/>
          <Route exact path="/:user/project/:projectID/mergerequest/:id" render={props=><MergeRequestPage {...props}/>}/>
          {/* People */}
          <Route exact path="/:user/messages/" render={props=><Messages {...props}/>}/>
          <Route exact path="/:user/profile" render={props=><UserPage {...props}/>}/>
          <Route exact path="/:user/wallet" render={props=><WalletPage {...props}/>}/>
          {/* User Actions */}
          <Route exact path="/createaccount" render={props=><CreateAccountPage {...props}/>}/>
          <Route exact path="/login" render={props=><LoginPage {...props}/>}/>
          <Route exact path="/resetpassword/:token" render={props=><ResetPassword {...props}/>}/>
          <Route exact path="/requestpassword" render={()=><RequestNewPass/>}/>

          {/* I don't know */}
          <Route exact path="/app/quantstamp" render={props=><QuantStamp {...props}/>}/>
          <Route exact path="/exchange" render={props=><Exchange {...props}/>}/>
          <Route render={props=><Four0FourPage {...props}/>}/>
        </Switch>
      </div>
      <Route path ="/" render={props=><Footer {...props}/>}/>
    </div>
  </Router>
)


export default Routes ;
