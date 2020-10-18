export enum EElementSettings {
  color = 'color',
  type = 'type',
  animation = 'animation'
}

export enum EElementType {
  filled = 'filled',
  outlined = 'outlined'
}

export interface IElementAppearance {
  type: EElementType;
  color: string;
  animation: string;
}

export const fieldsConfig = [
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
    name: 'Choose element type',
    type: EElementSettings.type,
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
