import React, { useEffect } from 'react';
import styles from './RecoverForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInputs/FormInputs';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { createRecoverPasswordAction } from '../../actions/actionCreator';

const RecoverForm = props => {

  const formInputClassNames = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    valid: styles.valid,
    notValid: styles.notValid,
  };

  const { handleSubmit, submitting, passwordForm, request, reset } = props;
  const sendData = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    request(data);
    reset();
  };

  useEffect(() => {
    passwordForm && toast(passwordForm);
  }, [passwordForm]);

  return (
    <form onSubmit={handleSubmit(sendData)} className={styles.recoverForm}>
      <Field
        name='email'
        className={formInputClassNames}
        component={FormInput}
        type='text'
        label='Email Address'
      />
      <Field
        name='password'
        className={formInputClassNames}
        component={FormInput}
        type='password'
        label='password'
      />
      <button type='submit' disabled={submitting} className={styles.submitContainer}>
        <span className={styles.inscription}>CHANGE PASSWORD</span>
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  request: (data) => dispatch(createRecoverPasswordAction(data)),
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'recoverPassword',
  validate: customValidator(Schems.LoginSchem),
})(RecoverForm));
