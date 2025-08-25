import { createContext } from "react";
import { useContext } from "react";


export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg goes here",
            completed:false
        },{},{},{}
    ],

    //defining the functiuonality names or defination not the functionality logic 
    addToDo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    tooglecomplete:(id)=>{}
}); //Initially there is empty object but we will handle this later


export const useTodo =()=>{
    useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider
