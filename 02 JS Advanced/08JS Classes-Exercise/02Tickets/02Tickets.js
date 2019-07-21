function solve(arr, criteria) {
    let tickets = [];
    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination,
                this.price = price,
                this.status = status
        };
    };
    for (let ticket of arr) {
        let tokens = ticket.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];
        tickets.push(new Ticket(destination, price, status));
    };
    if (criteria != 'price') {
        tickets = tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    } else {
        tickets = tickets.sort((a, b) => a[criteria] - b[criteria]);

    }
    return tickets;
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'))