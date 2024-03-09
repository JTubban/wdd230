const baseURL = "https://jtubban.github.io/wdd230/";
const linksURL = "https://jtubban.github.io/wdd230/data/links.json";
// const linksURL = "../data/links.json";

const activityList = document.querySelector("#activity-List");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let li = document.createElement("li");
        li.textContent = week.lesson;
        
        week.links.forEach((link) => {
            let a = document.createElement("a");
            a.textContent = link.title;

            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");

            li.appendChild(a);
        });

        activityList.appendChild(li);
    });
};

getLinks();