import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
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

const Footer: React.FC = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="body2" className={classes.title}>
          Emote are property of Twitch Interactive or their respective owners. Do not reuse without obtaining their permission.
        </Typography>
        <Typography variant="body2" className={classes.title}>
          This is an independent site not run by Twitch. I love the community and wanted to build this as to bring my own little pebble to the monument.
        </Typography>
        <Typography variant="body2" className={classes.title}>
          feel free to contact me at contact@niconico.io.
        </Typography>
      </Grid>
    </div>
  );
}

export default Footer;