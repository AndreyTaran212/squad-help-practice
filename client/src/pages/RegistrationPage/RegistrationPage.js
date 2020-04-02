import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import articles from '../../articles'
import Article from "../../components/Article/Article";

const RegistrationPage = (props) => {
    props.clearError();

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to={'/'}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <div className={styles.headerFormContainer}>
                    <h2>
                        CREATE AN ACCOUNT
                    </h2>
                    <h4>
                        We always keep your name and email address private.
                    </h4>
                </div>
                <RegistrationForm/>
            </div>
            <div className={styles.footer}>
                <div className={styles.articlesMainContainer}>
                    <div className={styles.ColumnContainer}>
                        <Article header={articles.firstColumn.header} article={articles.firstColumn.text}
                                 className={styles}/>
                        <Article header={articles.secondColumn.header} article={articles.secondColumn.text}
                                 className={styles}/>
                        <Article header={articles.thirdColumn.header} article={articles.thirdColumn.text}
                                 className={styles}/>
                        <Article header={articles.fourthColumn.header} article={articles.fourthColumn.text}
                                 className={styles}/>
                        <Article header={articles.fifthColumn.header} article={articles.fifthColumn.text}
                                 className={styles}/>
                        <Article header={articles.sixthColumn.header} article={articles.sixthColumn.text}
                                 className={styles}/>
                        <Article header={articles.seventhColumn.header} article={articles.seventhColumn.text}
                                 className={styles}/>
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);