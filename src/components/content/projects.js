import "./projects.css";

export default function Projects() {
    return (<>
        <h3>You can click on any of the titles to view the project.</h3>
        <div className="projects">
            <div className="project">
                <h1 className="project-head"><a className="head-link" href="https://goals.nabilto.com/" target="_blank"><u>Goals</u></a></h1>
                <p className="project-desc">Stop procrastinating, set deadlines and keep track of your personal goals.<a href="https://github.com/rquit/HackUIowa" target="_blank"> GitHub</a></p>
                <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/833140341321367582/unknown.png" />
            </div>

            <div className="project">
                <h1 className="project-head"><a className="head-link" href="https://github.com/Spurwing/Chat-Bot-Integrations/tree/main/Slack/NodeJS" target="_blank"><u>Slack Bot</u></a></h1>
                <p className="project-desc">Slack bot meant for calendar scheduling using the Spurwing time management API.</p>
                <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/836732827948023818/unknown.png" />
            </div>

            <div className="project">
                <h1 className="project-head"><a className="head-link" href="https://github.com/rquit/Mable" target="_blank"><u>Discord Bot</u></a></h1>
                <p className="project-desc">Highly expandable base dicord bot allowing for the deployment of information, and basic web scraping.</p>
                <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/836734086705578014/unknown.png" />
            </div>

            <div className="project">
                <h1 className="project-head"><a className="head-link" href="https://github.com/rquit/OLD-rquit.github.io" target="_blank"><u>Old Personal Site</u></a></h1>
                <p className="project-desc">The previous iteration before I remade the site with React. Site is no longer deployed, so here's the source code.</p>
                <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/836735280228335626/unknown.png" />
            </div>
        </div>
    </>)
}