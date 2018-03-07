export const AssetCategories = {}

AssetCategories[AssetCategories['Balance at bank'] = 'BalanceAtBank'] = 'Balance at bank'
AssetCategories[AssetCategories['Cash in hand'] = 'CashInHand'] = 'Cash in hand'
AssetCategories[AssetCategories['Marketable securities'] = 'MarketableSecurities'] = 'Marketable securities'
AssetCategories[AssetCategories['Bills receivable'] = 'BillsReceivable'] = 'Bills receivable'
AssetCategories[AssetCategories['Trade debtors'] = 'TradeDebtors'] = 'Trade debtors'
AssetCategories[AssetCategories['Loan and advance'] = 'LoanAndAdvance'] = 'Loan and advance'
AssetCategories[AssetCategories['Unpaid calls'] = 'UnpaidCalls'] = 'Unpaid calls'
AssetCategories[AssetCategories['Stock in trade'] = 'StockInTrade'] = 'Stock in trade'
AssetCategories[AssetCategories['Freehold property'] = 'FreeholdProperty'] = 'Freehold property'
AssetCategories[AssetCategories['Leasehold property'] = 'LeaseholdProperty'] = 'Leasehold property'
AssetCategories[AssetCategories['Plant and property'] = 'PlantAndProperty'] = 'Plant and property'
AssetCategories[AssetCategories['Furniture, fittings, utensils, etc'] = 'FurnitureFittingsUtensilsEtc'] = 'Furniture, fittings, utensils, etc'
AssetCategories[AssetCategories['Investment other than marketable securities'] = 'InvestmentOtherThanMarketableSecurities'] = 'Investment other than marketable securities'
AssetCategories[AssetCategories['Livestock'] = 'Livestock'] = 'Livestock'
AssetCategories[AssetCategories['Other property'] = 'OtherProperty'] = 'Other property'

export const getSingleAssetCategories = () => {
    let object = {}
    let regexp = new RegExp(/.*[ ].*/)
    for (let category in AssetCategories) {
        if (!category.match(regexp))
            object[category] = AssetCategories[category]
    }

    return object;
}

var isArray = require('lodash/isArray')
var isNumber = require('lodash/isNumber')
var isString = require('lodash/isString')
var cloneDeep = require('lodash/cloneDeep')
const defaultValidationResult = {
    isValid: true,
    assetsCollection: {
        isValid: true
    },
    amount: {
        isValid: true,
        invalidElementIndexes: []
    },
    category: {
        isValid: true,
        invalidElementIndexes: []
    },
    description: {
        isValid: true,
        invalidElementIndexes: []
    },
}

export const validateSubmitAssets = (assets) => {
    let result = cloneDeep(defaultValidationResult)

    if (!isArray(assets) || assets.length <= 0) {
        result.isValid = false
        result.assetsCollection.isValid = false
        return result
    }

    let index = -1;

    for (let asset of assets) {
        index++

        if (asset.amount !== null && (!isNumber(asset.amount) || asset.amount <= 0)) {
            result.isValid = false
            result.amount.isValid = false
            result.amount.invalidElementIndexes.push(index)
        }

        if (AssetCategories[asset.category] === undefined) {
            result.isValid = false
            result.category.isValid = false
            result.category.invalidElementIndexes.push(index)
        }

        if (!isString(asset.description) || asset.description.length <= 0) {
            result.isValid = false
            result.description.isValid = false
            result.description.invalidElementIndexes.push(index)
        }
    }

    return result
}