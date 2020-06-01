import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, withStyles } from '@material-ui/core';
import { green, yellow, red } from '@material-ui/core/colors';
import { Difficulty } from '../redux/game/models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maringTop: theme.spacing(6),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      marginTop: theme.spacing(4)
    },
    titleIcon: {
      marginRight: theme.spacing(2),
    },
  }),
);

const EasyButton = withStyles((theme: Theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#28a745",
    '&:hover': {
      backgroundColor: "#28a745" 
    }
  }
}))(Button);

const NormalButton = withStyles((theme: Theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#f3a300",
    '&:hover': {
      backgroundColor: "#f3a300"
    }
  }
}))(Button);

const HardButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: "#d32c3c",
    '&:hover': {
      backgroundColor: "#d32c3c" 
    }
  }
}))(Button);

interface Props {
  init: (difficulty: Difficulty ) => void
}

const Home: React.FC<Props> = (props) => {
  const classes = useStyles();

  const init = (difficulty: Difficulty) => {
    props.init(difficulty);
  }

  return (
    <div className={classes.root}>
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" className={classes.title}>
            it's like aim booster but for twitch emotes.
          </Typography>
        </Grid>
        <Grid item container
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={2} sm={1}>
            <EasyButton onClick={(e) => init({name: "EASY", emoteCount: 100})} size="large" fullWidth variant="contained" className={classes.menuButton}>Easy</EasyButton>
            <NormalButton onClick={(e) => init({name: "NORMAL", emoteCount: 200})} size="large" fullWidth variant="contained" className={classes.menuButton}>Normal</NormalButton>
            <HardButton onClick={(e) => init({name: "HARD", emoteCount: 500})} size="large" fullWidth variant="contained"className={classes.menuButton}>Hard</HardButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;