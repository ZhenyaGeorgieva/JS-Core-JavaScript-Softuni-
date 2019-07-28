const SoftUniFy = require('./03. Softunify');
const expect = require('chai').expect;

describe('test', function () {
    it('initialize', function () {
        let expected = '{"allSongs":{}}';
        let soft = new SoftUniFy();
        expect(JSON.stringify(soft)).to.equal(expected);
    });
    it('download song', function () {
        let expected = '{"Eminem":{"rate":0,"votes":0,"songs":["Venom - Knock, Knock let the devil in...","Phenomenal - IM PHENOMENAL..."]},"Dub Fx":{"rate":0,"votes":0,"songs":["Light Me On Fire - You can call me a liar.. "]}}'
        let soft = new SoftUniFy();
        soft.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        soft.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        soft.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        expect(JSON.stringify(soft.allSongs)).to.equal(expected);
    });
    it('play song if it exists', function () {
        let expected = `Eminem:\nVenom - Knock, Knock let the devil in...\n`;
        let soft = new SoftUniFy();
        soft.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        soft.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        soft.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        expect(soft.playSong('Venom')).to.equal(expected);
    })
    it('returns message,play song', function () {
        let expected = `You have not downloaded a Venom1 song yet. Use SoftUniFy's function downloadSong() to change that!`;
        let soft = new SoftUniFy();
        soft.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        soft.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        soft.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        expect(soft.playSong('Venom1')).to.equal(expected);
    });
    it('list of songs', function () {
        let expected = `Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. `
        let soft = new SoftUniFy();
        soft.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        soft.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        soft.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        expect(soft.songsList).to.equal(expected);
    })
    it('empty songlist message', function () {
        let expected = 'Your song list is empty';
        let soft = new SoftUniFy();
        // soft.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        // soft.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        // soft.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        expect(soft.songsList).to.equal(expected);
    });
    it('rate artist', function () {
        let soft = new SoftUniFy();
        expect(soft.rateArtist('Eminem')).to.equal('The Eminem is not on your artist list.');
        expect(soft.rateArtist('Eminem', 50)).to.equal('The Eminem is not on your artist list.');
    });
    it('rate artist', function () {
        let soft = new SoftUniFy();
        soft.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        expect(soft.rateArtist('Eminem')).to.equal(0);
        expect(soft.rateArtist('Eminem', 50)).to.equal(50);
    })
})