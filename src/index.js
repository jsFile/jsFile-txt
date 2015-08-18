import {assign, Engine, defineEngine} from 'JsFile';
import createDocument from './reader/createDocument';

const fileTypeParsers = [
    {
        extension: ['txt'],
        mime: ['text/plain']
    }
];

class TxtEngine extends Engine {
    createDocument = createDocument

    options = {
        parseMethod: 'parseFromSimpleFile'
    }

    fileTypeParsers = fileTypeParsers

    static mimeTypes = fileTypeParsers.map(p => p.mime.join(','))
}

defineEngine('Txt', TxtEngine);