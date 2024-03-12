const url = 'https://jtubban.github.io/wdd230/chamber/data/members.json';
const grid = document.querySelector('.grid');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach(company => {
        
        // grid.innerHTML = `
        //     <section>
        //         <img src="${company.image}" alt="${company.imageName}">
        //         <h3>${company.name}</h3>
        //         <p>${company.address}</p>
        //         <p>${company.contact}</p>
        //         <p>CEO: ${company.ceo}</p>
        //         <p>Founded: ${company.founded}</p>
        //         <p>Membership Level: ${company.memLevel}</p>
        //         <p>Marker Cap: ${company.marketcap}</p>
        //         <a href="${company.website}">Visit</a>
        //     </section>
        // `;

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

        grid.appendChild(section);
    });
};

getMembers();