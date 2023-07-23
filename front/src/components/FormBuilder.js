import React from "react";

export const FormBuilder = {
  buildSelect: (field) => (
    <select
      className="form-control form-control-sm"
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
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
    />
  ),

  build: (field) => (field.options ? FormBuilder.buildSelect(field) : FormBuilder.buildInput(field)),

  buildFieldGroup: (field, index) => (
    <div className="form-group row" key={`${field.name}-${index}`}>
      <label className="col-md-8 col-form-label">{field.label}</label>
      <div className="col-md-4 col-sm-12">
        {FormBuilder.build(field)}
      </div>
    </div>
  )
};
