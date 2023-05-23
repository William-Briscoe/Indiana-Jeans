export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch('http://localhost:8088/submissions')
    const submissions = await response.json()
    let html = ""
    // Iterate the submissions and create some <section> representations
    for (const submission of submissions) {
        html += `<section>Owns Jeans? ${submission.ownsBlueJeans}. Area type id? ${submission.socioLocationId}</section>`
    }

    // Return the HTML string
    return html
}