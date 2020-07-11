import React from 'react';
import RecoverForm from '../../components/RecoverForm/RecoverForm';
import styles from './RecoverPassword.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updatePassword,
  createClearPasswordAction,
} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Error from '../../components/Error/Error';
import { toast } from 'react-toastify';
import queryString from 'query-string';
import SuccessRecover from '../../components/SucccessRecover/SuccessRecover';

const RecoverPassword = (props) => {
  const { authClear, isValid, passwordRecover: {isFetching, error, data, passwordForm}, history } = props;
  const { token } = queryString.parse(window.location.search);
  console.log(token);
  const clearFields = () => authClear();
  const toastify = () => {
    toast.success('Please go to your e-mail and confirm changes', {
      position: 'top-center',
      autoClose: 10000,
      closeOnClick: true,
    });
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.headerSignUpPage}>
          <Link to='/'>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
          </Link>
          <div className={styles.linkLoginContainer}>
            <Link to='/' style={{ textDecoration: 'none' }}><span>Homepage</span></Link>
          </div>
        </div>
        <div className={styles.loginFormContainer}>
          {error && <Error data={error.data} status={error.status} clearError={clearFields}/>}
          {token ? <SuccessRecover token={token}
                                   history={history}
                                   recoverPassword={props.updatePassword}
                                   isFetching={isFetching}
                                   error={error}
                                   data={data}/>
            : <>
              <h2>CHANGE PASSWORD</h2>
              {isValid && toastify()}
              <RecoverForm passwordForm={passwordForm}/>
            </>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { passwordRecover } = state;
  return {passwordRecover};
};

const mapDispatchToProps = (dispatch) => {
  return {
    authClear: () => dispatch(createClearPasswordAction()),
    updatePassword: (token) => dispatch(updatePassword(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
