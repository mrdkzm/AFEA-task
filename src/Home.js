import { useEffect, useState } from "react";
import { RegisterApi } from "./services/api";
import { Input, Button } from 'rsuite';
import {Link} from "react-router-dom"


export const Home = () => {



    return (
        <>
            <Link to="/register">Register</Link>
            <Link to="/login">Sign In</Link>
        </>
    )
};