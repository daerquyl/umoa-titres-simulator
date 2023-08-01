import React from 'react';

const format = (number) => {
  if(number == 0) return 0;

  if (!number) return;

  let formatted = Number(number.toFixed(4));
  return formatted;
};

const RateFormat = ({value}) => <span>{format(value)} %</span>;

export default RateFormat;
