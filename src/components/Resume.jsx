import React from 'react'
import ResumePic from '../assets/resume.jpg'
import { Card, CardMedia, Container } from '@material-ui/core'


export default function Resume() {
    return (
        <Container>
            <Card>
                {/* <CardMedia
                    component='image'
                    image={'../assets/resume.jpg'}
                /> */}
                <img className='resume-pic' alt='resume' src={ResumePic}/>
            </Card>
        </Container>
    )
}
