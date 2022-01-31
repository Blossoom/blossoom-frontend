import React from 'react';
import collage from './../../assets/collage.jpg';
import axios from 'axios';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
const PickTas = () => {

  const access_token = localStorage.getItem('access_token')

  const navigate = useNavigate()

  const [followedTopics, setFollowedTopics] = React.useState([]);
  const [cardsState, setCardsState] = React.useState([
    {
      title: 'Digital Painting',
      name: 'Digital_Painting',
      description: 'Digital Painting is the process of painting with a computer',
      image: collage,
      isFollowed: false,
    },
    {
      title: 'Vector art',
      name: 'vector_art',
      description: 'Illustration is so fun',
      image: collage,
      isFollowed: false,
    },
    {
      title: 'Collage Art',
      name: 'collage_art',
      description: 'Collage is fun and games and all',
      image: collage,
      isFollowed: false,
    },
    {

      title: 'Animation',
      name: 'animation',
      description: 'not only japanese animation please',
      image: collage,
      isFollowed: false,
    },
    {

      title: 'Sketch',
      name: 'sketch',
      description: 'Sketch to inspire you create something new',
      image: collage,
      isFollowed: false,
    },
    {

      title: 'Character Design',
      name: 'character_design',
      description: 'Character Design is the art of designing characters',
      image: collage,
      isFollowed: false,
    }
  ]);

  
  
  
  function handleClick(e) { 
    setCardsState(cardsState.map(card => {
      if (e.target.name === card.name) {
        card.isFollowed = !card.isFollowed;
        if (card.isFollowed) {
          setFollowedTopics(followedTopics.concat(card.name));
          // send a get request to /tags/{name}/follow/ with the card.name

          axios.get(`https://blossoom-api.herokuapp.com/api/v1/tags/${card.name}/follow/`, {
            headers: {
              'Authorization': `Bearer ${access_token}`
            }
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          setFollowedTopics(followedTopics.filter(topic => topic !== card.name));
        }
      }
      return card;
    }));
  }





  

  return (
            <Container fluid >
            <h2 className='text-center'>Pick Tags</h2>
            <Container>
                <Row className='bg-light'>
                      <div className=" d-flex flex-column mx-auto col-md-12 login-form-1 mt-3">
                            <h3 className='mb-3'>Tags</h3>
                            <Row className='justify-content-around'>
                            {
                              cardsState.map((card, index) => {
                                return (
                                    <Card key={index} className='my-2 mx-auto' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={card.image} />
                                    <Card.Body>
                                      <Card.Title>{card.title}</Card.Title>
                                      <Card.Text>
                                        {card.description}
                                      </Card.Text>
                                        {card.isFollowed ? (<Button name={card.name} onClick={handleClick}>  unfollow </Button>):(<Button name={card.name} onClick={handleClick}> follow </Button>)}
                                    </Card.Body>          
                                  </Card>
                                )
                              })
                            }

                                  
                                      



                            
                                                       

                            </Row>                   
                        </div>
                  </Row>
                  <Button onClick={() => {navigate('/')}} className='col-3 my-4'>Submit</Button>

          </Container>
        </Container>
  );
};

export default PickTas;
