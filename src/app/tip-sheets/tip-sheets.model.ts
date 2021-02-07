export type LanguageCSVRow = {
    languageType: number;
    languageCode: string;
    languageName: string;
    tipSheetNumber: number;
    title: string;
};

export type Language = {
    type: number;
    code: string;
    name: string;    
};

export type TipSheet = {
    title: string;
    thumnailSrc: string;
    pdfSrc: string;
};