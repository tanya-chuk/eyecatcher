import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import routesUrls from '../Routes/routesUrls';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnWrapper: {
    width: 400,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spacing(3)}px ${spacing(1)}px`
  }
}));

interface IOption {
  id: string;
  description: string;
  route: string;
}

const Home: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const options: IOption[] = [
    {
      id: 'create',
      description: 'Let\'s draw!',
      route: routesUrls.CREATE
    },
    {
      id: 'gallery',
      description: 'Need insipration!',
      route: routesUrls.GALLERY
    }]

  const handleClick = (route: string) => () => history.push(route);

  return <div className={classes.root}>
      <Typography variant='h3'>Hello there!</Typography>
      <Typography variant='body1'>What's the plan?</Typography>
      <div className={classes.btnWrapper}>
        {options.map(({id, description, route}) => <Button key={id} onClick={handleClick(route)}>{description}</Button>)}
      </div>
    </div>
}

export default Home