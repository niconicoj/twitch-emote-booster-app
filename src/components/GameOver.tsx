import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
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
      marginTop: theme.spacing(1)
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
          <Typography variant="h5">
            You lost !
          </Typography>
        </Grid>
        <Grid item className={classes.menuButton}>
          your score was {props.game.score}
        </Grid>
        <Grid item className={classes.menuButton}>
          <Button color="primary" variant="contained" onClick={(e) => props.start()}>retry ?</Button>
        </Grid>
        <Grid item className={classes.marginTopSmall}>
          <Button color="primary" variant="contained" onClick={(e) => props.change("HOME")}> change difficult ?</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default GameOver;