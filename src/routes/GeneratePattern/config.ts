import { IFieldConfig, EElementSettings, EElementShape, EElementVariant } from "./types";

export const fieldsConfig: IFieldConfig[] = [
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
  },
  {
    name: 'Choose field size',
    type: EElementSettings.fieldSize,
    options: [
      {
        value: 3,
        name: '3 x 3'
      },
      {
        value: 5,
        name: '5 x 5'
      },
      {
        value: 7,
        name: '7 x 7'
      }
    ]
  }
];

export const initialValues = {
  shape: EElementShape.round,
  variant: EElementVariant.filled,
  color: 'red',
  animation: '',
  fieldSize: 3
};
