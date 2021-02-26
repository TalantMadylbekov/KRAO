import React from 'react';
import { Icon } from 'react-icons-kit'
import {calendar} from 'react-icons-kit/ionicons/calendar'
import '../css/activity.css'



const Activity = () => {
    return (
        <div className="flex">
            <div className="flex">
                <div className="icon" style={{color: '#ffffff'}}>
                    <Icon size={64} icon={calendar}/>
                </div>
                <h3>МЕРОПРИЯТИЯ</h3>
            </div>
        </div>
           

    );
};

export default Activity;