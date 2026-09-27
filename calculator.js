let display = document.getElementById("display");

let buttons = document.querySelectorAll(".buttons button");

let paymentPopup =
    document.getElementById("paymentPopup");

let payBtn =
    document.getElementById("payBtn");

let closeBtn =
    document.getElementById("closeBtn");

let paymentMessage =
    document.getElementById("paymentMessage");


let firstNumber = "";

let operator = "";

let secondNumber = "";

let result = "";



/* Number Function */

function showNumber(value) {

    if (operator === "") {

        firstNumber =
            firstNumber + value;

        display.value =
            firstNumber;

    }

    else {

        secondNumber =
            secondNumber + value;

        display.value =
            firstNumber +
            " " +
            operator +
            " " +
            secondNumber;

    }

}



/* Operator Function */

function chooseOperator(value) {

    if (firstNumber === "") {
        return;
    }

    operator = value;

    display.value =
        firstNumber +
        " " +
        operator;

}



/* Calculate */

function calculate() {

    if (
        firstNumber === "" ||
        operator === "" ||
        secondNumber === ""
    ) {
        return;
    }


    if (operator === "+") {

        result =
            Number(firstNumber) +
            Number(secondNumber);

    }

    else if (operator === "-") {

        result =
            Number(firstNumber) -
            Number(secondNumber);

    }

    else if (operator === "*") {

        result =
            Number(firstNumber) *
            Number(secondNumber);

    }

    else if (operator === "/") {

        result =
            Number(firstNumber) /
            Number(secondNumber);

    }


    /*
       Result ko directly display
       nahi karna.

       Pehle payment popup show hoga.
    */

    paymentPopup.style.display = "flex";

}



/* Clear */

function clearCalculator() {

    firstNumber = "";

    operator = "";

    secondNumber = "";

    result = "";

    display.value = "";

}



/* Calculator Buttons */

buttons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            let value =
                button.textContent;


            if (
                value >= "0" &&
                value <= "9"
            ) {

                showNumber(value);

            }


            else if (
                value === "+" ||
                value === "-" ||
                value === "*" ||
                value === "/"
            ) {

                chooseOperator(value);

            }


            else if (value === "=") {

                calculate();

            }


            else if (value === "C") {

                clearCalculator();

            }

        }
    );

});



/* Close Payment Popup */

closeBtn.addEventListener(
    "click",
    function() {

        paymentPopup.style.display =
            "none";

    }
);



/* Fake Payment */

payBtn.addEventListener(
    "click",
    function() {

        paymentMessage.textContent =
            "Payment successful! 🎉";

        paymentMessage.style.color =
            "green";


        setTimeout(function() {

            paymentPopup.style.display =
                "none";


            display.value =
                result;


            firstNumber = result;

            operator = "";

            secondNumber = "";

        }, 1000);

    }
);