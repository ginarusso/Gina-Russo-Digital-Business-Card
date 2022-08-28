import React from "react"

export default function Info() {
    function handleClickEmail() {
        window.location.href = "mailto:gpr0496@gmail.com"
    }
    return (
        <div>
            <div className="photo">
            <img src="../images/gina-russo.jpg" className="info-img" />
            </div>
            <div className="info">
            <p className="name">Gina Russo</p>
            <p className="title">Frontend Developer</p>
            <p className="website"><a href="https://sites.google.com/view/ginarusso" target="_blank">My website</a></p>
            <div className="btn">
            <button onClick={handleClickEmail} className="email">Email</button>
            <a href="https://www.linkedin.com/in/gina-p-russo/" target="_blank">
            <button className="linked-in">LinkedIn</button>
        </a>
            </div>
            </div>
        </div>
    )
}
