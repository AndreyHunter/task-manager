import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './context/ThemeProvider';
import { TodoProvider } from './context/TodoProvider';

import { App } from './app/App';

import './index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </ThemeProvider>
    </StrictMode>,
);
