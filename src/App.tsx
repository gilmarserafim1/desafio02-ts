import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: normal;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Home />
        </>
    );
}

export default App;
