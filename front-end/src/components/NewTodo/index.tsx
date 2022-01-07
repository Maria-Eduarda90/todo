import * as C from './style';
import api from '../../services/api';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewTodo = () => {
    const navigate = useNavigate();
    const [ description, setDescription ] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        try {
            event.preventDefault();

            const data = new FormData();

            data.append('description', description);

            await api.post('todo', data);
            console.log("data", data);

            navigate('/');
        } catch (error){
            alert('Erro interno, tente novamente mais tarde! ' + error);
        }
    }

    return(
        <C.container>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="text"
                 id="text"
                 placeholder='Digite' 
                 onChange={event => setDescription(event.target.value)} 
                 value={description}
                />
            </form>
        </C.container>
    );
}