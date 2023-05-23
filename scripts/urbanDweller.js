import { setScocioLocationId } from "./TransientState.js"

export const locationChoice = async () =>{
    document.addEventListener('change', handleAreaChange)
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()
    
    let html = '<h2>Which type of area do you Live in?</h2>'
    for (const location of locations) {
        html += `<input type="radio" name="location" value="${location.id}"/>${location.label}`

    }
    return html
}

//so you were adding an event listener to change the state of location :P
const handleAreaChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const locationId = JSON.parse(changeEvent.target.value)
        setScocioLocationId(locationId)
        
    }
}