import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import * as StatusTypes from '../redux/status/models';
import GameContainer from '../containers/GameContainer';
import HomeContainer from '../containers/HomeContainer';
import GameOverContainer from '../containers/GameOverContainer';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    titleIcon: {
      marginRight: theme.spacing(2),
    },
  }),
);

interface Props {
  status: StatusTypes.Status
}

const Main: React.FC<Props> = props => {
  const classes = useStyles();

  const content = (status: StatusTypes.Status) => {
    switch (status) {
      case 'HOME':
        return <HomeContainer/>
      case 'IN_GAME':
        return <GameContainer/>
      case 'GAME_OVER':
        return <GameOverContainer/>;
      case 'LOADING':
        return <div></div>;
      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="trihard" src="/static/images/trihard.png" className={classes.titleIcon} />
          <Typography variant="h6" className={classes.title}>
            Twitch Emote Booster
          </Typography>
        </Toolbar>
      </AppBar>
      {content(props.status)}
      <Footer/>
    </div>
  );
}

export default Main;