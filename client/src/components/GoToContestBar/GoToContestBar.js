import React from 'react';
import styles from './GoToContestBar.module.sass';
import {Link} from 'react-router-dom';

const GoToContestBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardBody}>
                <span className={styles.contentContainer}>
                    <span className={styles.leftText}>
                        Ready to get started? Launch a contest and start receiving submissions instantly.
                    </span>
                    <Link to={'/startContest'}>
                        <span className={styles.rightText}>
                        <i className={'far fa-lightbulb mr-1'}/>Start A Contest
                    </span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default GoToContestBar;