import React from 'react'
import Headshot from '../assets/toonheadshot.png'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, Typography, AppBar, Grid, Toolbar, IconButton, Link as UiLink } from "@material-ui/core";

export default function Navbar() {
    return (
        <Box component='nav'>
            <AppBar
            color='transparent'
            elevation={0}
            position='sticky' 
            style={{ width: '100%', 
            // backgroundColor:'#219ebc', 
            // color:'#023047' 
            }}>
                <Toolbar>
                    <Grid container justify='space-between' direction='row'>
                        <Grid item>
                            <IconButton href='/' style={{ padding: '0px'}}>
                                <img className='headshot-pic' alt='resume' src={Headshot}/>
                            </IconButton>
                        </Grid>
                        <Grid component='div' style={{ display:'flex', alignContent: 'center'}}>
                            <IconButton
                                href='https://github.com/cdiazit5' 
                                style={{ color: '#bcddec', alignItems:'center'}}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton
                                href='https://www.linkedin.com/in/camerondiaz/'
                                style={{ color: '#bcddec', alignItems:'center'}}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton 
                                href='/resume' 
                                style={{ color: '#bcddec', alignItems:'center'}}>
                                <InsertDriveFileIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
