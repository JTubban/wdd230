const url = 'https://jtubban.github.io/wdd230/chamber/data/members.json';
const display = document.querySelector('.grid');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.companies);
    // console.log(data.companies.name);
}

const displayMembers = (companies) => {
    companies.forEach(company => {
        let section = document.createElement('section');
        let companyImage = document.createElement('img');
        let companyName = document.createElement('h3');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let ceo = document.createElement('p');
        let founded = document.createElement('p');
        let memLevel = document.createElement('p');
        let markercap = document.createElement('p');
        let website = document.createElement('a');

        companyName.textContent = company.name;
        address.textContent = company.address;
        contact.textContent = company.contact;
        ceo.textContent = company.ceo;
        founded.textContent = company.founded;
        memLevel.textContent = company.memLevel;
        markercap.textContent = company.marketcap;
        website.textContent = "Visit";

        companyImage.setAttribute('src', company.image);
        companyImage.setAttribute('alt', company.imageName);
        website.setAttribute('href', company.website);
        website.setAttribute('target', '_blank');

        section.appendChild(companyImage);
        section.appendChild(companyName);
        section.appendChild(address);
        section.appendChild(contact);
        section.appendChild(ceo);
        section.appendChild(memLevel);
        section.appendChild(markercap);
        section.appendChild(website);

        display.appendChild(section);
    });
};

getMembers();


const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});