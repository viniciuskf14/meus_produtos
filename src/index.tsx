import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },
 
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'teste api title',
          content: 'conteudo api teste',
          
        },
        {
          id: 2,
          title: 'teste api title a',
          content: 'conteudo api teste bbbb' ,
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';
      
    this.get('/transactions', () => {
      return this.schema.all('transactions') // retorna todas as transações 
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return data;
    }) 
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);