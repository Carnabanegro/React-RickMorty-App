import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Routes from './routes/Routes';
import Filter from './components/filter/Filter'
import Searcher from './components/searcher/Searcher'
import { Grid} from '@material-ui/core';
import CustomPagination from './components/pagination/CustomPagination';
export default function App() {

  const [search,setSearch] =React.useState("");

  function searchHandler(value) {
    setSearch(value)
  }


  return (
    <div className="App">
      <Grid container fluid  >
        <Grid container item xs={12} >
          <NavLink  className="link" activeClassName="active" exact to="/">
            Home
          </NavLink>
        </Grid>
        <Grid item xs={12} className="container2" >
            <Grid container className="container3" >
              <Grid container item md={2} className="filter-container" >
                <Filter searchType={searchHandler}/>
              </Grid>
              <Grid item md={10} >
                <Grid container spacing={2} >
                  <Grid container  item xs={12}>
                    <Searcher searchType={search}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Routes />
                  </Grid>
                  <Grid container item xs={12} direction="row" justify="center" alignItems="flex-start">
                    <CustomPagination searchType={search} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      
    </div>
);
  }
