import React from 'react';
import styles from './GoToContestBar.module.sass';
import {Link} from 'react-router-dom';

const GoToContestBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardBody}>
                <div className={styles.contentContainer}>
                    <div className={styles.leftText}>
                        Ready to get started? Launch a contest and start receiving submissions instantly.
                    </div>
                    <Link to={'/startContest'}>
                        <div className={styles.rightText}>
                        <i className={'far fa-lightbulb mr-1'}/>Start A Contest
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GoToContestBar;