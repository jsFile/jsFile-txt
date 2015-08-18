import {Document} from 'JsFile';

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
                    if (this.validateUrl(ts)) {
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
            name: this.fileName,
            wordsCount: text.split(/\s+/).length,
            pages: [page]
        }));
    }.bind(this));
}