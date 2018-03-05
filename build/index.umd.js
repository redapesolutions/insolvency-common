(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.axcessCommon = {})));
}(this, (function (exports) { 'use strict';

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
AssetCategories[AssetCategories['leaseholdProperty'] = 'Leasehold_Property'] = 'leaseholdProperty';
AssetCategories[AssetCategories['investmentOtherThanMarketableSecurities'] = 'InvestmentOtherThanMarketableSecurities'] = 'investmentOtherThanMarketableSecurities';
AssetCategories[AssetCategories['livestock'] = 'Livestock'] = 'livestock';
AssetCategories[AssetCategories['otherProperty'] = 'OtherProperty'] = 'otherProperty';

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

exports.AssetCategories = AssetCategories;
exports.addToHistoryN = addToHistoryN;
exports.addToHistory = addToHistory;
exports.Groups = Groups;
exports.UsageCategories = UsageCategories;
exports.States = States;
exports.Services = Services;
exports.ParticipantSides = ParticipantSides;
exports.Languages = Languages;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
