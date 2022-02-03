import React, { useState } from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import EditorJS from '@editorjs/editorjs';
import header from '@editorjs/header';
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote'
import './CreateBlog.css'
import axios from 'axios';
import reduxStore from '../../reduxStore/reduxStore';
import { useDispatch } from 'react-redux';




function CreateBlog() {
    const [state, setState] = useState('Submit');
    const [textState, setText] = useState('')
    const dispatch = useDispatch();

    const editor = new EditorJS(
      {
          holder: 'BlogEditor',
          tools: {
              header:
              {
                  class: header,
                  config: {
                      levels: [1,2,3,4],
                      defaultlevel: 1,
                      }

              },
              list: {
                class: List,
                inlineToolbar: true,
              },
              embed: Embed,
              quote: {
                class: Quote,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+O',
                config: {
                  quotePlaceholder: 'Enter a quote',
                  captionPlaceholder: 'Quote\'s author',
                },
              },


              image: {
                class: ImageTool,
              },

                }
            });
  const blogSave = () => {
    
        editor.isReady.then(() => {
          editor.save().then((outputData) => {
            dispatch( {type: "INSERT_BLOCKS", payload: {Blocks: outputData} })
            setState('Publish')
          }).catch((error) => {
            console.log('Saving failed: ', error)
          })
        }).catch((reason) => {
          console.log(`Editor.js initialization failed because of ${reason}`)
        });
      }
    
const people = [
  'Digital_Painting',
  'vector_art',
  'collage_art',
  'sketch',
  'character_design',
];
function TagSelector() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  


  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);






  
  const tagHandler = e => {
    
    dispatch( {type: "INSERT_TAGS", payload: { Tags: e.target.innerText } } )
    e.target.remove();
  }




  return (
    <div className="TagSelector">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li onClick={ tagHandler}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

        
  const handleTitle = event => {
        dispatch( {type: "INSERT_TITLE", payload: {Title: event.target.value} } )
      }
      const access_token = localStorage.getItem('access_token')

      const submitBlog = () => {

        axios.post('https://blossoom-api.herokuapp.com/api/v1/articles/', {
          title: reduxStore.getState().CreateBlog.Title,
          content: JSON.stringify(reduxStore.getState().CreateBlog.Blocks),
          tags: reduxStore.getState().CreateBlog.Tags,
          preview_content: reduxStore.getState().CreateBlog.Description,
        }, {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        }).then(function (response) {
          console.log(response);
        }
        )
        .catch(function (error) {
          console.log(error);
        }
        );

        window.location.replace('/profile/' + localStorage.getItem('profile_id'))
    
      }

      const DescriptionHandler = event => {
        dispatch({type: 'INSERT_DESCRIPTION', payload: {Description: event.target.value}})
      }

      return (
      <Container fluid className='bg-white'>


            {state === "Submit" ? 
            (            <Container className='bg-white'>
              <Row>
                    <input
                        className='col-4 mx-auto my-4 px-6 my-2 border-light'
                        
                        type="text"
                        id='TitleInput'
                        placeholder='insert blog Title'
  
                        onChange={handleTitle}
                        name="Blog Title"
                    />
                    {/* <input type='submit' onClick={ () =>  /> */}
              </Row>
              <Container className='bg-white'>
                        <div id='BlogEditor'>
              
                        </div>
            </Container>
          <Button className='mx-auto col-4 my-3'
            onClick={blogSave}>Submit</Button>
            </Container>):(
              <Container>
                <TagSelector />
                <Row>
                      <form>
                           <label className='col-12' htmlFor="img">Select image:</label>
                           <input className='col-12' type="file" id="img" name="img" accept="image/*" />
                          <label className='col-12' htmlFor='Description'>Insert a Description for your post </label>
                          <textarea className='col-12' minLength="20" id="Description" cols="30" rows="7" onChange={DescriptionHandler} placeholder="Your Description"  required></textarea>
                      </form>
                                
                      <Button onClick={submitBlog} className='mx-auto col-4 my-3'>{state}</Button>
              </Row>
              </Container>
            )}

        </Container>
    )
}



export default CreateBlog
