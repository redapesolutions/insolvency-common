const AssetCategories = {};

AssetCategories[AssetCategories['balanceAtBank'] = 'BalanceAtBank'] = 'balanceAtBank';
AssetCategories[AssetCategories['cashInHand'] = 'CashInHand'] = 'cashInHand';
AssetCategories[AssetCategories['marketableSecurities'] = 'MarketableSecurities'] = 'marketableSecurities';
AssetCategories[AssetCategories['billsReceivable'] = 'BillsReceivable'] = 'billsReceivable';
AssetCategories[AssetCategories['tradeDebtors'] = 'TradeDebtors'] = 'tradeDebtors';
AssetCategories[AssetCategories['loanAndAdvance'] = 'LoanAndAdvance'] = 'loanAndAdvance';
AssetCategories[AssetCategories['unpaidCalls'] = 'UnpaidCalls'] = 'unpaidCalls';
AssetCategories[AssetCategories['stockInTrade'] = 'StockInTrade'] = 'stockInTrade';
AssetCategories[AssetCategories['freeholdProperty'] = 'FreeholdProperty'] = 'freeholdProperty';
AssetCategories[AssetCategories['leaseholdProperty'] = 'LeaseholdProperty'] = 'leaseholdProperty';
AssetCategories[AssetCategories['plantAndProperty'] = 'PlantAndProperty'] = 'plantAndProperty';
AssetCategories[AssetCategories['furnitureFittingsUtensilsEtc'] = 'FurnitureFittingsUtensilsEtc'] = 'furnitureFittingsUtensilsEtc';
AssetCategories[AssetCategories['investmentOtherThanMarketableSecurities'] = 'InvestmentOtherThanMarketableSecurities'] = 'investmentOtherThanMarketableSecurities';
AssetCategories[AssetCategories['livestock'] = 'Livestock'] = 'livestock';
AssetCategories[AssetCategories['otherProperty'] = 'OtherProperty'] = 'otherProperty';

const getSingleAssetCategories = () => {
    let object = {};
    let regexp = new RegExp(/^[A-Z]/);
    for(let category in AssetCategories){
        if(category.match(regexp))
            object[category] = AssetCategories[category];
    }

    return object;
};

const ApplicationStatus = {};

ApplicationStatus[ApplicationStatus['Pending'] = 'pending'] = 'Pending';
ApplicationStatus[ApplicationStatus['Reviewing'] = 'reviewing'] = 'Reviewing';
ApplicationStatus[ApplicationStatus['Accepted'] = 'accepted'] = 'Accepted';
ApplicationStatus[ApplicationStatus['Rejected'] = 'rejected'] = 'Rejected';

const ApplicationType = {
    TravelingAbroad: 1
};

const addToHistoryN = n => (value, old) => [value, ...old.filter(h => h !== value).slice(0, n - 1)];

const addToHistory = addToHistoryN(10);

const Groups = {
    Web: "Web",
    Partner: "Partner",
    Admin: "Admin"
};

const UsageCategories = {
    Search: "search",
    BulkSearch: "bulkSearch",
    Find: "find",
    FindAll: "findAll",
    Document: "document",
    Details: "details",
    BulkDetails: "bulkDetails"
};

/** With reverse */
const States = {};

States[States['JOHOR'] = 1] = 'JOHOR';
States[States['KEDAH'] = 2] = 'KEDAH';
States[States['KELANTAN'] = 3] = 'KELANTAN';
States[States['MALACCA'] = 4] = 'MALACCA';
States[States['NEGERI_SEMBILAN'] = 5] = 'NEGERI_SEMBILAN';
States[States['PAHANG'] = 6] = 'PAHANG';
States[States['PERAK'] = 7] = 'PERAK';
States[States['PERLIS'] = 8] = 'PERLIS';
States[States['PENANG'] = 9] = 'PENANG';
States[States['SABAH'] = 10] = 'SABAH';
States[States['SARAWAK'] = 11] = 'SARAWAK';
States[States['SELANGOR'] = 12] = 'SELANGOR';
States[States['TERENGGANU'] = 13] = 'TERENGGANU';

//Federal territories
States[States['KUALA_LUMPUR'] = 14] = 'KUALA_LUMPUR';
States[States['LABUAN'] = 15] = 'LABUAN';
States[States['PUTRAJAYA'] = 16] = 'PUTRAJAYA';

const Services = {
    SSM: 'ssm',
    eCourts: 'eCourts',
    insolvency: 'insolvency'
};

const ParticipantSides = {
    plaintiff: 'plaintiff',
    defendant: 'defendant'
};

const Languages = {};

Languages[Languages['English'] = 'EN'] = 'English';
Languages[Languages['BahasaMalaya'] = 'BM'] = 'BahasaMalaya';

export { AssetCategories, getSingleAssetCategories, ApplicationStatus, ApplicationType, addToHistoryN, addToHistory, Groups, UsageCategories, States, Services, ParticipantSides, Languages };
//# sourceMappingURL=index.esm.js.map
