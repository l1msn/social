import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n"
import App from "app/App";


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <ThemeProvider >
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
