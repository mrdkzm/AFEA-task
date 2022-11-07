import axios from "axios";



export const RegisterApi = async (username, password, passconf) => {
        var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('username', username);
data.append('password', password);
data.append('passconf', passconf);



let config = {
    method: 'post',
    url: 'https://demoblog.afeagroup.com/user/register',
    headers: { 
    'Content-Type': 'multipart/form-data;'
    },
    data : data
  }
}




export const Login = async (username, password) => {
    const res = await axios.post(`https://demoblog.afeagroup.com/user/login`,
        {
            "username": username,
            "password": password,
        });
    return res.data;
}
