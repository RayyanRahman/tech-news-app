import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducers/reducer.js";

let API = 'https://hn.algolia.com/api/v1/search?';
const initialstate = {
    isLoading: true,
    query: '',
    nbPages: 0,
    page: 0,
    hits: []
}

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate);



    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" })

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_NEWS",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,

                }
            });
        } catch (error) {
            console.log(error);
        }
    }

const removePost = (post_ID) => {
    dispatch({type : "REMOVE_POST",payload:post_ID })
}
const searchPost = (query)=>{
    dispatch({type:"SEARCH_POST" , payload:query})
}
const getPrevPage = ()=> {
    dispatch({type:"PREV_PAGE" })

}
const getNextPage = ()=> {
    dispatch({type:"NEXT_PAGE" })

}
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page])

    return (
        <>
            <AppContext.Provider value={{ ...state , removePost,searchPost,getPrevPage,getNextPage}}>
                {children}
            </AppContext.Provider>
        </>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};


export { AppContext, AppProvider, useGlobalContext };