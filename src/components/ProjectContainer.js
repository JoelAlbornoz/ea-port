import React from 'react'
import javascript from '../media/svg/js-square-brands.svg'
import html from '../media/svg/html5.svg'
import java from '../media/svg/java.svg'
import react from '../media/svg/react.svg'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

const CondMedia = (props) => {
    if (props.lang === 'javascript') {
        return (<CardMedia component='img' src={javascript} style={styles.icon} />)
    } else if (props.lang === 'java') {
        return (<CardMedia component='img' src={java} style={styles.icon} />)
    } else if (props.lang === 'html') {
        return (<CardMedia component='img' src={html} style={styles.icon} />)
    } else if (props.lang === 'react') {
        return (<CardMedia component='img' src={react} style={styles.icon} />)
    }
}

const ProjectContainer = (props) => {
    return (
        <Card style={{...styles.card, ...props.style}}>
            <Grid container direction='row' alignItems="center" justify="center" spacing={2}>
                <Grid item xs={2} md={4}>
                    <CondMedia lang={props.lang} />
                </Grid>
                <Grid item xs={10} md={8}>
                    <Grid container direction='column' alignItems="flex-start" justify="flex-start" spacing={0}>
                        <Grid item>
                            <Typography style={styles.text}>
                               <h4> {props.title} </h4>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={styles.text}>
                               <p> {props.description} </p>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={styles.text}>
                               <a  style={styles.text} href={props.link} target= '_blank' rel="noopener noreferrer">Watch</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
        </Card>
            )
        }
        
const styles = {
                card:{
                backgroundColor: '#2c2f33',
                width:'40vw',
                height:'auto'
        },
    icon:{
            justifySelf:'center',
            alignSelf:'center',
            maxHeight:'15vh',
            maxWidth:'5vw',
            padding:30,
        },
    text:{
            color:'white',
            padding:15,
            paddingBottom:0,
            paddingTop:0,
        },
    }
    
export default ProjectContainer