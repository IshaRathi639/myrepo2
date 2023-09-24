import React, { useContext, useEffect,useReducer} from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = "https://script.google.com/macros/s/AKfycbxtWnOIIS2z7ZZzdsUbygbdr7DfLZYEBuynYsfsHhxYQVVzps3q4a92ETelxjp39GYV/exec";

const initialState ={
    name:"",
    image:"",
    services : [],
};


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload:{
                    name: "Educcation",
                    image: "./images/hero 1 1.png",
                },
            }
        );
    };
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload:{
                    name: "Rachit Rathi",
                    image: "./images/about.png",
                },
            }
        );
    };

    //to get the api data
        const getServices = async(url) => {
            try{
                const res = await fetch(url);
                const data = await res.json();
                dispatch({type: "GET_SERVICES", payload: data});
            }
            catch(error){
                console.log(error)
            }
        }

        useEffect(()=>{
            getServices(API);
        },[])

    return ( 
        <AppContext.Provider value ={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>  
    );
};




//global custom hook

const useGlobalContext =() =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext};