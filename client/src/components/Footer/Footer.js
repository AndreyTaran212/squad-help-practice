import React, {Component} from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';
import {Icon} from '@iconify/react';
import scTwitter from '@iconify/icons-ei/sc-twitter';
import scFacebook from '@iconify/icons-ei/sc-facebook';


class Footer extends Component {

    topFooterItemsRender = (item) => {
        return (
            <div key={item}>
                {item.map(i => <a key={i} href="#">{i}</a>)}
            </div>
        );
    };

    topFooterRender() {
        return CONSTANTS.featuredCategories.map(item => this.topFooterItemsRender(item))
    };

    render() {
        return (
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div>
                        <div>
                            <h4>
                                SQUADHELP
                            </h4>
                            <a href={'#'}>About</a>
                            <a href={'#'}>Contact</a>
                            <a href={'#'}>Testimonials</a>
                            <a href={'#'}>Our Work</a>
                        </div>
                        <div>
                            <h4>
                                OUR SERVICES
                            </h4>
                            <a href={'#'}> Naming</a>
                            <a href={'#'}> Logo Design</a>
                            <a href={'#'}> Taglines</a>
                            <a href={'#'}> Business Names For Sale</a>
                            <a href={'#'}> Audience Testing</a>
                            <a href={'#'}> Trademark Research & Filing</a>
                            <a href={'#'}> Managed Agency Service</a>
                        </div>
                        <div>
                            <h4>
                                RESOURCES
                            </h4>
                            <a href={'#'}> How It Works</a>
                            <a href={'#'}> Become a Creative</a>
                            <a href={'#'}> Discussion Forum</a>
                            <a href={'#'}> Blog</a>
                            <a href={'#'}> Download eBook</a>
                            <a href={'#'}> Pricing</a>
                            <a href={'#'}> Help & FAQs</a>
                        </div>
                        <div>
                            <div>
                                <h4>
                                    IMPORTANT GUIDELINES
                                </h4>
                                <a href={'#'}> Tips For Contest Holders</a>
                                <a href={'#'}> Tips For Contestants</a>
                            </div>
                            <div>
                                <h4>
                                    LEGAL
                                </h4>
                                <a href={'#'}> Terms of Service</a>
                                <a href={'#'}> Privacy Policy</a>
                                <a href={'#'}> Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>
                            FEATURED CATEGORIES
                        </h1>
                    </div>
                    <div>
                        {this.topFooterRender()}
                    </div>
                    <div className={styles.footerLink}>
                        <a href="https://www.shopperapproved.com/reviews/squadhelp.com/" rel="nofollow"
                           target="shopperapproved">
                            squadhelp.com has a Shopper Approved rating of 4.9/5 based on 2684 ratings and reviews.
                        </a>
                    </div>
                </div>
                <div className={styles.footerBot}>
                    <div className={styles.footerRow}>
                        <div>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}footer-logo.png`} alt="squadhelp-logo"
                                 className={styles.footerLogo}/>
                            <div>
                                Copyright © 2017 Squadhelp Inc
                            </div>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/squadhelpinc">
                                <Icon icon={scFacebook} className={styles.footerIcon}/>
                            </a>
                            <a href="https://twitter.com/squadhelp">
                                <Icon icon={scTwitter} className={styles.footerIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
