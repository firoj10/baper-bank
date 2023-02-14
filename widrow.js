document.getElementById('btn-widthdro').addEventListener('click', function(){

   const widthdroFildElement =  document.getElementById('Withdrow-feild');
   const widthdroFildElementString = widthdroFildElement.value;
   const widthdroFildElementValue = parseFloat(widthdroFildElementString);

   const widthdroTotal =  document.getElementById('withdrow_total');
   const widthdroTotalString = widthdroTotal.innerText;
   const widthdroTotalValue = parseFloat(widthdroTotalString);


   const widthdroTotalAmmount = widthdroFildElementValue + widthdroTotalValue;
   widthdroTotal.innerText = widthdroTotalAmmount;

   const balanceTotal =  document.getElementById('balance_total');
   const balanceTotalString = balanceTotal.innerText;
   const balanceTotalValue = parseFloat(balanceTotalString);

   const balanceTotalAmmount = balanceTotalValue - widthdroFildElementValue;
   balanceTotal.innerText = balanceTotalAmmount;
   widthdroFildElement.value = '';

})