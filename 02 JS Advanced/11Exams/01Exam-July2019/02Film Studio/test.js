const expect = require('chai').expect;
const FilmStudio = require('./filmStudio');

describe('test film studio', function () {
    it('initialize', function () {
        let expected = '{"name":"some studio","films":[]}';
        let film = new FilmStudio('some studio');
        expect(JSON.stringify(film)).to.equal(expected);
    });
    it('test make movie', function () {
        let expected1 = '{"filmName":"The Avengers","filmRoles":[{"role":"Iron-Man","actor":false},{"role":"Thor","actor":false},{"role":"Hulk","actor":false},{"role":"Arrow guy","actor":false}]}'
        let expected2 = '{"filmName":"The Avengers 2","filmRoles":[{"role":"Iron-Man","actor":false},{"role":"Hulk","actor":false},{"role":"Arrow guy","actor":false},{"role":"Ant-man","actor":false}]}'
        let expected3 = '{"filmName":"The New Avengers","filmRoles":[{"role":"Iron-Man","actor":false},{"role":"Thor","actor":false},{"role":"Hulk","actor":false},{"role":"Arrow guy","actor":false},{"role":"Black Panther","actor":false}]}'
        let filmStudio = new FilmStudio('SU-Studio');

        expect(JSON.stringify(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']))).to.equal(expected1);
        expect(JSON.stringify(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']))).to.equal(expected2);
        expect(JSON.stringify(filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther']))).to.equal(expected3);
    });
    it('throw error, invalid count of args', function () {
        expect(() => {
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers');
        }).to.throw('Invalid arguments count')
    });
    it('throw error, invalid type of args', function () {
        expect(() => {
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers', 'some string')
        }).to.throw('Invalid arguments')
    });
    it('casting if there is such role', function () {
        let expected = 'You got the job! Mr. Peter you are next Iron-Man in the The Avengers. Congratz!'
        let filmStudio = new FilmStudio('SU-Studio');
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        expect(filmStudio.casting('Peter', 'Iron-Man')).to.equal(expected)
    });
    it('casting if there is NO such role', function () {
        let expected = 'Peter, we cannot find a Iron role...';
        let filmStudio = new FilmStudio('SU-Studio');
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        expect(filmStudio.casting('Peter', 'Iron')).to.equal(expected);
    });
    it('casting if there are no films yet', function () {
        let filmStudio = new FilmStudio('SU-Studio');
        expect(filmStudio.casting('Peter', 'Iron')).to.equal('There are no films yet in SU-Studio.')
    });
    it('look for producer, there is such film', function () {
        let expected = `Film name: The Avengers\n`;
        expected += 'Cast:\n';
        expected += 'false as Iron-Man\n';
        expected += 'false as Thor\n';
        expected += 'false as Hulk\n';
        expected += 'false as Arrow guy\n';
        let filmStudio = new FilmStudio('SU-Studio');
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        expect(filmStudio.lookForProducer('The Avengers')).to.equal(expected);
    });
    it('look for producer, there is NO such film', function(){
        expect(()=>{
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            filmStudio.lookForProducer('The Avengers4');  
        }).to.throw('The Avengers4 do not exist yet, but we need the money...')
    })
})