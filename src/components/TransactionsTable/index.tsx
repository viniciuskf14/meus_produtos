import {useEffect, useState} from 'react';
import { api } from '../../services/api';
import {Container} from './styles'



interface Transaction{
      id: number;
      title: string;
      content: string;
}


export function TransactionsTable(){
   const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect (() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
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
                  {transactions.map(transaction=>(
                 <tr key="id">
                    <td>{transactions.title}</td>
                    <td>{transactions.content}</td>
                    <td></td>
                    </tr>
                ))}
              </tbody>
          </table>
        </Container>
    )
}

export default TransactionsTable

