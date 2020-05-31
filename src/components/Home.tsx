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
    },
    titleIcon: {
      marginRight: theme.spacing(2),
    },
  }),
);

const EasyButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  }
}))(Button);

const NormalButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700]
    }
  }
}))(Button);

const HardButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
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
          <Typography variant="h5">
            it's like aim booster but for twitch emotes.
          </Typography>
        </Grid>
        <Grid item>
          <EasyButton onClick={(e) => init({name: "EASY", emoteCount: 100})} size="large" variant="contained" color="primary" className={classes.menuButton}>Easy</EasyButton>
        </Grid>
        <Grid item>
          <NormalButton  onClick={(e) => init({name: "NORMAL", emoteCount: 200})} size="large" variant="contained" className={classes.menuButton}>Normal</NormalButton>
        </Grid>
        <Grid item>
          <HardButton  onClick={(e) => init({name: "HARD", emoteCount: 500})} size="large" variant="contained"className={classes.menuButton}>Hard</HardButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;