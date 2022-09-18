describe("Payments test"), function() {
    beforeEach(function(){
        billAmtInput.value="500";
        tipAmtInput.value="10";
    });

    it("Should not add to total payment with empty input on submitPaymentInfo()", function () {
        billAmtInput.value='';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("Should not add to createCurPayment() if no tip input is given", function (){
        tipAmtInput.value='';
        let curPayment=createCurPayment();
        expect(curPayment).toEqual(undefined);
    });
    
    it("Should correctly total new and add new payment to allPayments when input is given to submitPaymentInfo()", function(){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('500');
        expect(allPayments['payment1'].tipAmt).toEqual('50');
        expect(allPayments['payment1'].tipPercent).toEqual('10');
    });

    it('Should create a new payment with initally provided values', function (){
        initalValues={
            billAmt:"500",
            tipAmt:"50",
            tipPercent:10
        }
        expect(createCurPayment()).toEqual(initialValues);
    });
    afterEach(function(){
        billAmtInput.value='';
        tipAmtInput.value='';
        paymentTbody.innerHTML='';
        summaryTds[0].innerHTML='';
        summaryTds[1].innerHTML='';
        summaryTds[2].innerHTML='';
        paymentId=0;
        allPayments={};
    })
}
