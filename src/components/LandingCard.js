import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Foto from '../media/images/foto.jpg'
import js from '../media/svg/js-square-brands.svg'
import Bootstrap from '../media/svg/Bootstrap.svg'
import html5 from '../media/svg/html5.svg'
import css3 from '../media/svg/css3.svg'
import database from '../media/svg/database.svg'
import java from '../media/svg/java.svg'
import material from '../media/svg/material.svg'
import react from '../media/svg/react.svg'

const LandingCard = () => {
    return (
        <Card style={styles.Card}>
            <div style={styles.imgContainer}>
                <CardMedia style={styles.img}
                    imageStyle={{ borderRadius: 200 }}
                    src={Foto} component='img' />
            </div>
            <div style={styles.text}>
                <Typography style={styles.text}>{typoContent.firstLine} <br /> {typoContent.secondLine}<br/>
                <a href='https://linkedin.com/in/joel-albornoz/' target='_blank'>Linkedin</a> <br/>
                <a href='https://github.com/joelalbornoz' target='_blank'>Github</a></Typography>
                <div style={styles.iconsContainer}>
                    <CardMedia component='img' src={js} style={styles.icons} />
                    <CardMedia component='img' src={Bootstrap} style={styles.icons} />
                    <CardMedia component='img' src={react} style={styles.icons} />
                    <CardMedia component='img' src={material} style={styles.icons} />
                    <CardMedia component='img' src={java} style={styles.icons} />
                    <CardMedia component='img' src={html5} style={styles.icons} />
                    <CardMedia component='img' src={css3} style={styles.icons} />
                    <CardMedia component='img' src={database} style={styles.icons} />
                </div>

            </div>
        </Card>
    )
}

const typoContent = {
    firstLine: "Elias Joel Albornoz",
    secondLine: "Frontend Developer - Computer Science Student",
    thirdLine: "placeholder"
}

const styles = {
    Card: {
        width: '98vw',
        height: '85vh',
        backgroundColor: '#23272a',
        margin: '1vw',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexFlow: 'row wrap'

    },
    text: {
        padding: '2vw',
        width: '50vw',
        justifySelf: 'start',
        alignText: 'center',
        color: 'white',
        flex: 1,
    },
    img: {
        borderRadius: '50px',
        overflow: 'hidden',
        maxWidth: '17vw',
        height: 'auto',
        alignSelf: 'center',
        boxShadow: "2vw 2vw 2vw rgba(0,0,0,0.35) ",
        border: 'none',
    },
    imgContainer: {
        marginRight: 'auto',
        justifySelf: 'start',
        padding: '3vw',
    },
    icons: {
        width: 20, height: 20, padding: 2,
    },
    iconsContainer: {
        display: 'flex',
        paddingLeft: '2vw',
        color: '#99aab5',
    }
}

export default LandingCard;