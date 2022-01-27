import React from 'react';
import EventCard from './../Event/EventCard'


function EventBody(){
    return(
    <div className='container'>
        <div className='row'>
            <EventCard EventDate='12/1/22' EventTitle='Test' Location='Tunis' NoAttendees={13}/>
            <EventCard EventDate='14/55/62' EventTitle='Test 1' Location='FiFransa' NoAttendees={143}/>
            <EventCard EventDate='11/12/23' EventTitle='Test 2' Location='Fdar' NoAttendees={103}/>
        </div>
    </div>
    )
}

export default EventBody;