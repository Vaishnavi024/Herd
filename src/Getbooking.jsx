import { Typography, TextField, Card } from "@mui/material";
import Createbooking from "./Createbooking";
import { useState, useEffect } from "react";

function Getbooking() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        function callback2(data) {
            setBookings(data.bookings);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses", {
            method : "GET",
            headers: {
                "username" : localStorage.getItem("username"),
                "password": localStorage.getItem("password")
            }
        }).then(callback1)
    }, []);

    return <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>
        {bookings.map(booking => {
            return <Booking booking={booking} />}
        )}
    </div>
}

function Booking(props) {
    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>
        <Typography textAlign={"center"} variant="h5">{props.course.to}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.from}</Typography>
        <img src={props.course.imageLink} style={{width: 300}}></img>
    </Card>
}

export default Getbooking;