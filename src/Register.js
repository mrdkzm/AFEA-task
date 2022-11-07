import { useEffect, useState } from "react";
import { RegisterApi } from "./services/api";
import { Input, Button } from 'rsuite';


export const Register = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');




    const handeClick = (userName, password, passConf) => {


        let url = 'https://demoblog.afeagroup.com/user/register';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data;'
            },
            body: `username=${userName}&password=${password}&passconf=${passConf}`
        }).then(res => res.json().then(res => console.log(res)))
        
    }

    return (
        <>
            <Input placeholder="UserName" onChange={(e) => setUserName(e)} />
            <Input placeholder="Password" onChange={(e) => setPassword(e)} />
            <Input placeholder="PassCon" onChange={(e) => setPassConf(e)} />
            <Button onClick={handeClick}>Submit</Button>
        </>
    )
};