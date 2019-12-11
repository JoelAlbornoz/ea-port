import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const ToolbarM = (props) => {
    return (
        <AppBar position="static" style={{backgroundColor:'#23272a'}}>
        <Toolbar style={{height:'10vh'}}>
          
          
          <Button style={styles.button}onClick={() => props.handleClick("Landing")}>Home</Button>
          <Button style={styles.button}onClick={() => props.handleClick("Projects")}>Projects</Button>
          <Button style={styles.button}onClick={() => props.handleClick("Academic")}>Academic</Button>
          
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