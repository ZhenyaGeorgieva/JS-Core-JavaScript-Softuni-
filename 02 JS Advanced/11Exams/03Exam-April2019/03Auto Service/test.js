const expect = require('chai').expect;
const AutoService = require('./02. Auto Service');

describe('test auto service', function () {
    let auto;
    beforeEach(function () {
        auto = new AutoService(43);
    });

    it('initializes with one parameter number', function () {
        let expected = '{"garageCapacity":43,"workInProgress":[],"backlogWork":[]}';
        expect(JSON.stringify(auto)).to.equal(expected);
    });

    it('available space accessor returns currentAvailabe space', function () {
        expect(auto.availableSpace).to.equal(43);
    });

    it('adds the car to the workInProgress array', function () {
        let expected = '[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}]';
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        expect(JSON.stringify(auto.workInProgress)).to.equal(expected);
    });
   
    it('adds car to backlogWork when there is no capacity', function () {
        let expected = '[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}]';
        auto = new AutoService(0);
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        expect(JSON.stringify(auto.backlogWork)).to.equal(expected);
    });
   
    it('returns message if there is no such car', function () {
        let expected = 'There is no car with platenumber Peter and owner CA1234CA.';
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        expect(auto.carInfo('Peter', 'CA1234CA')).to.equal(expected);
    });
   
    it('returns the car if there is such in the workInProgress register', function () {
        let expected = '{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}';
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        expect(JSON.stringify(auto.carInfo('CA1234CA', 'Peter'))).to.equal(expected);
    });
    
    it('returns the car if there is such in the backLog register', function () {
        let expected = '{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}';
        auto = new AutoService(0);
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        expect(JSON.stringify(auto.carInfo('CA1234CA', 'Peter'))).to.equal(expected);
    });
    
    it('repair car function if car is repaired', function () {
        let expected = 'Your doors were repaired.';
        auto = new AutoService(1);
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        auto.signUpForReview('Peter1', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        expect(auto.repairCar()).to.equal(expected);
    });
    
    it('repair car function if car was nothing to repair', function () {
        let expected = 'Your car was fine, nothing was repaired.'
        auto = new AutoService(1);
        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        auto.signUpForReview('Peter1', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ' });
        auto.repairCar();
        expect(auto.repairCar()).to.equal(expected);
    });
   
    it('returns chilling message if there are no cars to repair', function () {
        let expected = 'No clients, we are just chilling...';
        expect(auto.repairCar()).to.equal(expected);
    })
})
