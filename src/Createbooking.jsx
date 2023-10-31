import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import { useState } from "react";

function Createbooking() {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [mode, setMode] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const buttonStyle = {
        backgroundColor: '#ffb71e', 
        color: 'white',
    };

    return <div>
        <div style={{
            paddingTop:150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography 
            variant={"h6"}
            color={"black"}
            >
                Create booking
            </Typography>
        </div>
        <div style={{display: "flex",justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:600, height:450}}> 
                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setTo(e.target.value);
                    }}
                    label="to" 
                    variant="outlined" />
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setFrom(e.target.value);
                    }}
                    label="from" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setMode(e.target.value);
                    }}
                    label="mode" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                    label="Date" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}
                    label="time" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <Button 
                    variant="contained"
                    size = {"large"}
                    style={buttonStyle}
                    
                    onClick = {() => {
                        function callback2(data) {
                            alert("Booking created!");
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch("http://localhost:3000/admin/courses", {
                        method: "POST",
                        body: JSON.stringify({ 
                            to: to,
                            from: from,
                            mode: mode,
                            date: date,
                            time: time
                        }),
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " +  localStorage("token ")
                        }
                        }).then(callback1)
                    }}>
                    Create Booking
                    </Button>
            </Card>            
        </div>
    </div>
}

export default Createbooking;