

export declare enum DocumentCategoryType {
    Company_Profiles,
    Financial_Comparison,
    Certificate_of_Incorporation,
    Certificate_of_Change_of_Name,
    Certificate_of_Conversion_of_Company,
    Corporate_Form_Images,
    Attestation_of_Company_Good_Standing,
    Business_Profiles,
    Business_Registration_Certificate,
    Business_Termination_Letter,
    Business_Form_Images,
    Particulars_of_Directors_Officers,
    Particulars_of_Registered_Address,
    Particulars_of_Share_Capital,
    Particulars_of_Shareholder,
}

export interface DocumentSummary {
    title: string,
    category: DocumentCategoryType,
    price: number,
}
export declare const buildDocument: (title: string, category: DocumentCategoryType) => DocumentSummary

export declare const DefaultDocumentTypes: {
    Company: DocumentSummary[],
    Business: DocumentSummary[]
}

export declare enum CategoryPrice {
    Company_Profiles,
    Financial_Comparison,
    Certificate_of_Incorporation,
    Certificate_of_Change_of_Name,
    Certificate_of_Conversion_of_Company,
    Corporate_Form_Images,
    Attestation_of_Company_Good_Standing,
    Business_Profiles,
    Business_Registration_Certificate,
    Business_Termination_Letter,
    Business_Form_Images,
    Particulars_of_Directors_Officers,
    Particulars_of_Registered_Address,
    Particulars_of_Share_Capital,
    Particulars_of_Shareholder,
}

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