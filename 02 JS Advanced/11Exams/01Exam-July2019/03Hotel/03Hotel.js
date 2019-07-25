class Hotel {
    constructor(name, capacity) {
        this.name = name,
            this.capacity = capacity,
            this.bookings = [],
            this.currentBookingNumber = 1;
        this.rooms = {
            single: Math.floor(0.5 * capacity),
            double: Math.floor(0.3 * capacity),
            maisonette: Math.floor(0.2 * capacity)
        }
    }
    get roomsPricing() {
        let obj = {};
        obj.single = 50;
        obj.double = 90;
        obj.maisonette = 135;
        return obj;
    }

    get servicesPricing() {
        let obj = {};
        obj.food = 10;
        obj.drink = 15;
        obj.housekeeping = 25;
        return obj;
    }
    rentARoom(clientName, roomType, nights) {
        if (this.rooms[roomType] > 0) {
            let client = {};
            client.clientName = clientName;
            client.roomType = roomType;
            client.nights = nights;
            client.bookingNumber = this.currentBookingNumber;
            this.bookings.push(client);
            this.rooms[roomType] -= 1;
            this.currentBookingNumber += 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${client.bookingNumber}.`;
        }
        let result = [];
        result.push(`No ${roomType} rooms available!`);
        for (let room of Object.keys(this.rooms)) {
            if (this.rooms[room] > 0) {
                result.push(`Available ${room} rooms: ${this.rooms[room]}.`);
            }
        }
        return result.join(' ');
    }
    roomService(currentBookingNumber, serviceType) {
        let byBookingNum = this.bookings.find(x => x.bookingNumber == currentBookingNumber);
        if (!byBookingNum) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
        if (!Object.keys(this.servicesPricing).includes(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }
        if (byBookingNum.hasOwnProperty('services')) {
            byBookingNum.services.push(serviceType);
        } else {
            byBookingNum.services = [];
            byBookingNum.services.push(serviceType);
        }
        return `Mr./Mrs. ${byBookingNum.clientName}, Your order for ${serviceType} service has been successful.`;
    }
    checkOut(currentBookingNumber) {
        let byBookingNum = this.bookings.find(x => x.bookingNumber == currentBookingNumber);
        if (!byBookingNum) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
        let currentRoomType = byBookingNum.roomType;
        this.rooms[currentRoomType] += 1;

        let nights = Number(byBookingNum.nights);
        let priceOfRoomPerNight = Number(this.roomsPricing[currentRoomType]);
        let total = nights * priceOfRoomPerNight;
        let totalAdditionals = 0;

        if (!byBookingNum.hasOwnProperty('services')) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${byBookingNum.clientName}. The total amount of money you have to pay is ${total} BGN.`;
        } else {
            let additionalServices = byBookingNum.services;
            for (let service of additionalServices) {
                totalAdditionals += Number(this.servicesPricing[service]);
            }
            return `We hope you enjoyed your time here, Mr./Mrs. ${byBookingNum.clientName}. The total amount of money you have to pay is ${total + totalAdditionals} BGN. You have used additional room services, costing ${totalAdditionals} BGN.`;
        }
    }
    report() {
        let result = `${this.name.toUpperCase()} DATABASE:\n`;
        result += `--------------------\n`;
        if (this.bookings.length == 0) {
            result += `There are currently no bookings.`;
        } else {
            let bookings = [];
            for (let booking of this.bookings) {
                let current = `bookingNumber - ${booking.bookingNumber}\n`;
                current += `clientName - ${booking.clientName}\n`;
                current += `roomType - ${booking.roomType}\n`;
                current += `nights - ${booking.nights}`;
                if (booking.hasOwnProperty('services')) {
                    current += `services: ${booking.services.join(', ')}`;
                }
                bookings.push(current);
            }
            result += `${bookings.join('\n----------\n')}`;
        }
        return result;
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());





