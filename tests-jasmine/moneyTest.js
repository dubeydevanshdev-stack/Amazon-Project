import {formatCurrency} from "../scripts/utils/money.js";

describe('test suit: formatCurrency',()=>{
    it('converts cent into dollar',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
        expect(formatCurrency(0)).toEqual('0.00');
    });

     it('converts 0 cents',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

     it('rounds up nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});