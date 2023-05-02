import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { readAllGreetings } from "../redux/slices/greetingsSlice";

export default function Greeting() {
    const greeting = useSelector((store) => store.greetings) 
    const dispatch = useDispatch()

    const getNewGreeting = () => {
        dispatch(readAllGreetings())
    }

    useEffect(() => {
        dispatch(readAllGreetings())
    },[])

    return (
        <>
          <h1>{ greeting.greeting.data?.text || 'Loading...' }</h1>
          <button type="button" onClick={getNewGreeting}>Get new greeting</button>  
        </>
    )
}