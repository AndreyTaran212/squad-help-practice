import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import styles from './EventAlert.module.sass';
import moment from 'moment';
import {Link} from 'react-router-dom';

const EventAlert = (props) => {

    const {timer} = props;
    const [now, setNow] = useState(moment());

    useEffect(() => {
        const delay = setInterval(() => {
            setNow(moment());
        }, 60 * 60 * 1000);

        return () => {
            clearInterval(delay);
        }
    });

    const expiringTimer = timer.reduce((res, timer) => {
        if (moment(timer.date).diff(now, 'd') <= timer.reminder) {
            res++;
        }
        return res;
    }, 0);

    return (
        <li><Link to='/eventPage'><span>My Events</span>{expiringTimer > 0 &&
        <div className={styles.alert}>{expiringTimer}</div>}</Link></li>
    )
};

const mapStateToProps = (state) => {
    return state.timer
};

export default connect(mapStateToProps,)(EventAlert);