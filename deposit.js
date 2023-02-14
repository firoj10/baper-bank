document.getElementById('btn-deposite').addEventListener('click', function(){

   const depositeFildElement =  document.getElementById('deposite-feild');
   const depositeFildElementStrind = depositeFildElement.value;
   const depositeFildElementValue = parseFloat(depositeFildElementStrind);

   const depositeDepositeTotal =  document.getElementById('deposite_total');
   const depositeDepositeTotalString = depositeDepositeTotal.innerText;
   const depositeDepositeTotalValue = parseFloat(depositeDepositeTotalString);

   const totalDepositeAmmount  =  depositeFildElementValue + depositeDepositeTotalValue;
   depositeDepositeTotal.innerText = totalDepositeAmmount;


   const balanceTotal =  document.getElementById('balance_total');
   const balanceTotalString = balanceTotal.innerText;
   const balanceTotalValue = parseFloat(balanceTotalString);

  const totalBalanceAmmount = balanceTotalValue + depositeFildElementValue;
  balanceTotal.innerText = totalBalanceAmmount;
  depositeFildElement.value = '';
});