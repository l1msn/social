import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import App from 'app/App';
import ErrorBoundary from 'app/providers/ErrorBoundary';


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider >
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
