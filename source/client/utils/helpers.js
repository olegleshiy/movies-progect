export function removeDuplicateOfString(str) {
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
    const objectFiltered = arrayOfObjects
        .filter(item => item.title === obj.title)
        .map(el => {delete el.hash; delete el._id; return el} );

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
    const normalize = x => typeof x === 'string' ? x.toLowerCase() : x;
    const normalizedElement = normalize(str.trim());

    return comparisonString === normalizedElement;
}

export const currentYear = () => new Date().getFullYear();
