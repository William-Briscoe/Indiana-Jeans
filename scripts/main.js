
import { SaveSubmission } from "./SaveSubmission.js"
import { ownJeansYesNo } from "./ownsJeans.js"
import { locationChoice } from "./urbanDweller.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector("#container")

const render = async () =>{
    const jeanOwnershipHTML = ownJeansYesNo()
    const saveData = SaveSubmission()
    const locationsHTML = locationChoice()
    const submissionsList = SubmissionList()
    container.innerHTML = jeanOwnershipHTML + await locationsHTML + await saveData + await submissionsList
}

document.addEventListener("newSubmissionCreated", render)

render()
