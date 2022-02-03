import axios from 'axios';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';

// TagsBody will render tags from https://blossoom-api.herokuapp.com/api/v1/tags/
// TagsBody will render a button for each tag that will allow the user to follow the tag
// the follow button updates in the dom onClick if followed or unfollowed


const TagsBody = () => {

    // get all tags from https://blossoom-api.herokuapp.com/api/v1/tags/
    // every tag has a name, description number of posts and a number of followers, and if the current user is following the tag
    // if the user is following the tag, the button will be dark and say "Following"
    // if the user is not following the tag, the button will be light and say "Follow"
    // when the user clicks the follow button, the button will update in the dom to say "Following" and the button will be dark
    // when the user clicks the unfollow button, the button will update in the dom to say "Follow" and the button will be light
    // when the user clicks the follow button, the tag will be added to the user's followed tags
    // when the user clicks the unfollow button, the tag will be removed from the user's followed tags

    const access_token = localStorage.getItem('access_token')



    // const [followedTopics, setFollowedTopics] = React.useState([]);
    const [cardsState, setCardsState] = React.useState([]);

    axios.interceptors.response.use(response => {
        return response;
     }, error => {
       if (error.response.status === 401) {
        setError('Unauthorized, Login to access tags')
       }
       return error;
     });



    const [error, setError] = React.useState('');


    // get tags from https://blossoom-api.herokuapp.com/api/v1/tags/
    
    

    React.useEffect(() => {
        if (access_token) {

            axios.get('https://blossoom-api.herokuapp.com/api/v1/tags/', {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            }).then(res => {
                setCardsState(res.data)

            }).catch(err => {
                setError(err.response.data.error)
            })
        }
        else {
            axios.get('https://blossoom-api.herokuapp.com/api/v1/tags/').then(res => {
                setCardsState(res.data)
            }).catch(err => {
                setError(err.response.data.error)
            })
    
        }
    }, [access_token])



    const handleFollowTag = (tag) => {
        axios.get(`https://blossoom-api.herokuapp.com/api/v1/tags/${tag.target.name}/follow/`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(res => {
            // setFollowedTopics(followedTopics.filter(card => card.id !== tag.target.id))
            setCardsState(cardsState.filter(card => card.name !== tag.target.id))
            console.log(tag.target)
            if (tag.target.className === 'btn btn-light btn-light-outline btn btn-primary') {
                tag.target.className = 'btn btn-dark'
                tag.target.innerText = 'Following'

            }
            else {
                tag.target.className = 'btn btn-light btn-light-outline btn btn-primary'
                tag.target.innerText = 'Follow'
            }
            
            
        }).catch(err => {
            setError(err.response.data.error)
        })
    }


    return (
        <Container className='bg-transparent my-5'>
           <h1>{error ? console.log('error ya zebi') : null}</h1>
            <Row>
                {cardsState.map(card => {
                    return (
                        <Col key={card.name}>
                            <Card className='tagCard' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{card.name}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                    <Card.Text>{card.posts} posts</Card.Text>
                                    <Card.Text>{card.followers} followers</Card.Text>
                                    <Button
                                        className={card.is_following ? 'btn btn-dark' : 'btn btn-light btn-light-outline'}
                                        name={card.name}
                                        onClick={handleFollowTag}
                                    >
                                        {access_token && (card.is_following ? 'Following' : 'Follow')} 
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <div>

                    <Link to='/'>
                        <Button className='mx-auto' variant='btn btn-dark'>
                            Go to Homepage
                        </Button>
                    </Link>

            </div>
    
        </Container>
    )
}


export default TagsBody







  
