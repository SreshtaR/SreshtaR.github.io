document.addEventListener('DOMContentLoaded', function() {

    let hubble_1 = document.querySelector('#hubble_1');
    document.querySelector('#hubble_1').onclick = function() {
        hubble_1.style.backgroundColor = 'red';
        document.getElementById("p1").innerHTML = "Incorrect";
    };

    let saturn_1 = document.querySelector('#saturn_1');
    document.querySelector('#saturn_1').onclick = function() {
        saturn_1.style.backgroundColor = 'red';
        document.getElementById("p1").innerHTML = "Incorrect";
    };

    let jupiter_1 = document.querySelector('#jupiter_1');
    document.querySelector('#jupiter_1').onclick = function() {
        jupiter_1.style.backgroundColor = 'green';
        document.getElementById("p1").innerHTML = "Correct!";
    };

    let ans21 = document.querySelector('#ans21');
    document.querySelector('#ans21').onclick = function() {
        ans21.style.backgroundColor = 'green';
        document.getElementById("p2").innerHTML = "Correct!";
    };

    let ans22 = document.querySelector('#ans22');
    document.querySelector('#ans22').onclick = function() {
        ans22.style.backgroundColor = 'red';
        document.getElementById("p2").innerHTML = "Incorrect";
    };

    let ans23 = document.querySelector('#ans23');
    document.querySelector('#ans23').onclick = function() {
        ans23.style.backgroundColor = 'red';
        document.getElementById("p2").innerHTML = "Incorrect";
    };

    let ans31 = document.querySelector('#ans31');
    document.querySelector('#ans31').onclick = function() {
        ans31.style.backgroundColor = 'red';
        document.getElementById("p3").innerHTML = "Incorrect";
    };

    let ans32 = document.querySelector('#ans32');
    document.querySelector('#ans32').onclick = function() {
        ans32.style.backgroundColor = 'red';
        document.getElementById("p3").innerHTML = "Incorrect";
    };

    let ans33 = document.querySelector('#ans33');
    document.querySelector('#ans33').onclick = function() {
        ans33.style.backgroundColor = 'green';
        document.getElementById("p3").innerHTML = "Correct!";
    };

    let ans41 = document.querySelector('#ans41');
    document.querySelector('#ans41').onclick = function() {
        ans41.style.backgroundColor = 'red';
        document.getElementById("p4").innerHTML = "Incorrect";
    };

    let ans42 = document.querySelector('#ans42');
    document.querySelector('#ans42').onclick = function() {
        ans42.style.backgroundColor = 'green';
        document.getElementById("p4").innerHTML = "Correct!";
    };

    let ans43 = document.querySelector('#ans43');
    document.querySelector('#ans43').onclick = function() {
        ans43.style.backgroundColor = 'red';
        document.getElementById("p4").innerHTML = "Incorrect";
    };

    let ans51 = document.querySelector('#ans51');
    document.querySelector('#ans51').onclick = function() {
        ans51.style.backgroundColor = 'green';
        document.getElementById("p5").innerHTML = "Correct!";
    };

    let ans52 = document.querySelector('#ans52');
    document.querySelector('#ans52').onclick = function() {
        ans52.style.backgroundColor = 'red';
        document.getElementById("p5").innerHTML = "Incorrect";
    };

    let ans53 = document.querySelector('#ans53');
    document.querySelector('#ans53').onclick = function() {
        ans53.style.backgroundColor = 'red';
        document.getElementById("p5").innerHTML = "Incorrect";
    };

});
