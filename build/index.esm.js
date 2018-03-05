const AssetCategories = {};

AssetCategories[AssetCategories['Loan'] = 'loan'] = 'Loan';
AssetCategories[AssetCategories['CashInHand'] = 'cashInHand'] = 'CashInHand';
AssetCategories[AssetCategories['LeaseholdProperty'] = 'leaseHoldProperty'] = 'LeaseholdProperty';

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
