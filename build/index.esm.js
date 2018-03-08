const AssetCategories = {};

AssetCategories[AssetCategories['Balance at bank'] = 'BalanceAtBank'] = 'Balance at bank';
AssetCategories[AssetCategories['Cash in hand'] = 'CashInHand'] = 'Cash in hand';
AssetCategories[AssetCategories['Marketable securities'] = 'MarketableSecurities'] = 'Marketable securities';
AssetCategories[AssetCategories['Bills receivable'] = 'BillsReceivable'] = 'Bills receivable';
AssetCategories[AssetCategories['Trade debtors'] = 'TradeDebtors'] = 'Trade debtors';
AssetCategories[AssetCategories['Loan and advance'] = 'LoanAndAdvance'] = 'Loan and advance';
AssetCategories[AssetCategories['Unpaid calls'] = 'UnpaidCalls'] = 'Unpaid calls';
AssetCategories[AssetCategories['Stock in trade'] = 'StockInTrade'] = 'Stock in trade';
AssetCategories[AssetCategories['Freehold property'] = 'FreeholdProperty'] = 'Freehold property';
AssetCategories[AssetCategories['Leasehold property'] = 'LeaseholdProperty'] = 'Leasehold property';
AssetCategories[AssetCategories['Plant and property'] = 'PlantAndProperty'] = 'Plant and property';
AssetCategories[AssetCategories['Furniture, fittings, utensils, etc'] = 'FurnitureFittingsUtensilsEtc'] = 'Furniture, fittings, utensils, etc';
AssetCategories[AssetCategories['Investment other than marketable securities'] = 'InvestmentOtherThanMarketableSecurities'] = 'Investment other than marketable securities';
AssetCategories[AssetCategories['Livestock'] = 'Livestock'] = 'Livestock';
AssetCategories[AssetCategories['Other property'] = 'OtherProperty'] = 'Other property';

const getSingleAssetCategories = () => {
    let object = {};
    let regexp = new RegExp(/.*[ ].*/);
    for (let category in AssetCategories) {
        if (!category.match(regexp))
            object[category] = AssetCategories[category];
    }

    return object;
};

var isArray = require('lodash/isArray');
var isFinite = require('lodash/isFinite');
var isString = require('lodash/isString');
var cloneDeep = require('lodash/cloneDeep');
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
};

const validateSubmitAssets = (assets) => {
    let result = cloneDeep(defaultValidationResult);

    if (!isArray(assets) || assets.length <= 0) {
        result.isValid = false;
        result.assetsCollection.isValid = false;
        return result
    }

    let index = -1;

    for (let asset of assets) {
        index++;

        if (asset.amount !== null && (!isFinite(asset.amount) || asset.amount <= 0)) {
            result.isValid = false;
            result.amount.isValid = false;
            result.amount.invalidElementIndexes.push(index);
        }

        if (AssetCategories[asset.category] === undefined) {
            result.isValid = false;
            result.category.isValid = false;
            result.category.invalidElementIndexes.push(index);
        }

        if (!isString(asset.description) || asset.description.length <= 0) {
            result.isValid = false;
            result.description.isValid = false;
            result.description.invalidElementIndexes.push(index);
        }
    }

    return result
};

const ApplicationStatus = {};

ApplicationStatus[ApplicationStatus['Pending'] = 'pending'] = 'Pending';
ApplicationStatus[ApplicationStatus['Reviewing'] = 'reviewing'] = 'Reviewing';
ApplicationStatus[ApplicationStatus['Accepted'] = 'accepted'] = 'Accepted';
ApplicationStatus[ApplicationStatus['Rejected'] = 'rejected'] = 'Rejected';

const ApplicationType = {
    TravelingAbroad: 1
};

var cloneDeep$1 = require('lodash/cloneDeep');

const defaultValidationResult$1 = {
    isValid: true
};

const validateInsolvencyNumber = (insolvencyNumber) => {
    var result = cloneDeep$1(defaultValidationResult$1);

    return result
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

export { AssetCategories, getSingleAssetCategories, validateSubmitAssets, ApplicationStatus, ApplicationType, validateInsolvencyNumber, addToHistoryN, addToHistory, Groups, UsageCategories, States, Services, ParticipantSides, Languages };
//# sourceMappingURL=index.esm.js.map
