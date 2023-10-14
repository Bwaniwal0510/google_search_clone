import React, { createContext, useState } from "react";
import {  useParams } from "react-router-dom";
export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false);

    const { query } = useParams();
   
    const [searchQuery, setSearchQuery] = useState(query || "");

    return (
        <Context.Provider
            value={{
                imageSearch,
                setImageSearch,
                setSearchQuery,
                searchQuery,
                query
            }}
>
            {props.children}
        </Context.Provider>
    );
};
