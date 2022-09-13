import React, { useEffect } from "react";
import "./Home.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

export default function Home(){
    const [latitude, setLatitude] = useState(21.2188417);
    const [longitude, setLongitude] = useState(81.3527585);

    const {isLoaded} = useLoadScript({ googleMapsApiKey : "AIzaSyCV8OhhP8ARZo9PuvH7y2368F-5lo-w8ms" });

    if (!isLoaded) return <p>Loading..</p>
    return (
        <Map latitude={latitude} setLatitude={setLatitude} longitude={longitude} setLongitude={setLongitude} />
    )
}

function Map({latitude, setLatitude, longitude, setLongitude}){

    useEffect(() =>{
        console.log(latitude, longitude)
    }, [latitude, longitude])

    return (
        <div className="home-page">
            <GoogleMap zoom={18} center={{lat: latitude, lng:longitude}} mapContainerClassName="map-container">
                <Marker />
            </GoogleMap>
            <div className="home-content">
                <div className="top-row">
                <div className="user-profile-div">
                    <img src="profile.png" alt="" height='40px' width='45px' />
                    <div>
                        <p className="user-name">Chetan Vaswani</p>
                    </div>
                </div>
                <div className="inline" >
                    <img src="location-pin.png" id="location-img" alt="go to my current location icon" height="55px" width="55px" onClick={() => {
                        window.navigator.geolocation.getCurrentPosition((res) => {
                            setLatitude(res.coords.latitude);
                            setLongitude(res.coords.longitude);
                        }, console.log);
                    }} />
                </div>
                <div className="inline">
                    <img src="schedule.png" alt="" height="50px" width="50px" id="schedule-img"/>
                </div>
                </div>
            </div>
        </div>
    )
}