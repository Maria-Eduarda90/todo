import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import * as C from './style';

interface Props{
    toggleTheme(): void;
}

export const Header = ({ toggleTheme }:Props) => {
    const { title } = useContext(ThemeContext);

    return(
        <C.container>
            <div className="header">
                <div>
                    <h1>TODO</h1>
                </div>
                <div className="switch">
                    <p>dark mode</p>
                    <Switch
                     onChange={toggleTheme} 
                     checked={title === 'dark'}
                     checkedIcon={false}
                     uncheckedIcon={false}
                     />
                </div>
            </div>
        </C.container>
    );
}