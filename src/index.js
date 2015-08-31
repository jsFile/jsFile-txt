import {assign, Engine, defineEngine} from 'JsFile';
import createDocument from './reader/createDocument';

const fileTypes = [
    {
        extensions: ['txt'],
        mime: ['text/plain']
    }
];

class TxtEngine extends Engine {
    createDocument = createDocument

    parser = 'readSingleFile'

    fileTypes = fileTypes

    static mimeTypes = fileTypes.map(p => p.mime.join(','))
}

defineEngine(TxtEngine);

export default TxtEngine;