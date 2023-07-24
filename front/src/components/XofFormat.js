import React from 'react';

const numberToXOF = (number) => {
  if (!number) return;

  // Format the number to have two decimal places and use a space as the thousands separator
  const formatted = number.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).replace(/,/g, " ");

  return formatted;
};

const XofFormat = ({value, printCurrency=true}) => <span>{ printCurrency ? "FCFA" : ""} {numberToXOF(value)}</span>;

export default XofFormat;
