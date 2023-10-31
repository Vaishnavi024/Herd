import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data) {
            if(data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "username": localStorage.getItem("username"),
                "password": localStorage.getItem("password")
            }
        }).then(callback1)
    }, []);
    
    const buttonStyle = {
        backgroundColor: '#ffb71e', 
        color: 'white', 
    };

    if(userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
            <div>
                <Typography 
                color={"#ffb71e"}
                fontSize={"h4"}>
                Herd</Typography>
            </div>
            <div style={{marginRight: 10}}>
                <div>
                    {userEmail}
                </div>
                <Button
                    style={buttonStyle}
                    variant={"contained"}
                    onClick = {() => {
                        localStorage.setItem("token", null);
                        window.location = "/";
                }}
                >Logout</Button>
                <br></br><br></br>
            </div>
        </div>
    
    }

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
            <Typography 
            color={"#ffb71e"}
            fontSize={"h3"}>Herd</Typography>
        </div>
        <div style={{marginRight: 10}}>
            <Button
            style={buttonStyle}
            variant={"contained"}
            onClick = {() => {
                navigate("/signup")
            }}
            >Sign Up</Button><br></br><br></br>
            <Button
            style={buttonStyle}
            variant={"contained"}
            onClick = {() => {
                navigate("/signin")
            }}>Sign In</Button>
        </div>
    </div>
}

export default Appbar;