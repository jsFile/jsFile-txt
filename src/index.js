import {assign, Engine, defineEngine} from 'JsFile';
import createDocument from './reader/createDocument';

const files = {
    extension: ['txt'],
    mime: ['text/plain']
};

class TxtEngine extends Engine {
    createDocument = createDocument

    parser = 'readSingleFile'

    files = files

    static mimeTypes = files.mime.slice(0)
}

defineEngine(TxtEngine);

export default TxtEngine;