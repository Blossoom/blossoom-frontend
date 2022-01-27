import React from 'react';
import './EventCard.css'
import { Card, Col, Row, Container } from 'react-bootstrap'
import thumbnail from './../../../assets/thumbnail.jpeg'
function EventCard({EventDate, EventTitle, Location, NoAttendees}){
    return(
    <Card className="d-flex my-1 flex-row col-12">
        <Card.Img src={thumbnail} style={{height: '15rem', width: '15rem'}} />
        <Card.Body>
        <Card.Title>{EventTitle}</Card.Title>
            <Card.Title>{Location}</Card.Title><Card.Text>{EventDate}</Card.Text>
            <Card.Text> {NoAttendees} Attendees</Card.Text>
            <button>Like</button><button>Attend</button>
        </Card.Body>
        <Card.Text>Culpa velit laboris nisi magna nostrud nulla quis enim minim voluptate tempor aliquip duis. Fugiat deserunt et pariatur ex ullamco aliquip magna laboris amet veniam proident est. Id exercitation amet in sunt irure incididunt aliquip culpa sunt deserunt. Sint ut ipsum elit aliqua eu excepteur esse excepteur voluptate laborum officia sunt amet est. Minim quis laborum fugiat non officia eu in eiusmod veniam velit ex in officia.</Card.Text>
    </Card>)
}

export default EventCard;