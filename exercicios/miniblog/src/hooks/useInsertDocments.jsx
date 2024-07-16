//Insere os dados no banco

import { useState, useEffect, useReducer } from "react";
import {db} from '../firebase/config'
import { collection, addDoc, Timestamp, doc } from "firebase/firestore";


const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return {loading: true, error: null}
        case "INSERTED_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload}
        default:
            return state;

    }

}



export const useInsertDocments = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)
    //deal memory leak
    const [cancelled, setCancelled] = useState(false)
    const cheCkCancelBeforeDispatch = (action)=>{
        if (cancelled){
            dispatch(action)
        }
    }
    const insertDocments = async(document)=>{
        cheCkCancelBeforeDispatch(
            {
             type: "LOADING"
            }

         )

        
        try{
            const newDocument = { ...document, createdAt: Timestamp.now()}
            const insertedDocments = await addDoc(
                collection(db, docCollection), newDocument
            )
            cheCkCancelBeforeDispatch(
               {
                type: "INSERTED_DOC",
                payload: insertedDocments
               }
            )
        }catch(error){
            cheCkCancelBeforeDispatch(
                {
                 type: "ERROR",
                 payload: error.message,
                }
 
             )
        }
    }
    useEffect (()=>{
        return ()=> setCancelled(true)
    }, [])
    
    return {insertDocments, response};
}
