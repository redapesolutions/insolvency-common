export declare enum States {
    JOHOR,
    KEDAH,
    KELANTAN,
    MALACCA,
    NEGERI_SEMBILAN,
    PAHANG,
    PERAK,
    PERLIS,
    PENANG,
    SABAH,
    SARAWAK,
    SELANGOR,
    TERENGGANU,
    //Federal territories
    KUALA_LUMPUR,
    LABUAN,
    PUTRAJAYA
}

export declare enum Services {
    SSM,
    eCourts,
    insolvency
}

export declare enum UsageCategories {
    Search,
    BulkSearch,
    Find,
    FindAll,
    Document,
    Details,
    BulkDetails
}

export declare enum Groups {
    Web,
    Partner,
    Admin
}

export declare enum ParticipantSides {
    plaintiff,
    defendant
}

export declare enum Languages {
    English,
    BahasaMalaya
}

export declare enum CountryCodes {
    Malaysia
}

export declare enum CountryPhoneCodes {
    Malaysia
}

export interface Asset {
    //Three first are avilable after saving to DB
    AssetId?: string
    UserId?: string
    created?: number
    category: AssetCategories
    description: string
    amount: number
}

export declare enum AssetCategories {
    BalanceAtBank = 'balanceAtBank',
    CashInHand = 'cashInHand',
    MarketableSecurities = 'marketableSecurities',
    BillsReceivable = 'billsReceivable',
    TradeDebtors = 'tradeDebtors',
    LoanAndAdvance = 'loanAndAdvance',
    UnpaidCalls = 'unpaidCalls',
    StockInTrade = 'stockInTrade',
    FreeholdProperty = 'freeholdProperty',
    LeaseholdProperty = 'leaseholdProperty',
    PlantAndProperty = 'plantAndProperty',
    FurnitureFittingsUtensilsEtc = 'furnitureFittingsUtensilsEtc',
    InvestmentOtherThanMarketableSecurities = 'investmentOtherThanMarketableSecurities',
    Livestock = 'livestock',
    OtherProperty = 'otherProperty',
}

export declare enum ApplicationType {
    TravelingAbroad,
    WorkWithFamily
}

export interface AssetsCollection {
    assets: Asset[]
}

export declare enum ApplicationStatus {
    Pending,
    Reviewing,
    Accepted,
    Rejected
}

interface IValidationResult {
    isValid: boolean,
}

export interface ISubmitAssetsValidationResult extends IValidationResult {
    assetsCollection: {
        isValid: boolean
    },
    amount: {
        isValid: boolean,
        invalidElementIndexes: number[]
    },
    category: {
        isValid: boolean,
        invalidElementIndexes: number[]
    },
    description: {
        isValid: boolean,
        invalidElementIndexes: number[]
    },
}

export interface IInsolvencyNumberValidationResult extends IValidationResult {
}


export declare function validateSubmitAssets (assets: Asset[]): ISubmitAssetsValidationResult
export declare function validateInsolvencyNumber (insolvencyNumber: string): IInsolvencyNumberValidationResult