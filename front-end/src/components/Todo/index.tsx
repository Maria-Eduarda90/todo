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
            setTodo(response.data);
            console.log(response.data);
        })
    }, [todos]);
    
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
                    </>
                )
            })}
        </C.container>
    );
}