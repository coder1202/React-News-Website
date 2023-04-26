//title context api
//context creation
//provider
//consumer.........lenthy so remove
//use context hook

import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './Reducer';
//import { type } from '@testing-library/user-event/dist/type';
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    //this field took from api json fille
    isLoading: true,
    query: "html",
    nbPages: 0,
    page: 0,
    hits: [],
};

//creation
const AppContext = React.createContext();

//to crater provider function
const AppProvider = ({ children }) => {

    // const [state, setstate] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetcthApiData = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
            //isLoading=false;

        } catch (err) {
            console.log(err);
        }
    };

    //to remove the post
    const removePost = (Post_Id) => {

        dispatch({ type: "REMOVE_POST", payload: Post_Id })
    };

    //search
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,

        });
    }
    //pagination nextpage
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }
    //pagination privious page
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }



    //to call api function
    useEffect(() => {

        //fetcthApiData(`${API}query=${state.query}&page=${state.page}`);
        dispatch((v) => v + 1);

        fetcthApiData(`${API}query=${state.query}&page=${state.page}`);
        //state.query,state.page in[] for search by loading
    }, [state.query, state.page]);

    return (
        //remove post
        <AppContext.Provider value={
            { ...state, removePost, searchPost, getNextPage, getPrevPage }} > {children}
        </AppContext.Provider>
    )
};

//custom hook create
//function nu name use thi hovu jaruri che
const useGlobalContext = () => {
    return useContext(AppContext);
};


//aa appProvider ne index.js ma wrap krvu padse
//after app.js ma parth kakadiya print kravu hoi to kri shakai

export { AppContext, AppProvider, useGlobalContext };




