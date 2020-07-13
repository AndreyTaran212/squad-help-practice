import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './EventPage.module.sass';
import moment from 'moment';
import {confirmAlert} from 'react-confirm-alert';
import {connect} from 'react-redux';
import {addTimer, deleteTimer} from '../../actions/actionCreator';
import Timer from '../../components/Timer/Timer';
import TimerForm from '../../components/TimerForm/TimerForm';
import ConfirmAction from '../../components/ConfirmAction/ConfirmAction';


function EventPage(props) {

    const {timer, addTimer, deleteTimer} = props;
    moment.fn.toJSON = function () {
        return this.format();
    };
    localStorage.setItem('timer', JSON.stringify(timer));
    const del = e => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (

                    <ConfirmAction deleteTimer={deleteTimer} onClose={onClose} timerId={e.currentTarget.id}/>
                );
            }
        });
    };

    const getTimer = () => {
        const allTimer = [];
        timer.forEach((timer, index) => {
            allTimer.push(
                <div key={index} className={styles.timer} onClick={del} id={timer.id}>
                    <Timer date={timer.date} createdAt={timer.createdAt} name={timer.name}/>
                </div>
            );
        });

        return allTimer
    };

    const handleSubmit = (values) => addTimer({
        name: values.name,
        date: moment(values.date),
        reminder: Number(values.reminder),
        createdAt: new Date(),
        id: new Date()
    });


    return (
        <div className={styles.wrapper}>
            <Header/>
            <h1>My Events</h1>
            <TimerForm onSubmit={handleSubmit}/>
            {
                timer.length && timer.length !== 0 ?
                    getTimer()
                    :
                    <div>No upcoming events</div>
            }
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.timer
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTimer: (data) => dispatch(deleteTimer(data)),
        addTimer: (data) => dispatch(addTimer(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);

