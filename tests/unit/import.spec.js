import TxtEngine from './../../src/index';

describe('jsFile-txt', () => {
    describe('Library imports', () => {
        it('should import JS module', () => {
            assert.isFunction(TxtEngine);
        });

        it('should exist in global scope', () => {
            assert.isFunction(window.JsFileTxt.default);
        });
    });
});