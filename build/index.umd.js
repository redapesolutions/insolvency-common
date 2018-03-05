(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash/findKey')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash/findKey'], factory) :
	(factory((global.axcessCommon = {}),global.findKey));
}(this, (function (exports,findKey) { 'use strict';

findKey = findKey && findKey.hasOwnProperty('default') ? findKey['default'] : findKey;

const addToHistoryN = n => (value, old) => [value, ...old.filter(h => h !== value).slice(0, n - 1)];

const addToHistory = addToHistoryN(10);

const CategoryPrice = {
  Company_Profiles: 10,
  Financial_Comparison: 20,
  Certificate_of_Incorporation: 30,
  Certificate_of_Change_of_Name: 40,
  Certificate_of_Conversion_of_Company: 50,
  Corporate_Form_Images: 60,
  Attestation_of_Company_Good_Standing: 70,
  Business_Profiles: 80,
  Business_Registration_Certificate: 90,
  Business_Termination_Letter: 100,
  Business_Form_Images: 110,
  Particulars_of_Directors_Officers: 120,
  Particulars_of_Registered_Address: 130,
  Particulars_of_Share_Capital: 140,
  Particulars_of_Shareholder: 150,
};

/** With reverse */
const DocumentCategoryType = {};

DocumentCategoryType[DocumentCategoryType['Company_Profiles'] = 1] = 'Company_Profiles';
DocumentCategoryType[DocumentCategoryType['Financial_Comparison'] = 2] = 'Financial_Comparison';
DocumentCategoryType[DocumentCategoryType['Certificate_of_Incorporation'] = 3] = 'Certificate_of_Incorporation';
DocumentCategoryType[DocumentCategoryType['Certificate_of_Change_of_Name'] = 4] = 'Certificate_of_Change_of_Name';
DocumentCategoryType[DocumentCategoryType['Certificate_of_Conversion_of_Company'] = 5] = 'Certificate_of_Conversion_of_Company';
DocumentCategoryType[DocumentCategoryType['Corporate_Form_Images'] = 6] = 'Corporate_Form_Images';
DocumentCategoryType[DocumentCategoryType['Attestation_of_Company_Good_Standing'] = 7] = 'Attestation_of_Company_Good_Standing';
DocumentCategoryType[DocumentCategoryType['Business_Profiles'] = 8] = 'Business_Profiles';
DocumentCategoryType[DocumentCategoryType['Business_Registration_Certificate'] = 9] = 'Business_Registration_Certificate';
DocumentCategoryType[DocumentCategoryType['Business_Termination_Letter'] = 10] = 'Business_Termination_Letter';
DocumentCategoryType[DocumentCategoryType['Business_Form_Images'] = 11] = 'Business_Form_Images';
DocumentCategoryType[DocumentCategoryType['Particulars_of_Directors_Officers'] = 12] = 'Particulars_of_Directors_Officers';
DocumentCategoryType[DocumentCategoryType['Particulars_of_Registered_Address'] = 13] = 'Particulars_of_Registered_Address';
DocumentCategoryType[DocumentCategoryType['Particulars_of_Share_Capital'] = 14] = 'Particulars_of_Share_Capital';
DocumentCategoryType[DocumentCategoryType['Particulars_of_Shareholder'] = 15] = 'Particulars_of_Shareholder';


const buildDocument = (title, category) => {
  const categoryKey = findKey(DocumentCategoryType, x => x === category);
  return {
    title,
    category,
    price: CategoryPrice[categoryKey],
  }
};

const DefaultDocumentTypes = {
  Company: [
    buildDocument('COMPANY PROFILE', 1),
    buildDocument('CERTIFICATES OF INCORPORATION/REGISTRATION', 3),
    buildDocument('PARTICULAR OF REGISTERED ADDRESS', 13),
    buildDocument('PARTICULAR OF DIRECTORS/OFFICERS', 12),
  ],
  Business: [
    buildDocument('BUSINESS PROFILE', 8),
  ]
};

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

exports.addToHistoryN = addToHistoryN;
exports.addToHistory = addToHistory;
exports.DocumentCategoryType = DocumentCategoryType;
exports.buildDocument = buildDocument;
exports.DefaultDocumentTypes = DefaultDocumentTypes;
exports.CategoryPrice = CategoryPrice;
exports.Groups = Groups;
exports.UsageCategories = UsageCategories;
exports.States = States;
exports.Services = Services;
exports.ParticipantSides = ParticipantSides;
exports.Languages = Languages;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
