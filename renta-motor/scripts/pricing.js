const url = "https://jtubban.github.io/wdd230/renta-motor/data/pricing.json";
// const div = document.querySelector('.items-container');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
        console.log(data);
    //   displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {



    // data.vehicles.forEach((items) => {
    //     items.specs.forEach((item) => {
    //         let p = document.createElement("p");
    //         p.innerHTML = item;

    //         div.appendChild(p);
    //     });

    // });
}

apiFetch();
