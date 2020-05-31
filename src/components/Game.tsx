import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Fab, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import * as GameType from '../redux/game/models';
import * as EmotesType from '../redux/emotes/models';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
    },
    emote: {
      width: theme.spacing(16),
      height: theme.spacing(16), 
    },
  }),
);

interface Props {
  game : GameType.Game,
  emotes : EmotesType.Emote[],
  guess : () => void,
  update : (value: String) => void
}

const Game: React.FC<Props> = props => {
  const classes = useStyles();

  const emote = props.emotes[props.game.emoteIndex];

  const cb = (e: KeyboardEvent) => {
    if (e.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch(e.key) {
      case "Enter":
        props.guess();
        break;
      default:
        return;
    }
    e.preventDefault();
  }
  document.addEventListener("keypress", e => cb(e));

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={6}>
        <Paper>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography>Score : {props.game.score}</Typography>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" item xs={12}>
              <img alt="guessImg" className={classes.emote} src={"http:"+emote.url}></img> 
            </Grid>
            <Grid item>
              <TextField 
                autoFocus 
                fullWidth 
                value={props.game.guess}
                onChange={(e) => props.update(e.target.value)}
                label="Type here..." 
                variant="outlined">

              </TextField>
            </Grid>
            <Grid>
              <Fab 
                color="primary" 
                onClick={(e) => props.guess()}
                aria-label="send">
              <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Game;