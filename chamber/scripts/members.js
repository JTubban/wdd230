// const grid = document.querySelector('.grid');
const memData = 'members.json';

// async function displayMembers(memData) {
//     const response = await fetch(memData);
//     const data = await response.json();

//     console.log(data);
// }

async function getProphetData() {
    const response = await fetch(memData);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

// displayMembers(memData);

getProphetData()