import React from 'react'
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
            <Grid item xs={12}md={5} style={styles.imgContainer}>
            
                <CardMedia style={styles.img}
                    src={ganim} component='img' />
        
            </Grid >
            
                    <Grid item xs={12} md={5}>
                        <CourseContainer title={data.algor.title} description={data.algor.description} link={data.algor.link} styles={styles.courseContainer}/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CourseContainer title={data.responsive.title} description={data.responsive.description} link={data.responsive.link} styles={styles.courseContainer}/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CourseContainer title={data.frontend.title} description={data.frontend.description} styles={styles.courseContainer}/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CourseContainer title={data.fullstack.title} description={data.fullstack.description} styles={styles.courseContainer}/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CourseContainer title={data.java.title} description={data.java.description} link={data.java.link} styles={styles.courseContainer}/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CourseContainer title={data.famaf.title} description={data.famaf.description} styles={styles.courseContainer}/>
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
        overflowY:'scroll',
        
    },imgContainer:{justifyItems:'center'},
    img: {
        marginLeft:'auto',
        marginRight:'auto',
        overflow: 'hidden',
        height: 'auto',
        boxShadow: "1vw 1vw 1vw rgba(0,0,0,0.35) ",
        border: 'none',
        alignSelf:'center',
        justifySelf:'center',
        maxWidth:'25vw'
    },
    courseList:{
        overflowY: 'scroll',
        overflowX: 'hidden',
        maxHeight:'80vh'
    },
    courseContainer:{
        height:'40vh',
    }
}
export default AcademicCard;