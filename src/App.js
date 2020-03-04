import React from "react";
import AppRouter from './router';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sorabel from './assets/logo-sorabel.png';
import Search from './assets/icon-search.png';
import Heart from './assets/icon-heart.png';
import Cart from './assets/icon-cart.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>

      <AppBar className="Bar-app" position="fixed">
        <Container
          maxWidth="sm"
          className="Container-app">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <img src={Sorabel} className="App-logo" alt="logo" />
            </Typography>
            <img src={Search} className="App-logo-right" alt="logo" />
            <img src={Heart} className="App-logo-right" alt="logo" />
            <img src={Cart} className="App-logo-right" alt="logo" />
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        maxWidth="sm"
        className="Container-app">

        <AppRouter />

      </Container>
    </div>
  );
}

export default App;
