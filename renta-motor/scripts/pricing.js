const url = "https://jtubban.github.io/wdd230/renta-motor/data/pricing.json";
const itemsContainer = document.querySelector('.items-container');

async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			// console.log(data);
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(data) {
    data.vehicles.forEach(vehicle => {
        const item = document.createElement('div');
        const innerDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        const pricing = document.createElement('div');
		const reservation = document.createElement('div');
		const walkIn = document.createElement('div');
		const book = document.createElement('a');

		const imgDiv = document.createElement('div');
		const img = document.createElement('img');

        item.setAttribute('class', 'item');
        h2.setAttribute('class', 'item-title');
        pricing.setAttribute('class', 'pricing');
		book.setAttribute('href', 'reservations.html');
		img.setAttribute('src', vehicle.image);
		img.setAttribute('alt', vehicle.name);
		img.setAttribute('loading', 'lazy');

		reservation.setAttribute('class','reservation');
		walkIn.setAttribute('class','walkIn');
        
        h2.innerText = vehicle.name;
		book.innerText = 'Book Now';

        // get and display the vehicles specification
        vehicle.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerText = spec;
            ul.appendChild(li);
        });

        // get and display reservation
        vehicle.reservation.forEach(res => {
            const reservationTitle = document.createElement('h3');
			const halfDay1 = document.createElement('p');
			const fullDay1 = document.createElement('p');

            reservationTitle.innerText = 'Reservation';
			halfDay1.innerText = `Half day: ${res.halfDay} (3hrs)`;
			fullDay1.innerText = `Full day: ${res.fullDay}`;

            reservation.appendChild(reservationTitle);
			reservation.appendChild(halfDay1);
			reservation.appendChild(fullDay1);
			pricing.appendChild(reservation);
        });

        // get and display walk in
		vehicle.walkIn.forEach(walk => {
			const walkInTitle = document.createElement('h3');
			const halfDay2 = document.createElement('p');
			const fullDay2 = document.createElement('p');

			walkInTitle.innerText = 'Walk In';
			halfDay2.innerText = `Half day: ${walk.halfDay} (3hrs)`;
			fullDay2.innerText = `Full day: ${walk.fullDay}`;

            walkIn.appendChild(walkInTitle);
			walkIn.appendChild(halfDay2);
			walkIn.appendChild(fullDay2);
			pricing.appendChild(walkIn);
        });

		imgDiv.appendChild(img);
        innerDiv.appendChild(h2)
        innerDiv.appendChild(ul);
		innerDiv.appendChild(pricing);
		innerDiv.appendChild(book);
		innerDiv.appendChild(imgDiv);
        item.appendChild(innerDiv);
		item.appendChild(imgDiv);
        itemsContainer.appendChild(item);
    });
}

apiFetch();
