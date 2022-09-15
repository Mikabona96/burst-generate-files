// Types
import * as types from '../types';

const cases = ({ stringReplace, result }: types.Cases) => {
    const newString = stringReplace.value.split(' ');
    let newResult = result;
    if (result && result.includes(`${stringReplace.replaceVar}(noCase)`)) { // lorem lorem => LoremLorem
        const re = new RegExp(`${stringReplace.replaceVar}.noCase.`, 'g');
        const modifiedToPascalCase = newString.join(' ');

        newResult = newResult.replace(re, modifiedToPascalCase);
    }

    if (result && result.includes(`${stringReplace.replaceVar}(pascalCase)`)) { // lorem lorem => LoremLorem
        const re = new RegExp(`${stringReplace.replaceVar}.pascalCase.`, 'g');
        const modifiedToPascalCase = newString.map((word) => word[ 0 ].toUpperCase() + word.slice(1)).join('');

        newResult = newResult.replace(re, modifiedToPascalCase);
    }

    if (result && result.includes(`${stringReplace.replaceVar}(constantCase)`)) { // lorem lorem => LOREM_LOREM
        const re = new RegExp(`${stringReplace.replaceVar}.constantCase.`, 'g');
        const modifiedToConstantCase = newString.map((word) => word.toUpperCase()).join('_');

        newResult = newResult.replace(re, modifiedToConstantCase);
    }

    if (result && result.includes(`${stringReplace.replaceVar}(kebabCase)`)) { // lorem lorem => lorem-lorem
        const re = new RegExp(`${stringReplace.replaceVar}.kebabCase.`, 'g');
        const modifiedToKebabCase = newString.map((word) => word.toLowerCase()).join('-');

        newResult = newResult.replace(re, modifiedToKebabCase);
    }

    if (result && result.includes(stringReplace.replaceVar)) { // lorem lorem => loremLorem
        const re = new RegExp(`${stringReplace.replaceVar}`, 'g');
        const modifiedToDefault = newString.map((word, index) => index > 0 ? word[ 0 ].toUpperCase() + word.slice(1) : word).join('');

        newResult = newResult.replace(re, modifiedToDefault);
    }

    return newResult;
};

export const replaceWordCase = ({ string, stringsForReplace }: types.ReplaceWordCase) => {
    let result = string;

    if (Array.isArray(stringsForReplace)) {
        stringsForReplace.forEach((stringReplace) => {
            result = cases({ stringReplace, result });
        });
    }

    if (!Array.isArray(stringsForReplace) && stringsForReplace.replaceVar) {
        result = cases({ stringReplace: stringsForReplace, result });
    }

    return result;
};
