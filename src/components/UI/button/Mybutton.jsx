import React from 'react';
import classes from './MyButton.module.scss'

const Mybutton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default Mybutton;