import React from 'react';
import PropTypes from 'prop-types';

const ConfirmAction = props => {
    return (
        <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this timer?</p>
            <button onClick={props.onClose}>No</button>
            <button
                onClick={() => {
                    props.deleteTimer(props.timerId);
                    props.onClose();
                }}
            >
                Yes, Delete it!
            </button>
        </div>
    )
};

ConfirmAction.propTypes = {
    onClose: PropTypes.func.isRequired,
    deleteTimer: PropTypes.func.isRequired,
    timerId: PropTypes.string.isRequired
};

export default ConfirmAction;