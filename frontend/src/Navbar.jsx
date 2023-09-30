import React from "react"
export default function Navbar() {
    return (
        <div style={{ display: 'flex', flexDirection: "row" }}>
            <a style={{ margin: "10px" }} href="/">Home</a>
            <a style={{ margin: "10px" }} href="/about">About</a>
            <a style={{ margin: "10px" }} href="/team">Team</a>
            <a style={{ margin: "10px" }} href="/gallery">Gallery</a>
            <a style={{ margin: "10px" }} href="/login">Login</a>
            <a style={{ margin: "10px" }} href="/signup">Signup</a>
        </div>
    )
}