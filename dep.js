
document.getElementById('btn-deposite').addEventListener('click', function(){
    const newDepositAmmount =  getInputFieldValueById('deposite-feild');
    const previousDepositAmmount = getTextElementValueById('deposite_total');
    const totaldepositAllAmmount = previousDepositAmmount + newDepositAmmount;
    setTextElementValueById('deposite_total', totaldepositAllAmmount);

    const previosBalanceAmmount = getTextElementValueById('balance_total');
     const newTotalBalance = previosBalanceAmmount + totaldepositAllAmmount;
     setTextElementValueById('balance_total', newTotalBalance);



});