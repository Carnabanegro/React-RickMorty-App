import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button,Toolbar, AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      
      <React.Fragment>
              <Toolbar />
              <AppBar position="fixed" color="secondary" className={classes.appBar}>
                <Toolbar>
                <Button  href="https://www.facebook.com/patricio.serra1/"  >
                  <FacebookIcon style={{ fontSize: 40 }}/>
                </Button>
                <Button  href="https://twitter.com/nvmn_dies"  >
                  <TwitterIcon style={{ fontSize: 40 }}/>
                </Button>
                <Button  href="https://www.instagram.com/patricioserra/"  >
                  <InstagramIcon style={{ fontSize: 40 }}/>
                </Button>
                <Button  href="https://www.linkedin.com/in/patricio-serra-b8752b121/"  >
                  <LinkedInIcon style={{ fontSize: 40 }}/>
                </Button>
                    
                    
                </Toolbar>
              </AppBar>
      </React.Fragment>
    
  )
}