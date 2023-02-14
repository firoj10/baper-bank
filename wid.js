document.getElementById('btn-widthdro').addEventListener('click', function(){
    const newWidrowAmmount =  getInputFieldValueById('Withdrow-feild');
   const previousWidrowAmmount =  getTextElementValueById('withdrow_total');
   const totalWidrowAmmount = newWidrowAmmount + previousWidrowAmmount ;
   setTextElementValueById('withdrow_total', totalWidrowAmmount)

   const previosBalanceAmmount = getTextElementValueById('balance_total');
   const totalNewBlance = previosBalanceAmmount - newWidrowAmmount;

   setTextElementValueById('balance_total', totalNewBlance)


})