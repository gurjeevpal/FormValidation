import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import validate from './validate';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
    <React.Fragment>
        <TextField
        label={label}
        className="inputlabel"
        {...input}
        {...custom}
        />
        <span className="errors">{touched && error}</span>
    </React.Fragment>    
);

const renderRadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
    <React.Fragment>
        <RadioGroup
        {...input}
        {...rest}
        value={input.value}
        onChange={(event, value) => input.onChange(value)}
        />
        <span className="errors">{touched && error}</span>
    </React.Fragment>    
);

const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
) => (
    <React.Fragment>
        <Select
            labelId={label}
            className="dropdown"
            {...input}
            onChange={(event) => input.onChange(event.target.value)}
            children={children}
            {...custom}
        />
        <span className="errors">{touched && error}</span>
    </React.Fragment>    
);

const TellUsForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div class="myapp">
            <h3>A Simple Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="row custom-bar">
                    <div className="col-md-4">
                        <label className="name"> Name : </label>
                    </div>
                    <div className="col-md-6">
                        <Field name="name" component={renderTextField} label="Name" />
                    </div>
                </div>

                <div className="row custom-bar">
                    <div className="col-md-4">
                        <label className="positionLabel"> City : </label>
                    </div>
                    <div className="col-md-6">
                        <Field
                            name="city"
                            component={renderSelectField}
                            label="City"
                        >
                            <MenuItem value="Brampton">Brampton</MenuItem>
                            <MenuItem value="Missisuaga">Missisuaga</MenuItem>
                            <MenuItem value="Toronto">Toronto</MenuItem>
                            <MenuItem value="Oakville">Oakville</MenuItem>
                            <MenuItem value="Milton">Milton</MenuItem>
                            <MenuItem value="Hamilton">Hamilton</MenuItem>
                        </Field>
                    </div>
                </div>

                <div className="row custom-bar">
                    <div className="col-md-4">
                        <label className="positionLabel">Email:</label>
                    </div>
                    <div className="col-md-6">
                        <Field name="email" component={renderTextField} label="Email" />
                    </div>
                </div>

                <div className="row custom-bar">
                    <div className="col-md-6"> 
                        <label className="notice">Notifications:</label>
                    </div>
                    <div className="col-md-1">
                        <Field name="notifications" component={renderRadioGroup}> 
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes!" labelPlacement="end"/>
                            <FormControlLabel value="No" control={<Radio />} label="No." labelPlacement="end"/>
                        </Field>
                    </div>
                </div>

                <div className="row custom-bar">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <button type="submit" className="button" disabled={pristine || submitting}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
  };
 
export default reduxForm({
    form: 'TellUsForm',
    validate,
})(TellUsForm); 