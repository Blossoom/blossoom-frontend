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
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
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



      const DescriptionHandler = event => {
        dispatch({type: 'INSERT_DESCRIPTION', payload: {Description: event.target.value}})
      }

      return (
      <Container fluid bg='dark'>


            {state === "Submit" ? 
            (            <Container>
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
                      <form action="/action_page.php">
                           <label className='col-12' htmlFor="img">Select image:</label>
                           <input className='col-12' type="file" id="img" name="img" accept="image/*" />
                          <label className='col-12' htmlFor='Description'>Insert a Description for your post </label>
                          <textarea className='col-12' minLength="20" id="Description" cols="30" rows="7" onChange={DescriptionHandler} placeholder="Your Description"  required></textarea>
                      </form>
                                
                      <Link to='/Blog/post' ><Button className='mx-auto col-4 my-3'>{state}</Button></Link>
              </Row>
              </Container>
            )}

        </Container>
    )
}



export default CreateBlog
