import { useEffect, useState } from "react";
import { Login } from "./services/api";
import { Input, Button } from 'rsuite';


export const Register = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

  
  
    //    useEffect(() => {
    //     RegisterApi.then(res => console.log(res))
    //    }, [])

    const handeClick = () => {
        Login(userName, password).then(res => console.log(res))
    }

    return (
        <>
            <Input placeholder="UserName" onChange={(e) => setUserName(e)}/>
            <Input placeholder="Password" onChange={(e) => setPassword(e)} />
            <Button onClick={handeClick}>Login</Button>
        </>
    )
};