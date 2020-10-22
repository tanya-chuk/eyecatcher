export enum EElementSettings {
  color = 'color',
  variant = 'variant',
  animation = 'animation',
  shape = 'shape',
  fieldSize = 'fieldSize'
}

export enum EElementVariant {
  filled = 'filled',
  outlined = 'outlined'
}

export enum EElementShape {
  round = 'round',
  square = 'square'
}

export enum EElementAnimation {
  pulse = 'pulse',
  fade = 'fade',
  skew = 'skew'
}

export interface IElementAppearance {
  shape: EElementShape;
  variant: EElementVariant;
  animation: EElementAnimation;
  color: string;
  fieldSize: number;
}

export interface IOption {
  value: string | number;
  name: string;
}

export interface IFieldConfig {
  name: string;
  type: EElementSettings;
  options: IOption[];
}
