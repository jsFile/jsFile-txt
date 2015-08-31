import JsFile from 'JsFile';
import TxtEngine from './../../dist/jsfile-txt';

describe('Txt Engine', () => {
    let files = window.files;

    it('should exist', () => {
        assert.isFunction(TxtEngine);
    });
});