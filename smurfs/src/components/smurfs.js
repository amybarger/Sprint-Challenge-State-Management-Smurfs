import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions/smurfActions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });  

const Smurf = props => {

    const classes = useStyles();
    
    useEffect(() => {
        props.fetchSmurf();
    }, [])

    return (
        <div>
            <div>{props.smurf && props.smurf.map(char => {
                return (
                    <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {char.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {char.age}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {char.height}
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                );
            })} 

            </div>
            <p className="error">{props.error}</p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        smurf: state.smurfReducer.smurf,
        error: state.smurfReducer.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf })
    (Smurf);