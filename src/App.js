import React, { useEffect, useState } from 'react';
import "./App.css"
import Navbar from "./components/Navbar";
import {Typography} from '@material-ui/core';
import GetCards from "./components/Card";
import {Grid} from "@material-ui/core";
import { getMatches } from "./api/Api";

function App() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
      getMatches()
        .then(data => {
          setMatches(data.matches)
          // console.log(data.matches, 'matches')
        })
        .catch(error => alert("couldn't load"))
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Typography variant="h3" style={{marginTop: 20}}>Cricket Buzz</Typography>

      <Grid container>
      <Grid sm="2">  </Grid>
        <Grid sm="8">
        {matches.map((match) => (
          <React.Fragment key={match.unique_id}>
               {match.type==="Twenty20" ? <GetCards key={match.unique_id} match={match} /> : ''}
          </React.Fragment>
       
        
      ))}
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
