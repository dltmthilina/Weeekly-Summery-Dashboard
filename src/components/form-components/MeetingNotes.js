import React,{useState} from 'react';

import { useDispatch } from 'react-redux';
import { addFormDataActions } from '../../store/formSlice';

const MeetingNotes = () => {

    const dispatch = useDispatch();
    const [meetingNote, setMeetingNote]= useState('');

    const inputHandler=(e)=>{
        setMeetingNote(e.target.value)
    }

    const dispatchHandler=(e)=>{
        if(e.keyCode === 13){
           meetingNote && dispatch(addFormDataActions.addMeetingNotes(meetingNote))
        }
    }

    return (
        <div>
            <div>
                <h3>Meeting Notes</h3>
            </div>
            <div>
                <textarea name='notes' rows="5" cols="40" onChange={inputHandler} onKeyDown={dispatchHandler}/>
            </div>
            
        </div>
    );
}

export default MeetingNotes;
