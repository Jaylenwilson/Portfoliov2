import React from 'react'
import FileSaver, { SaveAs } from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


function Home() {
    const saveFile = () => {
        SaveAs(
            FileSaver.saveAs(
                "https://1drv.ms/b/s!ArRnGIyQvW_DgQIdM4aO6hzmbFb5", "JaylenWilsonResume.pdf"
            )
        )
    }
    return (
        <div id="landing">
            <h1>Jaylen Wilson</h1>
            <h3>Full Stack Web Developer</h3>
            <div id="btndiv">
                <button className="cv" onClick={saveFile}> <FontAwesomeIcon icon={faDownload} /> Resume</button>

            </div>
        </div>
    )
}
export default Home