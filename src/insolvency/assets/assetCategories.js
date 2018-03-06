export const AssetCategories = {}

AssetCategories[AssetCategories['balanceAtBank'] = 'BalanceAtBank'] = 'balanceAtBank'
AssetCategories[AssetCategories['cashInHand'] = 'CashInHand'] = 'cashInHand'
AssetCategories[AssetCategories['marketableSecurities'] = 'MarketableSecurities'] = 'marketableSecurities'
AssetCategories[AssetCategories['billsReceivable'] = 'BillsReceivable'] = 'billsReceivable'
AssetCategories[AssetCategories['tradeDebtors'] = 'TradeDebtors'] = 'tradeDebtors'
AssetCategories[AssetCategories['loanAndAdvance'] = 'LoanAndAdvance'] = 'loanAndAdvance'
AssetCategories[AssetCategories['unpaidCalls'] = 'UnpaidCalls'] = 'unpaidCalls'
AssetCategories[AssetCategories['stockInTrade'] = 'StockInTrade'] = 'stockInTrade'
AssetCategories[AssetCategories['freeholdProperty'] = 'FreeholdProperty'] = 'freeholdProperty'
AssetCategories[AssetCategories['leaseholdProperty'] = 'LeaseholdProperty'] = 'leaseholdProperty'
AssetCategories[AssetCategories['plantAndProperty'] = 'PlantAndProperty'] = 'plantAndProperty'
AssetCategories[AssetCategories['furnitureFittingsUtensilsEtc'] = 'FurnitureFittingsUtensilsEtc'] = 'furnitureFittingsUtensilsEtc'
AssetCategories[AssetCategories['investmentOtherThanMarketableSecurities'] = 'InvestmentOtherThanMarketableSecurities'] = 'investmentOtherThanMarketableSecurities'
AssetCategories[AssetCategories['livestock'] = 'Livestock'] = 'livestock'
AssetCategories[AssetCategories['otherProperty'] = 'OtherProperty'] = 'otherProperty'

export const getSingleAssetCategories = () => {
    let object = {}
    let regexp = new RegExp(/^[A-Z]/)
    for(let category in AssetCategories){
        if(category.match(regexp))
            object[category] = AssetCategories[category]
    }

    return object;
}