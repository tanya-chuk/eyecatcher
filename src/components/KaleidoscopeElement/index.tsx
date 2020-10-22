import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IElementAppearance, EElementShape, EElementVariant } from '../../routes/GeneratePattern/types';
import clsx from 'clsx';

const useStyles = makeStyles({
  '@keyframes fade': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes pulse': {
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(0.8)' }
  },
  '@keyframes skew': {
    from: { transform: 'skew()' },
    to: { transform: 'skew(.312rad)' }
  },
  root: ({ color, variant, shape }: IElementAppearance) => ({
    width: 50,
    height: 50,
    position: 'relative',
    borderRadius: shape === EElementShape.round ? '100%' : 4,
    background: variant === EElementVariant.filled ? color : 'transparent',
    border: `4px solid ${variant === EElementVariant.outlined ? color : 'transparent'}`
  }),
  fade: {
    animation: `$fade 2s infinite`,
    animationTimingFunction: 'ease'
  },
  pulse: {
    animation: `$pulse 1s infinite`,
    animationTimingFunction: 'ease'
  },
  skew: {
    animation: `$skew 1s infinite`,
    animationTimingFunction: 'ease'
  }
});

interface IProps {
  elementProps: IElementAppearance;
}

const KaleidoscopeElement: FC<IProps> = ({ elementProps }) => {
  const classes = useStyles(elementProps);
  return <div className={clsx(classes.root, (classes)[elementProps.animation])} />;
};

export default KaleidoscopeElement;
