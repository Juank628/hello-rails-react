import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { readAllGreetings } from "../redux/slices/greetingsSlice";

export default function Greeting() {
    const greeting = useSelector((store) => store.greetings) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readAllGreetings())
    },[])

    return (
        <h1>{ greeting.greeting.data?.text || 'Loading...' }</h1>
    )
}