import React from 'react';


const AgreeTermOfServiceInput = ({label, id,input, type, className, meta: {touched, error}}) => {
    return (
        <div>
            <div className={className.container}>
                <input {...input} placeholder={label} id={id} type={type}/>
                <label htmlFor={id}>By clicking this checkbox, you agree to our <a
                    href="https://www.google.com" target='_blank'>Terms of Service.</a></label>
            </div>
            {touched && (error && <span className={className.warning}>{error}</span>)}
        </div>

    )
};

export default AgreeTermOfServiceInput;