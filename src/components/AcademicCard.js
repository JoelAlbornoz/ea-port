import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import fadein from 'react-animations/lib/fade-in'
import styled, { keyframes } from 'styled-components'
import ganim from '../media/gifs/acr.gif' 
import Grid from '@material-ui/core/Grid'
import CourseContainer from './CourseContainer'
import data from '../data/coursedata.js'

const anim = keyframes`${fadein}`; 
const ZomDiv = styled.div`
  animation: 1s ${anim};
`;

const AcademicCard = () => {
    return (
        <ZomDiv>
        <Card style={styles.Card}>
        <Grid container spacing={8} direction='row' alignItems="center" justify="center" >
            <Grid item xs={12}md={4}>

                <CardMedia style={styles.img}
                    src={ganim} component='img' />
        
            </Grid >
            <Grid item xs={12}md={4}>
                <div style={styles.courseList}>
                <Grid container spacing={2} direction='column' alignItems="flex-start" justify="flex-start" >
                    <Grid item>
                        <CourseContainer title={data.algor.title} description={data.algor.description} link={data.algor.link}/>
                    </Grid>
                    <Grid item>
                        <CourseContainer title={data.responsive.title} description={data.responsive.description} link={data.responsive.link}/>
                    </Grid>
                    <Grid item>
                        <CourseContainer title={data.frontend.title} description={data.frontend.description}/>
                    </Grid>
                    <Grid item>
                        <CourseContainer title={data.fullstack.title} description={data.fullstack.description}/>
                    </Grid>
                    <Grid item>
                        <CourseContainer title={data.java.title} description={data.java.description} link={data.java.link}/>
                    </Grid>
                    <Grid item>
                        <CourseContainer title={data.famaf.title} description={data.famaf.description}/>
                    </Grid>
                </Grid>
                </div>
            </Grid>
        </Grid>
        </Card>
        </ZomDiv>
    )
}

const styles = {
    Card: {
        width: '98vw',
        height: '85vh',
        backgroundColor: '#23272a',
        margin: '1vw',
        display: 'flex',
        flexWrap: 'wrap',
    },
    img: {
        position:'sticky',
        overflow: 'hidden',
        height: 'auto',
        boxShadow: "1vw 1vw 1vw rgba(0,0,0,0.35) ",
        border: 'none',
        flex: 'auto',
        alignSelf:'center',
        justifySelf:'center'
    },
    courseList:{
        overflowY: 'scroll',
        overflowX: 'hidden',
        width:'42vw',
        maxHeight:'80vh'
    },
}
export default AcademicCard;