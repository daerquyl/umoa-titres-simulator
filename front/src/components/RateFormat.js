import React from 'react';

const format = (number) => {
  if (!number) return;

  return number.toFixed(4);
};

const RateFormat = ({value}) => <span>{format(value)} %</span>;

export default RateFormat;
