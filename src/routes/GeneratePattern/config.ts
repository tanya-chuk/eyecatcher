export enum EElementSettings {
  color = 'color',
  variant = 'variant',
  animation = 'animation',
  shape = 'shape'
}

export enum EElementVariant {
  filled = 'filled',
  outlined = 'outlined'
}

export enum EElementShape {
  round = 'round',
  square = 'square'
}

export interface IElementAppearance {
  shape: EElementShape;
  variant: EElementVariant;
  color: string;
  animation: string;
}

export const fieldsConfig = [
  {
    name: 'Choose shape',
    type: EElementSettings.shape,
    options: [
      {
        value: 'square',
        name: 'Square'
      },
      {
        value: 'round',
        name: 'Round'
      }
    ]
  },
  {
    name: 'Choose color',
    type: EElementSettings.color,
    options: [
      {
        value: 'red',
        name: 'Red'
      },
      {
        value: 'green',
        name: 'Green'
      },
      {
        value: 'blue',
        name: 'Blue'
      }
    ]
  },
  {
    name: 'Choose element variant',
    type: EElementSettings.variant,
    options: [
      {
        value: 'filled',
        name: 'Filled'
      },
      {
        value: 'outlined',
        name: 'Outlined'
      }
    ]
  },
  {
    name: 'Choose animation',
    type: EElementSettings.animation,
    options: [
      {
        value: 'skew',
        name: 'Skew'
      },
      {
        value: 'scale',
        name: 'Scale'
      }
    ]
  }
];
