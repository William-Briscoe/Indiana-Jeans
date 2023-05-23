import { setOwnsBlueJeans } from "./TransientState.js"
/*
    Responsibility: provide UI controls (radio buttons) to survey
    for the user to awnser yes or no

    we gon use html
*/

export const ownJeansYesNo = () => {
    document.addEventListener("change", handleOwnershipChange)

    let html = '<h2>Do you own a pair of jeans?</h2>'
    html += '<input type="radio" name= "ownsAPair" value="true"/>Yes'
    html += '<input type="radio" name= "ownsAPair" value="false"/>No'
    return html
}


/*
    Since the value of the radio buttons is the string of
    'true' and the string of 'false', you must convert the
    string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsAPair") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
        
    }
}