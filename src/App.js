import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import PoolCreator from './components/PoolCreator/PoolCreator';
import PoolDashboard from './components/PoolDashboard/PoolDashboard';
import PoolExplorer from './components/PoolExplorer/PoolExplorer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { client } from './services/graphql';
import withTracker from './components/withTracker';

const PoolCreatorWithTracker = withTracker(PoolCreator);
const PoolDashboardWithTracker = withTracker(PoolDashboard);
const PoolExplorerWithTracker = withTracker(PoolExplorer);
const HomeWithTracker = withTracker(Home);

const useStyles = makeStyles((theme) => ({
  app: {
    background: theme.customColors.background,
  },
  content: {
    minHeight: '100vh',
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className={classes.app}>
          <div className={classes.content}>
            <Header />
            <Switch>
              <Route path="/" exact component={HomeWithTracker} />
              <Route
                path="/create-pool"
                exact
                component={PoolCreatorWithTracker}
              />
              <Route
                path="/explore"
                exact
                component={PoolExplorerWithTracker}
              />
              <Route
                path="/dashboard/:poolAddress"
                exact
                component={PoolDashboardWithTracker}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userID,
    name: state.auth.name,
    imageUrl: state.auth.imageUrl,
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps, null)(App);
