import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from './TaskList';

export function PureInboxScreen({error}) {
    if(error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-mesage">
                    <div className="icon-face-sad"/>
                    <div className="title-message">Oh no!</div> 
                    <div className="subtitle-message">Something went wrong</div>                    
                </div>
            </div>
        );
    }

    return  (
        <div className="page lists-show">
            <nav>
                <div className="title-page">
                    <div className="title-wrapper">Taskbox</div>                 
                </div>
            </nav>
            <TaskList/>
        </div>
    );
}


PureInboxScreen.propTypes = {
    error: PropTypes.string
};

PureInboxScreen.defaultProps = {
    error: null
};

export default connect(({error}) => ({error}))(PureInboxScreen);
