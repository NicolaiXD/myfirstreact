import {useEffect, useState } from "react";
import helloServices from "../services/helloServices";

//class - stateful functions
//functions - stateless functions
const Hello = () => {

    //react hooks usestate
    const[hello, setHello] = useState("")

    //react hooks useeffect
    //axios - tool for http request promises
    //promises - asynchronous processes
    useEffect( () => {
        helloServices.getHello()
        .then(response => {
            setHello(response.data)
        })
        // can also do  .catch(() =>) since there will be no error
        .catch(err =>{
            console.log("something went wrong lol")
        })
    }
    )

    return hello;
}

export default Hello