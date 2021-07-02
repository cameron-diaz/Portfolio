import { Container, Typography, Grid, Paper } from '@material-ui/core'
import React from 'react'
import Type1 from './Type1'


export default function Aboutme() {
    return (
        <Container className='about-me'>
            <Grid container direction='column'>
                <Grid style={{ margin:'0 auto', marginBottom: '15px'}}>
                    <Typography variant='h2' style={{ fontFamily:'Spartan'}}>
                        Cameron Diaz
                    </Typography>
                </Grid>
                <Grid component='div' style={{ margin:'0 auto', marginBottom: '60px'}}>
                    <Type1/>
                </Grid>
                {/* <Paper elevation={2} style={{ padding: '7px' }}>
                    <Typography align='center' variant='h4'>
                        About Me
                    </Typography>
                </Paper> */}
            </Grid>
            
        </Container>
    )
}
