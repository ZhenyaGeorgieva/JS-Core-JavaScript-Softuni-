function solve() {
    const basicUrl = 'https://baas.kinvey.com/';
    const userName = 'guest';
    const password = 'pass';
    const base_64 = btoa(userName + ':' + password);
    const auth = {
        'Authorization': 'Basic ' + base_64,
        'Content-type': 'application/json'
    };

    let venueDateInput = document.getElementById('venueDate');
    let getVenuesButton = document.getElementById('getVenues');
    getVenuesButton.addEventListener('click', getVenues);

    let venueSection = document.getElementById('venue-info');

    function getVenues() {
        let getUrl = basicUrl + `rpc/kid_BJ_Ke8hZg/custom/calendar?query=${venueDateInput.value}`;
        fetch(getUrl, {
            method: 'POST',
            headers: auth
        })
            .then(validate)
            .then((response) => response.json())
            .then((data) => {
                getAvailableVenues(data);
            });
    }

    function getAvailableVenues(data) {
        for (let venueId of data) {
            let getVenueUrl = basicUrl + `appdata/kid_BJ_Ke8hZg/venues/${venueId}`
            fetch(getVenueUrl, {
                method: 'GET',
                headers: auth
            })
                .then(validate)
                .then((response) => response.json())
                .then((data) => {
                    showVenue(data);
                });
        }
    }
    function showVenue(venue) {
        console.log(venue)
        let venueDiv = document.createElement('div');
        venueDiv.classList.add('venue');
        venueDiv.setAttribute('id', `${venue._id}`);

        venueDiv.innerHTML = `
        <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
    <div class="venue-details" style="display: none;">
        <table>
            <tr>
                <th>Ticket Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
            <tr>
                <td class="venue-price">${venue.price} lv</td>
                <td><select class="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></td>
                <td><input class="purchase" type="button" value="Purchase"></td>
            </tr>
        </table>
        <span class="head">Venue description:</span>
        <p class="description">${venue.description}</p>
        <p class="description">Starting time: ${venue.startingHour}</p>
    </div>`;
        let buttonMoreInfo = venueDiv.getElementsByTagName('input')[0];
        buttonMoreInfo.addEventListener('click', showMoreInfo);

        let buttonPurchase = venueDiv.getElementsByTagName('input')[1];
        buttonPurchase.addEventListener('click', purchaseTicket);
        venueSection.appendChild(venueDiv);
    }

    function showMoreInfo(event) {
        let venueElement = event.currentTarget.parentNode.parentNode;
        let venueNameElement = venueElement.getElementsByTagName('span')[0];
        let venueDetailsElement = venueElement.getElementsByTagName('div')[0];

        //venueNameElement.style.display='none';
        venueDetailsElement.style.display = 'block';
    }

    function purchaseTicket(event) {
        let purchasedElement = event
            .currentTarget
            .parentNode
            .parentNode
            .parentNode
            .parentNode
            .parentNode
            .parentNode;
        let id = purchasedElement.getAttribute('id');
        console.log(id);
        let name = purchasedElement.getElementsByTagName('span')[0].textContent;
        let priceOfPurchasedEvent = purchasedElement.getElementsByClassName('venue-price')[0].textContent;
        let indexOfSpace = priceOfPurchasedEvent.indexOf(' ');
        let price = priceOfPurchasedEvent.substr(0, indexOfSpace);
        console.log(price)
        let quantity = purchasedElement.getElementsByClassName('quantity')[0].value;
        console.log(quantity);

        venueSection.innerHTML = '';
        venueSection.innerHTML = `
        <span class="head">Confirm purchase</span>
<div class="purchase-info">
    <span>${name}</span>
    <span>${quantity} x ${price}</span>
    <span>Total: ${Number(quantity) * Number(price)} lv</span>
    <input type="button" value="Confirm">
</div>`;

        let confirmBtn = venueSection.getElementsByTagName('input')[0];
        confirmBtn.addEventListener('click', getPrintInfo(id, quantity));
    }

    function getPrintInfo(id, quantity) {
        let printUrl = basicUrl + `rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${quantity}`;
        fetch(printUrl, {
            method: 'POST',
            headers: auth
        })
            .then(validate)
            .then((response)=>response.json())
            .then((data) => {
                printFinalMessage(data);
            });
    }

    function printFinalMessage(data){
        console.log(data)
        venueSection.innerHTML='';
        venueSection.innerHTML+='You may print this page as your ticket';
        venueSection.innerHTML+=data.html;
    }

    function validate(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return response;
    }
}
solve();