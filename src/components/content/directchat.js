import firebase from "firebase/app";
import Init from "./initialize.js";
import "firebase/auth";
import "./directchat.css";

Init();

const auth = firebase.auth();

function Login() {
    const google = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="login">
            <button className="btn btn-primary" onClick={google}>Sign In With Google</button>
        </div>
    )
}

function Logout() {
    return auth.currentUser && (
        <div className="login">
            <button className="btn btn-danger" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

function Chat() {
    return (
        <div className="chat">
            <h1>Hello</h1>
        </div>
    )
}

function LoginPlease() {
    return (
        <div className="login-please">
            <h1>Please Log In</h1>
        </div>
    )
}


export { Chat, LoginPlease, Login, Logout, auth }
