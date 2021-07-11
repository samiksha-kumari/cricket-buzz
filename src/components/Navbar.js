import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons;'
import React from 'react';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6">
                    Live Score
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Navbar