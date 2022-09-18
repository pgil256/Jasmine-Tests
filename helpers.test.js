describe("Testing helper functions", function() {
    beforeEach(function(){
        billAmtInput.value=500;
        tipAmtInput.value=50;
        submitPaymentInfo();
    });

    it("Should correctly caluculate total tip payments", function(){
        expect(sumPaymentTotal('tipAmt').toEqual(50));
        billAmtInput.value=1000;
        tipAmtInput.value=100;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(150);
    });

    it("Should total all bills", function(){
        expect(sumPaymentTotal('billAmt').toEqual(500));
        billAmtInput.value=1000;
        tipAmtInput.value=100;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(1500);
    });
    
    it("Should sum tip percent", function(){
        expect(sumPaymentTotal('tipPercent').toEqual(10));
        billAmtInput.value=1500;
        tipAmtInput.value=500;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it("Should create a delete button", function() {
        let newTr = document.createElement('tr');
        appendTd(newTr,'testButton');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual("testButton");
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
});

