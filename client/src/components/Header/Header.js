import React from 'react';
import styles from './Header.module.sass';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import CONSTANTS from '../../constants';
import {getUserAction, clearUserStore, headerRequest} from '../../actions/actionCreator';


class Header extends React.Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.getUser();
        }
    }

    logOut = () => {
        localStorage.clear();
        this.props.clearUserStore();
        this.props.history.replace('/login');
    };

    startContests = () => {
        this.props.history.push('/startContest');
    };

    startDashboard = () => {
        this.props.history.push('/dashboard');
    };

    renderHeaderButton = () => {
        if (this.props.data && this.props.data.role === CONSTANTS.CREATOR) {
            return (
                <div className={styles.startContestBtn} onClick={this.startDashboard}>Dashboard</div>
            )
        }
        return (
            <div className={styles.startContestBtn} onClick={this.startContests}>Start Contest</div>
        )
    };

    renderLoginButtons = () => {
        if (this.props.data) {
            return (
                <>
                    <div className={styles.userInfo}>
                        <img
                            src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                            alt='user'/>
                        <span>{`Hi, ${this.props.data.displayName}`}</span>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu'/>
                        <ul>
                            <li><Link to='/dashboard'
                                      style={{textDecoration: 'none'}}><span>View Dashboard</span></Link></li>
                            <li><Link to='/account' style={{textDecoration: 'none'}}><span>My Account</span></Link></li>
                            <li><Link to='http:/www.google.com'
                                      style={{textDecoration: 'none'}}><span>Messages</span></Link></li>
                            <li><Link to='http:/www.google.com' style={{textDecoration: 'none'}}><span>Affiliate Dashboard</span></Link>
                            </li>
                            <li><Link to='/myTransaction'
                                      style={{textDecoration: 'none'}}><span>My Transaction</span></Link></li>
                            <li><span onClick={this.logOut}>Logout</span></li>
                        </ul>
                    </div>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt='email'/>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/login' style={{textDecoration: 'none'}}><span className={styles.btn}>LOGIN</span></Link>
                    <Link to='/registration' style={{textDecoration: 'none'}}><span
                        className={styles.btn}>SIGN UP</span></Link>
                </>
            )
        }
    };

    render() {
        if (this.props.isFetching) {
            return null;
        }
        return (
            <div className={styles.headerContainer}>
                <div className={styles.loginSignnUpHeaders}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <div className={styles.numberContainer}>
                                <i className={'fa fa-phone'}/>
                                <a href={'tel:(877)&nbsp;355-3585'}>(877)&nbsp;355-3585</a>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.userButtonsContainer}>
                                {this.renderLoginButtons()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navContainer}>
                    <div className={styles.row}>
                        <Link to={'/'} className={styles.logoLink}>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}squadhelp-logo-color.jpg`} className={styles.logo}
                                 alt='blue_logo'/>
                        </Link>
                        <div className={styles.leftNav}>
                            <input type="checkbox" id="burgerMenu" hidden/>
                            <div className={styles.nav}>
                                <ul>
                                    <li className={styles.mobileListItem}>
                                        <div>
                                            <i className={'fa fa-phone'}/>
                                            <a href="tel:+8773553585"> (877)&nbsp;355-3585 </ a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>NAME IDEAS</span>
                                            <i className={'fa fa-angle-down'}/>
                                        </div>
                                        <ul>
                                            <li><a href="http://www.google.com">Beauty</a></li>
                                            <li><a href="http://www.google.com">Consulting</a></li>
                                            <li><a href="http://www.google.com">E-Commerce</a></li>
                                            <li><a href="http://www.google.com">Fashion & Clothing</a></li>
                                            <li><a href="http://www.google.com">Finance</a></li>
                                            <li><a href="http://www.google.com">Real Estate</a></li>
                                            <li><a href="http://www.google.com">Tech</a></li>
                                            <li className={styles.last}><a href="http://www.google.com">More
                                                Categories</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <span>CONTESTS</span>
                                            <i className={'fa fa-angle-down'}/>
                                        </div>
                                        <ul>
                                            <li><a href="http://www.google.com">HOW IT WORKS</a></li>
                                            <li><a href="http://www.google.com">PRICING</a></li>
                                            <li><a href="http://www.google.com">AGENCY SERVICE</a></li>
                                            <li><a href="http://www.google.com">ACTIVE CONTESTS</a></li>
                                            <li><a href="http://www.google.com">WINNERS</a></li>
                                            <li><a href="http://www.google.com">LEADERBOARD</a></li>
                                            <li className={styles.last}><a href="http://www.google.com">BECOME A
                                                CREATIVE</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Our Work</span>
                                            <i className={'fa fa-angle-down'}/>
                                        </div>
                                        <ul>
                                            <li><a href="http://www.google.com">NAMES</a></li>
                                            <li><a href="http://www.google.com">TAGLINES</a></li>
                                            <li><a href="http://www.google.com">LOGOS</a></li>
                                            <li className={styles.last}><a href="http://www.google.com">TESTIMONIALS</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Names For Sale</span>
                                            <i className={'fa fa-angle-down'}/>
                                        </div>
                                        <ul>
                                            <li><a href="http://www.google.com">POPULAR NAMES</a></li>
                                            <li><a href="http://www.google.com">SHORT NAMES</a></li>
                                            <li><a href="http://www.google.com">INTRIGUING NAMES</a></li>
                                            <li><a href="http://www.google.com">NAMES BY CATEGORY</a></li>
                                            <li><a href="http://www.google.com">VISUAL NAME SEARCH</a></li>
                                            <li className={styles.last}><a href="http://www.google.com">SELL YOUR
                                                DOMAINS</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Blog</span>
                                            <i className={'fa fa-angle-down'}/>
                                        </div>
                                        <ul>
                                            <li><a href="http://www.google.com">ULTIMATE NAMING GUIDE</a></li>
                                            <li><a href="http://www.google.com">POETIC DEVICES IN BUSINESS NAMING</a>
                                            </li>
                                            <li><a href="http://www.google.com">CROWDED BAR THEORY</a></li>
                                            <li className={styles.last}><a href="http://www.google.com">ALL ARTICLES</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={styles.mobileListItem}>
                                        <div>
                                            <Link to='/login' style={{textDecoration: 'none'}}>
                                                <div
                                                    className={styles.btn}>LOGIN
                                                </div>
                                            </Link>
                                            <div> / </div>
                                            <Link to='/registration' style={{textDecoration: 'none'}}>
                                                <div
                                                    className={styles.btn}>SIGN UP
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {this.renderHeaderButton()}
                            <label htmlFor="burgerMenu">
                                <div className={styles.burgerMenu}>
                                    <div className={styles.line}/>
                                    <div className={styles.line}/>
                                    <div className={styles.line}/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.userStore;
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(headerRequest()),
        clearUserStore: () => dispatch(clearUserStore())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));