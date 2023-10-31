import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import { useState } from "react";
import "./Signup.css";

function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const buttonStyle = {
        backgroundColor: '#ffb71e', 
        color: 'white',
    };

    return <div>
        <div style={{
        backgroundImage: "url(image_url)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
            <Typography 
            variant={"h6"}
            color={"#656464"}
            align="center">
                Welcome To herd. Signup below
            </Typography>
        </div>
        <div style={{display: "flex",justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:400, height:450, border: "1px solid #ffb71e", borderRadius: 20}}> 
                    <TextField 
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    fullWidth={true}
                    label="Email" 
                    TextField= "wrap"
                    variant="outlined" 
                    style={{ margin: "10px", width: '100%' }}/>
                    <br></br>

                    <TextField 
                    onChange={(e) => {
                    setName(e.target.value);
                    }}
                    fullWidth={true}
                    label="Name" 
                    variant="outlined" 
                    style={{ margin: 10 }}/>
                    <br></br>

                    <TextField 
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password" 
                    variant="outlined"
                    style={{ margin: 10 }}/>
                    <br></br>

                    <TextField 
                    onChange={(e) => {
                    setGender(e.target.value);
                    }}
                    fullWidth={true}
                    label="Gender" 
                    variant="outlined"
                    style={{ margin: 10 }} />
                    <br></br>

                    <TextField 
                    onChange={(e) => {
                    setAge(e.target.value);
                    }}
                    fullWidth={true}
                    label="Age" 
                    variant="outlined"
                    style={{ margin: 10 }} />
                    <br></br>

                    <Button 
                    style={{buttonStyle, margin: 10}}
                    variant="contained"
                    size = {"large"}
                    onClick = {() => {
                        function callback2(data) {
                            localStorage.setItem("token", data.token);
                            alert("Signup done");
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch("http://localhost:3000/user/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                name: name,
                                password: password,
                                gender: gender,
                                age: age
                            }),
                            headers: {
                                "Content-type" : "application/json"
                            }
                        }).then(callback1)
                    }}
                    >Signup</Button>
            </Card> 
        </div>
    </div>
}

export default Signup;