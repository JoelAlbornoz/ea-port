import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'


const CourseContainer = (props) => {
    const Conditional = () => {
        if(props.link){
            return (<a href={props.link} style={styles.text}>Certificate</a>)
        }
        else{
            return null
        }
    }


    return (
        <Card style={styles.card}>
        
            <Typography style={{ color: 'white' }}>
            
                <h4 style={styles.text}>{props.title}</h4>
                <hr/>
                <p style={styles.text}>{props.description}</p>
                <Conditional/>
            
            </Typography>
      
        </Card>
    )
}

const styles = {
    text:{
        color:'white',
        paddingLeft:15,
        paddingBottom:0,
        paddingTop:0,
    },
    card: {
        backgroundColor: '#2c2f33',
        
    }
}
export default CourseContainer;