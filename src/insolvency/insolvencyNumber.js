var cloneDeep = require('lodash/cloneDeep')

const defaultValidationResult = {
    isValid: true
}

export const validateInsolvencyNumber = (insolvencyNumber) => {
    var result = cloneDeep(defaultValidationResult)

    return result
}