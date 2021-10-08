import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              鲁迅经典语录
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <p>
                用玩笑来应付敌人，自然也是一种好战法，但触着之处，须是对手的致命伤，否则，玩笑终不过是一种单单的玩笑而已。
              </p>
              <p>
                有时也觉得宽恕是美德，但立刻也疑心这话是怯汉所发明，因为他没有报复的勇气；或者倒是卑怯的坏人所创造，因为他贻害于人而怕人来报复，便骗以宽恕的美名。
              </p>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      文学
                    </Button>
                    <Link to="/dashboard">
                      <Button variant="contained" color="primary">
                        Dashboard
                      </Button>
                    </Link>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          鲁迅文学
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          鲁迅有多强大
        </Typography>
      </footer>
    </React.Fragment>
  );
}
