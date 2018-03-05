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
    FurnitureFittings,UtensilsEtc = 'furnitureFittings,UtensilsEtc',
    LeaseholdProperty = 'leaseholdProperty',
    InvestmentOtherThanMarketableSecurities = 'investmentOtherThanMarketableSecurities',
    Livestock = 'livestock',
    OtherProperty = 'otherProperty',
    
}

export interface AssetsCollection {
    assets: Asset[]
}