// SinglePageArtwork is the component that renders artwork post data in one page.
// It is a single post component.
// it takes id as url parameter and uses it to fetch the post from the database.
// it then renders the post in a card.
// it also renders the comments in a card.
// it also renders the comment form.
// it also renders the edit and delete buttons.
// it also renders the upvote and downvote buttons.
// it also renders the save button.
// it also renders the edit and delete buttons.
// it also renders the save button.

import React from 'react';
import {Container, Row, Card, Button, Image, Col} from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from "axios";
import arrowup from './../../assets/icons/svg/fi-rr-angle-small-up.svg'
import arrowdown from './../../assets/icons/svg/fi-rr-angle-small-down.svg'
import './SinglePageArtwork.css'

const SinglePageArtwork = () => {
let {Postid} = useParams();


    let [ArtworkData, setArtworkData] = React.useState({})
    let [Comments, setComments] = React.useState([])
    let [CommentForm, setCommentForm] = React.useState(false)
    let [CommentFormData, setCommentFormData] = React.useState({})
    let [votes, setVotes] = React.useState()
    let [saved, setSaved] = React.useState(false)
    let [edit, setEdit] = React.useState(false)
    let [deletePost, setDeletePost] = React.useState(false)
    let [userInfo, setUserInfo] = React.useState({})
    


    

    let access_token = localStorage.getItem('access_token')


    axios.interceptors.request.use(
        config => {
            config.headers.Authorization = `Bearer ${access_token}`
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )
    axios.interceptors.response.use(
        response => {
            return response
        },
        error => {
            if (error.response.status === 401){
                const refresh_token = localStorage.getItem('refresh_token')
                const refresh_token_payload = {
                    refresh: refresh_token
                }
                axios.post('https://blossoom-api.herokuapp.com/api/v1/auth/login/refresh/', refresh_token_payload)
                .then(res => {
                    localStorage.setItem('access_token', res.data.access)

                    axios.interceptors.request.use(
                        config => {
                            const token = localStorage.getItem('access_token')
                            config.headers.Authorization = `Bearer ${token}`
                            return config
                        },
                        error => {
                            return Promise.reject(error)
                        }
                    )
                    axios.interceptors.response.use(
                        response => {
                            return response
                        },
                        error => {
                            return Promise.reject(error)
                        }
                    )
                })
            }
        }
    )















    React.useEffect(() => {
        axios.get(`https://blossoom-api.herokuapp.com/api/v1/artworks/${Postid}`)
        .then(res => {
            setArtworkData(res.data)
            setVotes(res.data.votes.total_votes)
            setUserInfo(res.data.user)

        })

        axios.get(`https://blossoom-api.herokuapp.com/api/v1/artworks/${Postid}/comments`)
        .then(res => {
            setComments(res.data)
            console.log('coucoulavie')
            console.log(Comments)
        }
        )

    }, [])



    const handleCommentForm = () => {
        setCommentForm(!CommentForm)
    }

    const handleCommentFormData = (e) => {
        setCommentFormData({...CommentFormData, [e.target.name]: e.target.value})
    }
    
    const handleCommentSubmit = (e) => {

        // FormData username

        axios.post(`https://blossoom-api.herokuapp.com/api/v1/artworks/${Postid}/comments/`, {content: CommentFormData.Comment},
        {headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }}
        )
        .then(res => {
            setComments(res.data.Comments)
            setCommentFormData({})
            window.location.reload()

        })
        .catch(err => {
            console.log(err)
        })
    }

    // const handleCommentDelete = (e) => {
    //     axios.delete(`/api/artwork/${Postid}/comments/${e.target.id}`)
    //     .then(res => {
    //         setComments(res.data.Comments)
    //     })
    // }

    // const handleCommentEdit = (e) => {
    //     axios.get(`/api/artwork/${Postid}/comments/${e.target.id}`)
    //     .then(res => {
    //         setCommentFormData(res.data)
    //         setCommentForm(!CommentForm)
    //     })
    // }

    // const handleCommentEditSubmit = (e) => {
    //     e.preventDefault()
    //     axios.put(`/api/artwork/${Postid}/comments/${CommentFormData.CommentId}`, CommentFormData)
    //     .then(res => {
    //         setComments(res.data.Comments)
    //         setCommentFormData({})
    //     })
    // }

    const handleUpvote = (e) => {

        axios.post(`https://blossoom-api.herokuapp.com/api/v1/artworks/${Postid}/votes/`,
        {
            value: 'upvote'
        },
        {
            headers:
            {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        ).then(res => console.log('done!'))
        console.log(e)
                
    }

    const handleDownvote = (e) => {
        axios.post(`https://blossoom-api.herokuapp.com/api/v1/artworks/${Postid}/votes/`,
        {
            value: 'downvote'
        },
        {
            headers:
            {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        ).then(res => console.log('done!'))
        console.log('done 2!')
                
    }

    const handleSave = (e) => {
        axios.get(`https://blossoom-api.herokuapp.com/api/v1/artworks/${Postid}/save/`,
        {
            headers:
            {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(() => {
            setSaved(true)
        })
    }

    const handleDelete = (e) => {
        axios.delete(`/api/artwork/${Postid}`)
        .then(res => {
            setArtworkData(res.data)
        })
    }

    const handleEdit = (e) => {
        axios.get(`/api/artwork/${Postid}`)
        .then(res => {
            setArtworkData(res.data)
        })
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        axios.put(`/api/artwork/${Postid}`, ArtworkData)
        .then(res => {
            setArtworkData(res.data)
        })
    }

    



  return (
  <Container fluid className='bg-white' >
      <Container className='bg-transparent'>
      <Card>
      <Card.Header>
    <div className='d-flex justify-content-around'>
           
            <div className=' my-auto arrows'>
                <div className='d-flex'>
                <Image  rounded src={userInfo.profile_pic} height={"35px"} width={"35px"}/>
                <h2 className='userInfoname my-auto' >{userInfo.username}</h2>
                </div>

            </div>

            <div className='btn-container my-auto d-flex'>
                    <button className="btn btn-primary mx-1" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-primary mx-1" onClick={handleDelete}>Delete</button>
            </div>
    </div>
    </Card.Header>


            <Card.Body>
            <Card.Title className='text-center'>{ArtworkData.title}</Card.Title>
            <Card.Text className='text-center'>
                {ArtworkData.content}
                { ArtworkData.tags ?  (ArtworkData.tags.map( tag => <small className='text-center text-secondary '> #{tag} </small>)):(console.log(ArtworkData.tags)) }
            </Card.Text>
            <div className='d-flex justify-content-center'>
                <Card.Img src={ArtworkData.mediafile}  className='' style={{maxHeight: '40rem', maxWidth: '50rem'}} alt="artwork" className='img-fluid'/>
            </div>
            </Card.Body>
                
           

  


    
           
               



            <Card.Footer className='d-flex justify-content-center flex-column'>
          <Row>
              <Col className=''>   
                <Button className='mx-1' onClick={handleUpvote} ><img src={arrowup} width={'20px'}/> Upvote </Button>
                <Button onClick={handleDownvote} className='mx-1'><Image src={arrowdown} width={'20px'}/>downVote</Button>
            
                <Button className='mx-1' className="btn btn-primary" onClick={handleCommentForm}>Add Comment</Button>
                <Button onClick={handleSave} className='mx-1'>Save</Button>
                </Col>
            </Row>
            {CommentForm ? <form onClick={handleCommentSubmit}>
                <div className="form-group">
                   
                    <label>Comment</label>
                    <textarea className="form-control" name="Comment" onChange={handleCommentFormData} value={CommentFormData.Comment}></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form> : null}
            <span><small>votes <small className='text-muted'>{votes === -1 ? ('0'):(votes)}</small></small></span>
            {Comments ? (Comments.map(comment => <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{comment.user.username}</h5>
                    <p className="card-text">{comment.content}</p>

                    <button className="btn btn-primary mx-1" id={comment.CommentId}>Edit</button>
                    <button className="btn btn-primary"  id={comment.CommentId}>Delete</button>
                </div>
            </div>) ):(<div>No Comments</div>)}
            </Card.Footer>

    </Card>
    </Container>
  </Container>
  );
};

export default SinglePageArtwork;
