
function cerber(num1, num2){
    let additionResult = num1 + num2;
    if (additionResult >= 0){
    console.log('Wynik dodawania wynosi', additionResult);
    }
    else {console.log("Wynik jest nieprawidłowy");
}
    let subtractionResult = num1 - num2;
    if (subtractionResult >= 0){
    console.log('Wynik odejmowania wynosi', subtractionResult);
}
    else {console.log("Wynik jest nieprawidłowy");
}
    let multiplicationResult = num1 * num2;
    if (multiplicationResult >= 0){
    console.log('Wynik mnożenia wynosi', multiplicationResult)
    }
    else {console.log("Wynik jest nieprawidłowy");
}
}
//pytanie: czy w powyższym lepiej użyć deklaracji "let", czy nie?


console.log(cerber(2, 3));