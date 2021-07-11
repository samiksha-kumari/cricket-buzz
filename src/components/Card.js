import React , {useState} from 'react';
import{Card, Typography, CardContent, CardActions, Button, Grid, DialogContentText,Dialog, DialogTitle} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import {getMatchDetail} from '../api/Api';

const GetCards = ({match}) => {
    const [detail, setDetails] = useState([])
    const [open, setOpen] = useState(false)
    
   const showDetailsBtnClick = (id) => {
       getMatchDetail(id)
        .then(data => {
            console.log(data)
            setDetails(data)
            handleOpen()
        })
        .catch(error => console.log(error));

   }
    const getMatchesCard = () => {
        return(
            <Card style={{marginTop: 15}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                       <Grid item variant="h5">
                           <Typography>{match["team-1"]}</Typography>
                       </Grid>
                       <Grid item>
                     <img src={require("../img/vs-1.png")}  style={{width: 85}} alt="vs logo" />
                
                       </Grid>
                       <Grid item variant="h5">
                       <Typography>{match["team-2"]}</Typography>
                       </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button variant="outlined" color="primary" onClick={() =>{
                    showDetailsBtnClick(match["unique_id"])
                    }}>Show Details</Button>
                    <Button variant="outlined" style={{marginLeft: 5}} color="primary">Start Date {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
            </Card>
            
            )
    }
 
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
 

    return(
        <>
        {match.type === "Twenty20" ? getMatchesCard() : ""}
        <Dialog 
        open={open} 
        onClose={handleClose}  
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

    <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <Typography>
                    {detail.stat}
                </Typography>
                <Typography>
                    Match <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                        {detail.matchStarted ? "Started": "Still Not Started"}
                    </span>
                </Typography>
                <Typography>
                {detail.matchStarted ? (
                     <React.Fragment>
                Score: <br/><span style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                {detail.score}
                     </span>
                     </React.Fragment>
                ) : ''}    
                </Typography>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>    Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}


export default GetCards