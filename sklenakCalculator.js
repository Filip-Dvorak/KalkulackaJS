var probihajiciVypocet=false;//proměnná pro uložení info, jestli bylo aktuálně stisknuto nějaké tlačítko s operací...
function spocitat(){
    //TODO výpočet zadaného příkladu
    alert('tahle kalkulačka zatím umí jen zapisovat čísla...');
}
$(document).ready(function(){
    var numberInput=$('#cislo');
    //reakce na stisknutí tlačítka s číslem...
    $('.numberButton').click(function(){
        var aktualniCislo=$(this).text();
        var numberInputVal=numberInput.val();
        if (probihajiciVypocet){
            spocitat();
            numberInputVal=0;
        }
        if (numberInputVal==0 && aktualniCislo>0){
            numberInputVal=aktualniCislo;
        }else if(numberInputVal>0){
            numberInputVal+=aktualniCislo;
        }
        numberInput.val(numberInputVal);
    });
    $('#buttonFaktorial').click(function(){
        //TODO spočítání faktoriálu u čísla, které je aktuálně zobrazené na displeji
    });
    //TODO doplnění reakcí na tlačítka, která představují jednotlivé matematické operace (pozor na prioritu násobení před sčítáním!)
    $('#buttonRovnase').click(function(){
        spocitat();
    });
    $('#buttonCe').click(function(){
        numberInput.val(0);
        probihajiciVypocet=false;
    });
});