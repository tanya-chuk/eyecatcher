import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IElementAppearance, EElementShape, EElementVariant } from '../../routes/GeneratePattern/types';

const useStyles = makeStyles({
  root: ({ color, variant, shape }: IElementAppearance) => ({
    width: 50,
    height: 50,
    borderRadius: shape === EElementShape.round ? '100%' : 4,
    background: variant === EElementVariant.filled ? color : 'transparent',
    border: `4px solid ${variant === EElementVariant.outlined ? color : 'transparent'}`
  })
});

interface IProps {
  elementProps: IElementAppearance;
}

const KaleidoscopeElement: FC<IProps> = ({ elementProps }) => {
  const classes = useStyles(elementProps);
  return <div className={classes.root} />;
};

export default KaleidoscopeElement;
