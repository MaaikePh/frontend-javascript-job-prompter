import {departments} from "./main.js";

// Opdracht 1a & 5c

console.log(`De afdeling Sales heeft ${departments.sales.numberOfEmployees} medewerkers.`);

// Opdracht 1b & 5c

console.log(`Marketing is een leuke afdeling om te werken. ${departments.marketing.description}`);

// Opdracht 1c & 5c

console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers`);

// Opdracht 1d & 5c

console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.jobs[1].description}`);

// Opdracht 2a & 5c

const userInput = prompt(`Over welke afdeling wil je meer informatie? Kies uit:\n
    marketing
    sales
    customer-service`);
console.log(userInput);

// Opdracht 2b & 2C uitgezet omdat ik die verbeterd heb in opdracht 4a

// switch (userInput) {
//     case "marketing":
//         console.log("Je koos" + userInput + ". " + departments.marketing.description);
//         break;
//     case "sales":
//         console.log("Je koos " + userInput + ". " + departments.sales.description);
//         break;
//     case "customer-service":
//         console.log("Je koos " + userInput + ". " + departments["customer-service"].description);
//         break;
//     default:
//         console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
// }

// // Opdracht 3a uitgezet omdat ik die verbeterd heb in opdracht 4b
//
// const userInputMarketing = prompt("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n" +
//     "0: " + departments.marketing.jobs[0].title + "\n" +
//     "1: " + departments.marketing.jobs[1].title + "\n" +
//     "2: " + departments.marketing.jobs[2].title + "\n" +
//     "3: " + departments.marketing.jobs[3].title);
//
// // Opdracht 3b & 3c uitgezet omdat ik die verbeterd heb in opdracht 4c
//
// switch (userInputMarketing) {
//     case "0":
//         console.log(`Je koos ${departments.marketing.jobs[0].title}. Een uitdagende rol! ${departments.marketing.jobs[0].description}`);
//         break;
//     case "1":
//         console.log(`Je koos ${departments.marketing.jobs[1].title}. Een uitdagende rol! ${departments.marketing.jobs[1].description}`);
//         break;
//     case "2":
//         console.log(`Je koos ${departments.marketing.jobs[2].title}. Een uitdagende rol! ${departments.marketing.jobs[2].description}`);
//         break;
//     case "3":
//         console.log(`Je koos ${departments.marketing.jobs[3].title}. Een uitdagende rol! ${departments.marketing.jobs[3].description}`);
//         break;
//     default:
//         console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
// }

// Opdracht 4a & 5b & 5c

const department = departments[userInput];

if (department) {
    console.log(`${userInput} is een leuke afdeling om te werken. Er werken op dit moment ${department.numberOfEmployees} medewerkers.`);
    document.getElementById("department-description").textContent = department.description;
} else {
    document.getElementById("error-message").textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
}

// Opdracht 4b & 5c

const chosenDepartment = departments[userInput];

if (chosenDepartment) {
    const userInput2 = prompt(`Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n
        0: ${chosenDepartment.jobs[0].title}
        1: ${chosenDepartment.jobs[1].title}
        2: ${chosenDepartment.jobs[2].title}
        3: ${chosenDepartment.jobs[3].title}`);

    // Opdracht 4c & 5b

    switch (userInput2) {
        case "0":
        case "1":
        case "2":
        case "3":
            const chosenJob = chosenDepartment.jobs[Number(userInput2)];
            console.log(`Je koos ${chosenJob.title}. Een uitdagende rol! ${chosenJob.description}`);
            document.getElementById("role-title").textContent = chosenJob.title;
            document.getElementById("role-description").textContent = chosenJob.description;
            break;
        default:
            document.getElementById("error-message").textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
    }
}

// Opdracht 5a

// document.getElementById("role-title").textContent = "Maaike Phielix";
// document.getElementById("department-description").textContent = "Pannenkoeken";