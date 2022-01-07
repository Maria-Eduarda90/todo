import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';
import { NewTodo } from '../components/NewTodo';
import { Todo } from '../components/Todo';
import GlobalStyle from '../styles/global';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import { usePersistedState } from '../utils/usePersistedState';

export const TodoPage = () => {
  const [ theme, setTheme ] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <>
    <ThemeProvider theme={theme}>
     <GlobalStyle/>
     <Header toggleTheme={toggleTheme}/>
     <NewTodo/>
     <Todo/>
    </ThemeProvider>
    </>
  );
}
