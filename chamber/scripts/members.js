const url = 'https://jtubban.github.io/wdd230/chamber/data/members.json';
const grid = document.querySelector('.grid');
// grid.innerHTML = `<a href="https://www.google.com">james</a>`;
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach(company => {
        grid.innerHTML = `
            <section>
                <img src="${company.image}" alt="Amazon Image">
                <h3>${company.name}</h3>
                <p>Redmond, Washington, USA</p>
                <p>773-702-1000</p>
                <p>CEO: Satya Nadella</p>
                <p>Founded: 1975</p>
                <p>Membership Level: Gold</p>
                <p>Marker Cap: $3.029 Trillion</p>
                <a href="https://www.amazon.com">Visit</a>
            </section>
        `;
    });
};

getMembers();