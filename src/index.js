import JsFile from 'JsFile';
import createDocument from './reader/createDocument';

const {Engine} = JsFile;

/**
 * @description Supported files by engine
 * @type {{extension: Array, mime: Array}}
 */
const files = {
    extension: ['txt'],
    mime: ['text/plain']
};

class TxtEngine extends Engine {
    constructor () {
        super(...arguments);
        this.createDocument = createDocument;
        this.parser = 'readSingleFile';
        this.files = files;
    }

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }
}

TxtEngine.mimeTypes = files.mime.slice(0);

export default TxtEngine;