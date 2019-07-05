const {expect}=require ('chai');
const {sum,subtract}=require('../calculator');
it('expect sum (1,2) to be equal to 3',()=>{
    const expected=3;
    const actual=sum(1,2);
    expect(actual).to.be.eq(expected);
});

it('expect sum (-1,-2) to be equal to -3',()=>{
    const expected=-3;
    const actual=sum(-1,-2);
    expect(actual).to.be.eq(expected);
});
it ('expect sum (0,1) to be equal to 1',()=>{
    const expected=1;
    const actual=sum(0,1);
    expect(actual).to.be.eq(expected);
});