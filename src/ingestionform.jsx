import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import asyncValidate from "./asyncValidate";
import validate from "./validate";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <Select
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const AWSS3FileDetails = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="awsS3path"
          component={renderTextField}
          label="AWS S3 Path"
        />
      </div>
      <div>
        <Field
          name="AWSAccessKey"
          component={renderTextField}
          label="AWS Access Key"
        />
      </div>
      <div>
        <Field
          name="AWSSecretKey"
          component={renderTextField}
          label="AWS Secret Key"
        />
      </div>
      <div>
        <Field
          name="AWSSessionKey"
          component={renderTextField}
          label="AWS Session Key"
        />
      </div>
      <div>
        <Field name="fileType" component={renderSelectField} label="File Type">
          <MenuItem value="CSV" primaryText="CSV" />
          <MenuItem value="CSVBz2" primaryText="CSV.BZ2" />
          <MenuItem value="TEXT" primaryText="Text" />
          <MenuItem value="JSON" primaryText="Json" />
          <MenuItem value="Parquet" primaryText="Parquet" />
          <MenuItem value="Avro" primaryText="Avro" />
        </Field>
      </div>
      <div>
        <Field name="header" component={renderRadioGroup}>
          <Radio value="true" label="true" />
          <Radio value="false" label="false" />
        </Field>
      </div>
      <div>
        <Field name="delimiter" component={renderTextField} label="Delimter" />
      </div>
      <div>
        <Field
          name="option"
          component={renderTextField}
          label="Options (in comma seperated key:value format)"
          multiLine={true}
          rows={2}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "AWSS3FileDetails", // a unique identifier for this form
  validate,
  asyncValidate
})(AWSS3FileDetails);
