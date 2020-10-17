import React, { useState, FC } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex'
  },
  result: {
    width: '50%',
    height: 300,
    borderRadius: 8,
    border: '2px solid grey',
    margin: spacing(2)
  },
  element: ({color, type}: any) => ({
    width: 50,
    height: 50,
    borderRadius: '100%',
    background: type === 'filled' ? color : 'transparent',
    border: `4px solid ${type === 'outlined' ? color : 'transparent'}`
  })
}));

const GeneratePattern: FC = () => {
  const [elementAppearance, setElementAppearance] = useState<any>({
    color: '',
    type: 'filled',
    animation: ''
  });

  const classes = useStyles({color: elementAppearance.color, type: elementAppearance.type, animation: elementAppearance.animation});

  const handleChangeAppearance = (type: any) => (e: any) => {
    setElementAppearance({...elementAppearance, [type]: e.target.value});
  };

  return (
    <div className="App">
      <Typography variant='h2'>hello there</Typography>
      <div className={classes.root}>
        <div className={classes.result}>
          <div className={classes.element}>hello</div>
        </div>
        <div className={classes.result}>
            lets choose
          <FormControl>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="color-label"
              id="demo-simple-select"
              value={elementAppearance.color}
              onChange={handleChangeAppearance('color')}
            >
              <MenuItem value='red'>Red</MenuItem>
              <MenuItem value='green'>Green</MenuItem>
              <MenuItem value='blue'>blue</MenuItem>
            </Select>
          </FormControl>
          {elementAppearance.color && <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="pattern-label"
              id="demo-simple-select"
              value={elementAppearance.type}
              onChange={handleChangeAppearance('type')}
            >
              <MenuItem value='filled'>filled</MenuItem>
              <MenuItem value='outlined'>outlined</MenuItem>
            </Select>
          </FormControl>}
          {elementAppearance.color && <FormControl>
            <InputLabel id="demo-simple-select-label">Animate</InputLabel>
            <Select
              labelId="pattern-label"
              id="demo-simple-select"
              value={elementAppearance.animation}
              onChange={handleChangeAppearance('animation')}
            >
              <MenuItem value='scale'>scale</MenuItem>
              <MenuItem value='skew'>skew</MenuItem>
            </Select>
          </FormControl>}
        </div>
      </div>
    </div>
  );
};

export default GeneratePattern;
