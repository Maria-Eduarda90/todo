import MyIcon from '../../assets/trash.svg'
import * as C from './style';
import api from '../../services/api';
import { useEffect, useState } from 'react';

interface todoProps {
    id: string;
    description: string;
}

export const Todo = () => {
    const [ todos, setTodo ] = useState<todoProps[]>([]);

    const handleSubmitDelete = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = Number(e.view.document.activeElement?.id)
        if(id){
            api.delete(`/todo/${id}`);
        }
    }

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
                            <button id={todo.id} onClick={handleSubmitDelete}>
                                <img src={MyIcon} alt={todo.id} />
                            </button>
                        </div>
                    </>
                )
            })}
        </C.container>
    );
}