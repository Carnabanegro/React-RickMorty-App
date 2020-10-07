import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Button} from '@material-ui/core/';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({filter}) =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
            <Button component={NavLink} to="/"> 
                <HomeIcon style={{ fontSize: 40 }}  />
            </Button>
            <Button component={NavLink} to={`/searchPage/${filter}`}> 
                <SearchIcon style={{ fontSize: 40 }}  />
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapState({search} ){
  return {
    filter:search.filterSearch
  }
}
export default connect(mapState)(Header)