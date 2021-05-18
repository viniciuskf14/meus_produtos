import {useEffect, useState} from 'react';
import { api } from '../../services/api';
import {Container} from './styles'



interface Transaction{
      id: number;
      title: string;
      content: string;
}


export function TransactionsTable(){
   const [transactions, setTransactions] = useState<Transaction[]>([]);
   
    useEffect (() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);
   

   return(
        <Container>
          <table>
          <thead>
                  <tr>
                      <th>
                          Titulo
                      </th>
                      <th>
                          Conteudo

                      </th>
                  </tr>
              </thead>

              <tbody>
                {transactions.map(transaction => ( 
                        <tr key="id">
                    <ul>{transaction.title}</ul>
                    <ul>{transaction.content}</ul>
                    </tr>
                    ))}
                    
                
              </tbody>
          </table>
        </Container>
    )
}

export default TransactionsTable

