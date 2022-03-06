import * as C from './style';
import api from '../../services/api';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewTodo = () => {
    const navigate = useNavigate();
    const [ description, setDescription ] = useState('');

    const handlerSubmit = async (e: FormEvent) => {

        e.preventDefault();
        const data = {
            description: description,
        }

        await api.post('/todo', data);

        navigate('/');
        setDescription('');
    }

    return(
        <C.container>
            <form onSubmit={handlerSubmit}>
                <input
                 type="text"
                 name="text"
                 id="text"
                 placeholder='Digite'
                 required
                 onChange={e => setDescription(e.target.value)} 
                 value={description}
                />
            </form>
        </C.container>
    );
}