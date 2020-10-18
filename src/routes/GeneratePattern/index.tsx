import React, { useState, FC, ChangeEvent } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import { EElementSettings, EElementType, fieldsConfig, IElementAppearance } from './config';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex'
  },
  container: {
    width: '50%',
    height: 300,
    borderRadius: 8,
    border: '2px solid grey',
    margin: spacing(2),
    padding: spacing(2)
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    width: 200,
    margin: `${spacing(1.5)}px 0`
  },
  element: ({color, type}: IStyles) => ({
    width: 50,
    height: 50,
    borderRadius: '100%',
    background: type === EElementType.filled ? color : 'transparent',
    border: `4px solid ${type === EElementType.outlined ? color : 'transparent'}`
  })
}));

interface IStyles {
  type: EElementType;
  color: string;
  animation: string;
}

const GeneratePattern: FC = () => {
  const [elementAppearance, setElementAppearance] = useState<IElementAppearance>({
    type: EElementType.filled,
    color: '',
    animation: ''
  });

  const classes = useStyles({
    color: elementAppearance.color,
    type: elementAppearance.type,
    animation: elementAppearance.animation
  });

  const handleChangeAppearance = (type: EElementSettings) => (e: ChangeEvent<{ value: unknown }>) => {
    setElementAppearance({...elementAppearance, [type]: e.target.value});
  };

  return (
    <>
      <Typography variant='h2'>hello there</Typography>
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography variant='h6'>Let&apos;s create some pattern here</Typography>
          <div className={classes.element} />
        </div>
        <div className={clsx(classes.container, classes.formWrapper)}>
          {fieldsConfig.map(({name, type, options}) => 
            <FormControl key={type} className={classes.field}>
              <InputLabel id={`select-label-${type}`}>{name}</InputLabel>
              <Select
                labelId={`${type}-label`}
                id={`${type}-select`}
                value={elementAppearance[type]}
                onChange={handleChangeAppearance(type)}
              >
                {options.map(({ value, name }) => <MenuItem key={value} value={value}>{name}</MenuItem>)}
              </Select>
            </FormControl>
          )}
        </div>
      </div>
    </>
  );
};

export default GeneratePattern;
