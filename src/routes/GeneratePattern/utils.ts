interface ICalcParams {
  count: number;
  size: string;
}

export const calcColumns = ({ count, size }: ICalcParams): string => {
  const columns = [];
  for (let i = 0; i < count; i++) {
    columns.push(size);
  }
  return columns.join(' ');
};
