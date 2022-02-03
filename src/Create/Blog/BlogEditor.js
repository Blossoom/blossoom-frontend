import React, { useState } from 'react';
import {Container, Button, Row} from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import header from '@editorjs/header';
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote'

function BlogEditor() {


  const Save = () => {

    editor.isReady.then(() => {
      editor.save().then((outputData) => {
        dispatch( {type: "INSERT_BLOCKS", payload: {Block: outputData} })
      }).catch((error) => {
        console.log('Saving failed: ', error)
      })
    }).catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`)
    });
  }

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
                        placeholder: 'Insert a Blog title in the first line'}

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




              
    return (
      <Container fluid className='bg-white'>
          <div id='BlogEditor'>

          </div>
      </Container>
    )
}



export default BlogEditor
