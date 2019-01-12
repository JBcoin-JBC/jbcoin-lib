declare function parseFeeUpdate(tx: any): {
    baseFeeJBC: string;
    referenceFeeUnits: any;
    reserveBaseJBC: string;
    reserveIncrementJBC: string;
};
export default parseFeeUpdate;
