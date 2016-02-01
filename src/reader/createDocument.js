import JsFile from 'JsFile';
const {Document} = JsFile;
const {validateUrl} = JsFile.Engine;

export default function (text) {
    return new Promise(function (resolve) {
        let children = [];
        const textLines = text.split(/\n/);
        const len = textLines.length;

        textLines.forEach(function (tl, i) {
            let textSections = tl.split(/\s/);

            textSections.forEach(function (ts) {
                if (ts) {
                    let element = Document.elementPrototype;
                    element.properties.tagName = 'SPAN';
                    element.properties.textContent = ts + ' ';

                    // is it a link?
                    if (validateUrl(ts)) {
                        const textContent = ts.replace(/\s+/, '');

                        element.properties.tagName = 'A';
                        element.properties.href = textContent;
                        element.properties.textContent = textContent;
                        element.properties.after = ts.replace(/\S+/g, '') + ' ';
                    }

                    children.push(element);
                }
            }, this);

            if (i < len - 1) {
                let element = Document.elementPrototype;
                element.properties.tagName = 'BR';

                children.push(element);
            }
        }, this);

        let element = Document.elementPrototype;
        element.properties.tagName = 'P';
        element.children = children;
        children = null;

        let page = Document.elementPrototype;
        page.children = [element];

        resolve(new Document({
            meta: {
                name: this.fileName,
                wordsCount: text.split(/\s+/).length
            },
            content: [page]
        }));
    }.bind(this));
}
