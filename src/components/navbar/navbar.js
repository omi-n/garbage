import "./navbar.css";

export default function Nav() {
return (
<>
    <nav className="navbar-container navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
            <img src="https://cdn.discordapp.com/avatars/132227983233515520/6bd1fb2e126603570f4a3dcd7dc0d787.webp?size=128"></img>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse"
            aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="/resume">Resume</a></li>
                <li className="nav-item"><a className="nav-link" href="/chat">Direct Chat</a></li>
            </ul>
        </div>
    </nav>
    <br />
</>
)
}