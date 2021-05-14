import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer} from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api'
      
    this.get('/swagger', () => {
      return [
        {
          "guid": "string",
          "refId": "string",
          "title": "string",
          "description": "string",
          "situation": "uncompleted"
        }
      ]
    })
    
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


