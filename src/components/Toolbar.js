import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ToolbarM = () => {
    return (
        <AppBar position="static" style={{backgroundColor:'#23272a'}}>
        <Toolbar style={{height:'10vh'}}>
          
          
          <Button style={styles.button} href='https://github.com/joelalbornoz' target='_blank'>Github</Button>
          <Button style={styles.button}>Projects Overview</Button>
          <Button style={styles.button}>Academic / Certifications</Button>
          <Button style={styles.button}>Contact</Button>
          
        </Toolbar>
      </AppBar>
    )
}

const styles = {
    button: {
        padding: 15,
        color: 'inherit',
        margin: 'auto',
        width:'10vh',
        height:'auto',
        fontSize:'75%'
    }
    
}

export default ToolbarM;