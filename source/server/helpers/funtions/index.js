const fs = require('fs');
const dg = require('debug');
const debug = dg('router:helper');

function removedFile(pathFile) {
    fs.unlink(pathFile, (err) => {
        if (err) throw err;
        debug(`${pathFile} was deleted`);
    });
}

function removeDuplicateOfString(str) {
    return str.split(',').reduce((result, element) => {
        const normalize = x => typeof x === 'string' ? x.toLowerCase() : x;
        const normalizedElement = normalize(element.trim());
        const isMatch = result.every(otherElement => normalize(otherElement) !== normalizedElement);

        if (isMatch)
            result.push(element);

        return result;
    }, []).join(', ');
}

function isFindEqualsObject(arrayOfObjects, obj, ignoreKey) {
    const objectFiltered = arrayOfObjects
        .filter(item => item._doc.title === obj.title)
        .map(el => {delete el._doc.hash; return el._doc} );

    return objectFiltered.some(item => {
        const keysFirstObj = Object.keys(item);

        return !keysFirstObj.filter((key) => {
            if (typeof item[key] === 'object' || Array.isArray(item[key])) {

                return !Object.equal(item[key], obj[key]);
            } else {
                if(ignoreKey && ignoreKey === key) {
                    return false;
                } else {
                    if(key === 'stars') {
                        return item[key] !== obj[key];
                    }
                    return item[key].toString() !== obj[key].toString();
                }
            }
        }).length;
    });
}

module.exports = {
    removedFile,
    removeDuplicateOfString,
    isFindEqualsObject,
}
