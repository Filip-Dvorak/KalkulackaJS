$(document).ready(function () {
    let currentInput = '';

    $('.numberButton').click(function () {
        currentInput += $(this).text();
        $('#cislo').val(currentInput);
    });

    $('#buttonPlus, #buttonMinus, #buttonKrat, #buttonDeleno').click(function () {
        currentInput += $(this).text();
        $('#cislo').val(currentInput);
    });

    $('#buttonFaktorial').click(function () {
        currentInput = faktorial(parseInt(currentInput));
        $('#cislo').val(currentInput);
    });

    $('#buttonCe').click(function () {
        currentInput = '';
        $('#cislo').val('0');
    });

    $('#buttonRovnase').click(function () {
        try {
            currentInput = eval(currentInput);
            $('#cislo').val(currentInput);
        } catch (error) {
            $('#cislo').val('Error');
        }
    });

    // Funkce pro výpočet faktoriálu
    function faktorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * faktorial(n - 1);
        }
    }
});
