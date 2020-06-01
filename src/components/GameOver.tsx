import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, withStyles } from '@material-ui/core';
import * as GameType from '../redux/game/models';
import * as StatusType from '../redux/status/models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginTop: theme.spacing(4)
    },
    marginTopSmall: {
      marginTop: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
    },
    titleIcon: {
      marginRight: theme.spacing(2),
    },
  }),
);

const RetryButton = withStyles((theme: Theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#28a745",
    '&:hover': {
      backgroundColor: "#28a745" 
    }
  }
}))(Button);

const HomeButton = withStyles((theme: Theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#d32c3c",
    '&:hover': {
      backgroundColor: "#d32c3c"
    }
  }
}))(Button);

interface Props {
  game: GameType.Game,
  start: () => void,
  change: (status: StatusType.Status) => void
}

const GameOver: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">
            You lost !
          </Typography>
        </Grid>
        <Grid item className={classes.menuButton}>
          <Typography variant="h5">
            your score was {props.game.score}
          </Typography>
        </Grid>
        <Grid item container
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={3} sm={2}>
            <RetryButton color="primary" className={classes.marginTopSmall} fullWidth variant="contained" size="large" onClick={(e) => props.start()}>retry</RetryButton>
            <HomeButton color="primary" className={classes.marginTopSmall} fullWidth variant="contained" size="large" onClick={(e) => props.change("HOME")}>change difficult</HomeButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default GameOver;