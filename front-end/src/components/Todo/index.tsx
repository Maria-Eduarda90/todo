import MyIcon from '../../assets/icon-cross.svg'
import * as C from './style';
import api from '../../services/api';
import { useEffect, useState } from 'react';

interface todoProps {
    id: string;
    description: string;
}

export const Todo = () => {
    const [ todos, setTodo ] = useState<todoProps[]>([]);

    useEffect(() => {
        api.get('/todo').then(response => {
            console.log(response.data);
        })
    }, []);
    
    return(
        <C.container>
            {todos.map(todo => {
                return(
                    <>
                        <div className="container">
                            
                            <p>{todo.description}</p>
                            <button>
                                <img src={MyIcon} alt="X" />
                            </button>
                        </div>
                        <div className="container">
                            
                            <p>{todo.description}</p>
                            <button>
                                <img src={MyIcon} alt="X" />
                            </button>
                        </div>
                    </>
                )
            })}
        </C.container>
    );
}