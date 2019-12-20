import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import aimage from '../media/gifs/prj.gif'
import Grid from '@material-ui/core/Grid'
import fadein from 'react-animations/lib/fade-in'
import styled, { keyframes } from 'styled-components'
import ProjectContainer from './ProjectContainer'
import data from '../data/projectsdata'

const anim = keyframes`${fadein}`;
const ZomDiv = styled.div`
  animation: 1s ${anim};
`;

const ProjectsCard = () => {
    return (
        <ZomDiv>
            <Card style={styles.Card}>
                <Grid container spacing={8} direction='row' alignItems="center" justify="center" >
                    <Grid item xs={12}md={5}>
                        <CardMedia style={styles.img} src={aimage} component='img' />
                    </Grid>

                    
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.csj.title} description={data.csj.description} link={data.csj.link} lang={data.csj.lang} style={styles.proj} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.p5.title} description={data.p5.description} link={data.p5.link} lang={data.p5.lang} style={styles.proj}/>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.ani.title} description={data.ani.description} link={data.ani.link} lang={data.ani.lang} style={styles.proj} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.rna.title} description={data.rna.description} link={data.rna.link} lang={data.rna.lang} style={styles.proj} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.rqm.title} description={data.rqm.description} link={data.rqm.link} lang={data.rqm.lang} style={styles.proj}/>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.tech.title} description={data.tech.description} link={data.tech.link} lang={data.tech.lang} style={styles.proj} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.opn.title} description={data.opn.description} link={data.opn.link} lang={data.opn.lang} style={styles.proj} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.rnd.title} description={data.rnd.description} link={data.rnd.link} lang={data.rnd.lang} style={styles.proj} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.opt.title} description={data.opt.description} link={data.opt.link} lang={data.opt.lang} style={styles.proj}/>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <ProjectContainer title={data.tpt.title} description={data.tpt.description} link={data.tpt.link} lang={data.tpt.lang} style={styles.proj} />
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
    },
    img: {
        marginLeft:'auto',
        marginRight:'auto',
        overflow: 'hidden',
        height: 'auto',
        boxShadow: "1vw 1vw 1vw rgba(0,0,0,0.35) ",
        border: 'none',
        maxWidth:'25vw'
    },
    proj: {
        overflowY: 'hidden',
        overflowX: 'hidden',
        width: '100%',
        height:'auto',
        marginLeft:'auto',
        marginRight:'auto'
    }

}

export default ProjectsCard;