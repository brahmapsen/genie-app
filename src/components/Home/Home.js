import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { connect } from 'react-redux';

import PoolDisplayCard from '../PoolDisplayCard/PoolDisplayCard';
import MainButton from '../UI/MainButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.customValues.contentWidth,
    margin: 'auto',
    textAlign: '-webkit-center',
  },
  heroGridItem: {
    padding: '0',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: theme.customGradients.primary,
    height: '27em',
  },
  heroTitle: {
    width: theme.customValues.bigTitleWidth,
    color: 'white',
    fontWeight: '700',
  },
  heroSubTitle: {
    paddingTop: '1em',
    width: theme.customValues.bigTitleWidth,
    color: 'white',
  },
  subTitle: {
    color: '#797979',
    fontWeight: '600',
    letterSpacing: '0.2em',
    width: theme.customValues.bigTitleWidth,
  },
  subTitleText: {
    width: theme.customValues.bigTitleWidth,
  },
  titleBig: {
    width: theme.customValues.bigTitleWidth,
    color: 'black',
    fontWeight: '1000',
  },
  kovanText: {
    textAlign: 'center',
    color: 'red',
    width: '100%',
  },
  linkButton: {
    color: theme.palette.primary.main,
    fontWeight: '600',
  },
  poolsGrid: {
    paddingTop: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  allPools: {
    justifyContent: 'flex-end',
  },
  integrateGuide: {
    display: 'flex',
    width: theme.customValues.bigTitleWidth,
  },
  iconCircle: {
    fill: theme.palette.primary.main,
    paddingRight: '0.6em',
  },
  integrationText: {
    textAlign: 'left',
  },
  integrationTitle: {
    fontWeight: '700',
    paddingBottom: '0.5em',
  },
  integrationSubTitle: {
    color: theme.customColors.lightText,
    paddingBottom: '0.4em',
  },
  link: {
    textDecoration: 'none',
  },
  divider: {
    margin: '2em 0',
    width: 80,
    height: 4,
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const onCreatePoolClick = () => {
    // change to the createpool page
    props.history.push('/create-pool');
  };

  // load pools from backend
  const poolsGrid = (
    <div className={classes.poolsGrid}>
      <Link
        to="/dashboard/0x3e66d5168b527888a1904d01c8413c24eb302c80"
        className={classes.link}
      >
        <PoolDisplayCard clickable name="Path of Exile Race" icon="🧙‍♂️" />
      </Link>
      <Link
        to="/dashboard/0x63a86b3782de1df7e547fd78ab872b25ec3d60e6"
        className={classes.link}
      >
        <PoolDisplayCard clickable name="Space Survival" icon="☄️" />
      </Link>
      <Link
        to="/dashboard/0x94e8adb309b629a4a3dfe5534681c034693bf481"
        className={classes.link}
      >
        <PoolDisplayCard clickable name="Volcano Mania" icon="🌋" />
      </Link>
    </div>
  );

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid id="hero" item xs={12} style={{ padding: 0 }}>
        <div className={classes.hero}>
          <Typography className={classes.heroTitle} variant="h3">
            Interest based
          </Typography>
          <Typography className={classes.heroTitle} variant="h3">
            reward platform
          </Typography>
          <Typography className={classes.heroSubTitle} variant="h6">
            Genie is a reward platform based on generated interest. That is, the
            rewards are generated by the accrued interest of users's locked
            value. It can be used for games, competitions, etc.
          </Typography>
        </div>
      </Grid>
      <Typography className={classes.kovanText} variant="h6">
        *Alpha version - Available only on Kovan network!
      </Typography>

      <Grid item xs={12}>
        <Typography className={classes.subTitle} variant="subtitle2">
          INTEGRATE GENIE
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <div className={classes.integrateGuide}>
          <div>
            <CheckCircleRoundedIcon
              fontSize="large"
              className={classes.iconCircle}
            />
          </div>
          <div className={classes.integrationText}>
            <Typography variant="h6" className={classes.integrationTitle}>
              Issue
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.integrationSubTitle}
            >
              Create a pool contract that will safely store the funds, connect
              your pool to a game or integrate one.
            </Typography>
          </div>
        </div>

        <div className={classes.integrateGuide}>
          <div>
            <CheckCircleRoundedIcon
              fontSize="large"
              className={classes.iconCircle}
            />
          </div>
          <div className={classes.integrationText}>
            <Typography variant="h6" className={classes.integrationTitle}>
              Stake
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.integrationSubTitle}
            >
              Deposit to the pool with the players to generate the reward. The
              stake is retrieved when the game is over.
            </Typography>
          </div>
        </div>

        <div className={classes.integrateGuide}>
          <div>
            <CheckCircleRoundedIcon
              fontSize="large"
              className={classes.iconCircle}
            />
          </div>
          <div className={classes.integrationText}>
            <Typography variant="h6" className={classes.integrationTitle}>
              Reward players
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.integrationSubTitle}
            >
              The winners will be rewarded with the prize, generated by the
              pool's locked value.
            </Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12}>
        <MainButton variant="contained" onClick={onCreatePoolClick}>
          Create a pool
        </MainButton>
      </Grid>

      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>

      <Grid id="popular-pool" item xs={12}>
        <Typography className={classes.subTitle} variant="subtitle2">
          POPULAR POOLS
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {poolsGrid}
      </Grid>
      <Grid item xs={12}>
        <Link to="/explore" className={classes.link}>
          <Button className={classes.linkButton}>Explore more pools</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>

      <Grid id="how-it-works" item xs={12}>
        <Typography className={classes.subTitle} variant="subtitle2">
          HOW IT WORKS?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.subTitleText}>
          Genie leverages the Ethereum Network, it uses DAI, a dollar-pegged
          stablecoin, as a token of value, and it generates interest by lending
          the DAI using the Compound Protocol.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button className={classes.linkButton}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/Genie-9a51f51cd3044b7c87f1fe6232171f15"
            className={classes.link}
          >
            Learn More
          </a>
        </Button>
      </Grid>
    </Grid>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInSuccess: (userDetails) =>
      dispatch({
        type: 'AUTH_SUCCESS',
        token: userDetails.token,
        userId: userDetails.userId,
        name: userDetails.name,
        imageUrl: userDetails.imageUrl,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
