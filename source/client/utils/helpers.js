export function removeDuplicateOfString(str) {
    if(typeof str !== 'string') {
        throw new Error('parameter str should be e string');
    }
    return str.split(',').reduce((result, element) => {
        const normalize = x => typeof x === 'string' ? x.toLowerCase() : x;
        const normalizedElement = normalize(element.trim());
        const isMatch = result.every(otherElement => normalize(otherElement) !== normalizedElement);

        if (isMatch)
            result.push(element);

        return result;
    }, []).join(', ');
}

export function isFindEqualsObject(arrayOfObjects, obj, ignoreKey) {
    if(!Array.isArray(arrayOfObjects)) {
        throw new Error('parameter arrayOfObjects should be a array');
    } else if (typeof obj !== 'object') {
        throw new Error('parameter obj should be a object');
    } else if (ignoreKey && typeof ignoreKey !== 'string') {
        throw new Error('parameter ignoreKey should be a string');
    }
    const objectFiltered = arrayOfObjects
        .filter(item => item.title === obj.title)
        .map(el => {delete el.hash; return el});

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
                        return item[key] !== removeDuplicateOfString(obj[key]);
                    }
                    return item[key].toString() !== obj[key].toString();
                }
            }
        }).length;
    });
}

export function isNameExists(str, comparisonString) {
    if (typeof str !== 'string') {
        throw new Error('parameter str should be a string');
    } else if (typeof comparisonString !== 'string') {
        throw new Error('parameter comparisonString should be a string');
    }
    const normalize = x => typeof x === 'string' ? x.toLowerCase() : x;
    const normalizedElement = normalize(str.trim());

    return comparisonString === normalizedElement;
}

export const currentYear = () => new Date().getFullYear();
