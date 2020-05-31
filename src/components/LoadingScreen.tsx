import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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

export default () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={6}>
        <Paper>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            <Grid container direction="row" justify="center" alignItems="center" item xs={12}>
              <img alt="triHard" className={classes.emote} src="/static/images/trihard.png"></img> 
            </Grid>
            <Grid item>
              <TextField fullWidth label="Type here..." variant="outlined"></TextField>
            </Grid>
            <Grid>
              <Fab color="primary" aria-label="send">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}