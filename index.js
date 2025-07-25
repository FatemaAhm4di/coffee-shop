function startOrder() {

    // Login

    let userName = prompt("Enter username:");
    let password = prompt("Enter password:");

    if ((userName === "admin" || userName === "user") && password === "1234") {
        alert("Welcome " + userName + "!");


        // Order

        let customerName = prompt("What is your name?");
        let customerAge = parseInt(prompt("How old are you?"));
        let coffeeType = prompt("What type of coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
        let cupCount = parseInt(prompt("How many cups would you like?"));


        // Price

        let pricePerCup = 0;
        if (coffeeType === "espresso") {
            pricePerCup = 2.5;
        } else if (coffeeType === "latte") {
            pricePerCup = 3.5;
        } else if (coffeeType === "cappuccino") {
            pricePerCup = 4.0;
        } else {
            alert("Invalid coffee type!");
            throw new Error("Invalid coffee type. Stopping program.");
        }

        // Calculate totals

        let initialTotal = pricePerCup * cupCount;


        // Discount

        let discount = 0;
        if (customerAge < 18 || customerAge > 60) {
            discount = initialTotal * 0.10;
        }

        let finalTotal = initialTotal - discount;


        // Summary

        alert(
            "Hello " + customerName + "!\n" +
            "You ordered " + cupCount + " cup(s) of " + coffeeType + ".\n" +
            "Initial total: $" + initialTotal.toFixed(2) + "\n" +
            "Discount: $" + discount.toFixed(2) + "\n" +
            "Final total: $" + finalTotal.toFixed(2)
        );

        //splitting

        let numberOfPeople = parseInt(prompt("How many people will split the bill? (1, 2, or 3)"));
        let tipPercent = parseInt(prompt("How much tip would you like to add? (0, 5, 10, or 15)"));

        if (![1, 2, 3].includes(numberOfPeople)) {
            alert("Invalid number of people!");
            throw new Error("Invalid number of people.");
        }

        if (![0, 5, 10, 15].includes(tipPercent)) {
            alert("Invalid tip percentage!");
            throw new Error("Invalid tip percentage.");
        }

        //Calculate tip amount

        let tipAmount = finalTotal * (tipPercent / 100);

        let totalWithtip = finalTotal + tipAmount;

        let amountPerPerson = totalWithtip / numberOfPeople;

        //shoe summary

        alert(
            "Tip: $" + tipAmount.toFixed(2) + "\n" +
            "Total with tip: $" + totalWithtip.toFixed(2) + "\n" +
            "Split between " + numberOfPeople + " person(s): $" + amountPerPerson.toFixed(2) + " each"
        );

    } else {
        alert("Access Denied");
        throw new Error("Unauthorized access.");
    }

}