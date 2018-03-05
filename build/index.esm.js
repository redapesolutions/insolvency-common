const AssetCategories = {};

AssetCategories[AssetCategories['balanceAtBank'] = 'Balance_At_Bank'] = 'balanceAtBank';
AssetCategories[AssetCategories['cashInHand'] = 'Cash_In_Hand'] = 'cashInHand';
AssetCategories[AssetCategories['marketableSecurities'] = 'Marketable_Securities'] = 'marketableSecurities';
AssetCategories[AssetCategories['billsReceivable'] = 'Bills_Receivable'] = 'billsReceivable';
AssetCategories[AssetCategories['tradeDebtors'] = 'Trade_Debtors'] = 'tradeDebtors';
AssetCategories[AssetCategories['loanAndAdvance'] = 'Loan_And_Advance'] = 'loanAndAdvance';
AssetCategories[AssetCategories['unpaidCalls'] = 'Unpaid_Calls'] = 'unpaidCalls';
AssetCategories[AssetCategories['stockInTrade'] = 'Stock_In_Trade'] = 'stockInTrade';
AssetCategories[AssetCategories['freeholdProperty'] = 'Freehold_Property'] = 'freeholdProperty';
AssetCategories[AssetCategories['leaseholdProperty'] = 'Leasehold_Property'] = 'leaseholdProperty';
AssetCategories[AssetCategories['plantAndProperty'] = 'Plant_And_Property'] = 'plantAndProperty';
AssetCategories[AssetCategories['furnitureFittings,UtensilsEtc'] = 'Furniture_Fittings,_Utensils_Etc'] = 'furnitureFittings,UtensilsEtc';
AssetCategories[AssetCategories['leaseholdProperty'] = 'Leasehold_Property'] = 'leaseholdProperty';
AssetCategories[AssetCategories['investmentOtherThanMarketableSecurities'] = 'Investment_Other_Than_Marketable_Securities'] = 'investmentOtherThanMarketableSecurities';
AssetCategories[AssetCategories['livestock'] = 'Livestock'] = 'livestock';
AssetCategories[AssetCategories['otherProperty'] = 'Other_Property'] = 'otherProperty';

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

export { AssetCategories, addToHistoryN, addToHistory, Groups, UsageCategories, States, Services, ParticipantSides, Languages };
//# sourceMappingURL=index.esm.js.map
