import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {clearUserError} from '../../actions/actionCreator';
import styles from './UpdateUserInfoForm.module.sass';
import ImageUpload from '../InputComponents/ImageUpload/ImageUpload';
import FormInputs from '../FormInputs/FormInputs';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import Error from '../../components/Error/Error';


const UpdateUserInfoForm = (props) => {
    const {handleSubmit, submitting, error, clearUserError} = props;
    return (
        <form onSubmit={handleSubmit} className={styles.updateContainer}>
            {error && <Error data={error.data} status={error.status} clearError={clearUserError}/>}
            <div className={styles.container}>
                <span className={styles.label}>First Name</span>
                <Field
                    name='firstName'
                    component={FormInputs}
                    type='text'
                    label='First Name'
                    className={{
                        container: styles.inputContainer,
                        input: styles.input,
                        warning: styles.error,
                        notValid: styles.notValid
                    }}
                />
            </div>
            <div className={styles.container}>
                <span className={styles.label}>Last Name</span>
                <Field
                    name='lastName'
                    component={FormInputs}
                    type='text'
                    label='LastName'
                    className={{
                        container: styles.inputContainer,
                        input: styles.input,
                        warning: styles.error,
                        notValid: styles.notValid
                    }}
                />
            </div>
            <div className={styles.container}>
                <span className={styles.label}>Display Name</span>
                <Field
                    name='displayName'
                    component={FormInputs}
                    type='text'
                    label='Display Name'
                    className={{
                        container: styles.inputContainer,
                        input: styles.input,
                        warning: styles.error,
                        notValid: styles.notValid
                    }}
                />
            </div>
            <Field
                name='file'
                component={ImageUpload}
                className={{
                    uploadContainer: styles.imageUploadContainer,
                    inputContainer: styles.uploadInputContainer,
                    imgStyle: styles.imgStyle
                }}
            />
            <button type='submit' disabled={submitting}>
                Submit
            </button>
        </form>
    )
};


const mapStateToProps = (state) => {
    const {data, error} = state.userStore;
    return {
        error,
        initialValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            displayName: data.displayName
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearUserError: () => dispatch(clearUserError())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'updateProfile',
    validate: customValidator(Schems.UpdateUserSchema)
})(UpdateUserInfoForm));
