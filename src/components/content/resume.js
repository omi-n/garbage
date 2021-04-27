import "./resume.css";
import resume from "./resume.pdf";

export default function Resume() {
    return (
        <div className="ooga">
            <iframe
                frameborder="0"
                width="80%" height="500px"
                src={resume}>
            </iframe>
        </div>
    )
}