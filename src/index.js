import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./Stores/favorite-context";

ReactDOM.render(
<FavoritesContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</FavoritesContextProvider>, 
document.getElementById("root"));
