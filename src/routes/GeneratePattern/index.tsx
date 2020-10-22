import React, { useState, FC, ChangeEvent } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import { fieldsConfig, initialValues } from './config';
import { IElementAppearance, EElementSettings } from './types';
import { calcColumns } from './utils';
import { v4 as uuidv4 } from 'uuid';
import KaleidoscopeElement from '../../components/KaleidoscopeElement';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex'
  },
  container: {
    minHeight: 300,
    borderRadius: 8,
    border: '2px solid grey',
    margin: spacing(2),
    padding: spacing(2)
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  field: {
    width: 200,
    margin: `${spacing(1.5)}px 0`
  },
  kaleidoscope: ({ fieldSize }: IElementAppearance) => ({
    display: 'grid',
    gridTemplateColumns: calcColumns({ count: fieldSize, size: '60px' })
  }),
  demosWrapper: {
    width: '50%'
  }
}));

const GeneratePattern: FC = () => {
  const [elementAppearance, setElementAppearance] = useState<IElementAppearance>(initialValues);
  const classes = useStyles(elementAppearance);

  const handleChangeAppearance = (type: EElementSettings) => (e: ChangeEvent<{ value: unknown }>) => {
    setElementAppearance({ ...elementAppearance, [type]: e.target.value });
  };

  const renderKaleidoscopeElements = () => {
    const kaleidoscopeElements = [];
    const elementsCount = elementAppearance.fieldSize ** 2;
    for (let i = 0; i < elementsCount; i++) {
      kaleidoscopeElements.push(<KaleidoscopeElement key={uuidv4()} elementProps={elementAppearance} />);
    }
    return kaleidoscopeElements;
  };

  return (
    <>
      <Typography variant='h2'>hello there</Typography>
      <div className={classes.root}>
        <div className={classes.demosWrapper}>
          <div className={classes.container}>
            <Typography variant='h6'>Design your pattern&apos;s element</Typography>
            <KaleidoscopeElement elementProps={elementAppearance} />
          </div>
          <div className={classes.container}>
            <Typography variant='h6'>Now see the result</Typography>
            <div className={classes.kaleidoscope}>
              {renderKaleidoscopeElements()}
            </div>
          </div>
        </div>
        <div className={clsx(classes.container, classes.formWrapper)}>
          {fieldsConfig.map(({ name, type, options }) =>
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
