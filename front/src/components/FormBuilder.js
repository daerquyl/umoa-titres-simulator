import React from "react";
import { NumericFormat } from 'react-number-format';

export const FormBuilder = {
  buildSelect: (field) => (
    <select
      className="form-control form-control-sm"
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      disabled={field.disabled}
    >
      <option value="">-</option>
      {field.options.getList().map(option => (
        <option
          value={field.options.getValue(option)}
          key={`${field.name}-${field.options.getValue(option)}`}
        >
          {field.options.getLabel(option)}
        </option>
      ))}
    </select>
  ),

  buildInput: (field) => (
    <input
      className="form-control form-control-sm"
      type={field.type}
      step={field.step}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      disabled={field.disabled}
    />
  ),

  buildNumberFormat: (field) => (
    <NumericFormat
      className="form-control form-control-sm"
      thousandSeparator=" "
      decimalSeparator="."
      decimalScale={0}
      fixedDecimalScale={true}
      allowNegative={false}
      prefix=""
      suffix=" CFA"
      value={field.value}
      onValueChange={values => {
        field.onChange({ target: { value: values.value, name: field.name } });
       }}
      onBlur={field.onBlur}
      name={field.name}
      disabled={field.disabled}
    />
  ),

  build: (field) => (field.options 
    ? FormBuilder.buildSelect(field) 
    : field.formatNumber 
      ? FormBuilder.buildNumberFormat(field)
      : FormBuilder.buildInput(field)),

  buildFieldGroup: (field, index) => (
    <div className="form-group row" key={`${field.name}-${index}`}>
      <label className="col-md-8 col-form-label">{field.label}</label>
      <div className="col-md-4 col-sm-12">
        {FormBuilder.build(field)}
      </div>
    </div>
  )
};
