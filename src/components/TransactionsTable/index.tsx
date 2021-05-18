import {useEffect, useState} from 'react';
import { api } from '../../services/api';
import {Container} from './styles'



interface Transaction{
      id: number;
      title: string;
      content: string;
}


export function TransactionsTable(){
   
    useEffect (() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
   

   return(
        <Container>
          <table>
          <thead>
                  <th>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                  </th>
           </thead>

              <tbody>
                 
                    <td></td>
                    <td></td>
                    <td></td>
                    
                
              </tbody>
          </table>
        </Container>
    )
}

export default TransactionsTable

