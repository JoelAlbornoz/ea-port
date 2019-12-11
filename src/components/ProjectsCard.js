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
                    <Grid item xs={12} md={4}>
                        <CardMedia style={styles.img} src={aimage} component='img' />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div style={styles.projcont}>
                            <Grid container spacing={2} direction='column' alignItems="flex-start" justify="flex-start" >
                                <Grid item>
                                    <ProjectContainer title={data.csj.title} description={data.csj.description} link={data.csj.link} lang={data.csj.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.p5.title} description={data.p5.description} link={data.p5.link} lang={data.p5.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.ani.title} description={data.ani.description} link={data.ani.link} lang={data.ani.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.rna.title} description={data.csj.description} link={data.rna.link} lang={data.rna.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.rqm.title} description={data.rqm.description} link={data.rqm.link} lang={data.rqm.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.tech.title} description={data.tech.description} link={data.tech.link} lang={data.tech.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.opn.title} description={data.opn.description} link={data.opn.link} lang={data.opn.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.rnd.title} description={data.rnd.description} link={data.rnd.link} lang={data.rnd.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.opt.title} description={data.opt.description} link={data.opt.link} lang={data.opt.lang} />
                                </Grid>
                                <Grid item>
                                    <ProjectContainer title={data.tpt.title} description={data.tpt.description} link={data.tpt.link} lang={data.tpt.lang} />
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
        overflowY: 'scroll'
    },
    img: {
        position: 'sticky',
        overflow: 'hidden',
        height: 'auto',
        boxShadow: "1vw 1vw 1vw rgba(0,0,0,0.35) ",
        border: 'none',
        flex: 'auto',
        alignSelf: 'center',
        justifySelf: 'center'
    },
    projcont: {
        overflowY: 'scroll',
        overflowX: 'hidden',
        maxHeight: '80vh'
    }

}

export default ProjectsCard;