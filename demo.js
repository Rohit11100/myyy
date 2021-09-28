

function onenameee() {
    let selectonename = document.getElementById('selectonename').value;
    let selecttwoname = document.getElementById('selecttwoname').value;

    let nameone = JSON.parse(localStorage.getItem('player'));
    let nametwo = JSON.parse(localStorage.getItem('playertwo'));
    let namethree = JSON.parse(localStorage.getItem('playerthree'));
    let namefour = JSON.parse(localStorage.getItem('playerfour'));
    let namefive = JSON.parse(localStorage.getItem('playerfive'));
    console.log(nameone.topics);
    if (selectonename == '0') {
        let selectrollno = nameone.topics;
        var optionsrollone = selectrollno.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectoneroll").html(optionsrollone.join(''));

    }
    if (selectonename == '1') {
        let selectrollno = nametwo.topics;
        var optionsrollone = selectrollno.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectoneroll").html(optionsrollone.join(''));

    }
    if (selectonename == '2') {
        let selectrollno = namethree.topics;
        var optionsrollone = selectrollno.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectoneroll").html(optionsrollone.join(''));

    }
    if (selectonename == '3') {
        let selectrollno = namefour.topics;
        var optionsrollone = selectrollno.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectoneroll").html(optionsrollone.join(''));

    }
    if (selectonename == '4') {
        let selectrollno = namefive.topics;
        var optionsrollone = selectrollno.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectoneroll").html(optionsrollone.join(''));

    }





}
function twonameee() {
    let selectonename = document.getElementById('selectonename').value;
    let selecttwoname = document.getElementById('selecttwoname').value;
    let twonameone = JSON.parse(localStorage.getItem('player'));
    let twonametwo = JSON.parse(localStorage.getItem('playertwo'));
    let twonamethree = JSON.parse(localStorage.getItem('playerthree'));
    let twonamefour = JSON.parse(localStorage.getItem('playerfour'));
    let twonamefive = JSON.parse(localStorage.getItem('playerfive'));
    console.log(twonameone.topics);
    console.log(twonameone.name);
    if (selecttwoname == '0') {
        let selectrolltwo = twonameone.topics;
        var optionsrolltwo = selectrolltwo.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selecttworoll").html(optionsrolltwo.join(''));

    }
    if (selecttwoname == '1') {
        let selectrolltwo = twonamethree.topics;
        var optionsrolltwo = selectrolltwo.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selecttworoll").html(optionsrolltwo.join(''));

    }
    if (selecttwoname == '2') {
        let selectrolltwo = twonametwo.topics;
        var optionsrolltwo = selectrolltwo.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selecttworoll").html(optionsrolltwo.join(''));

    }
    if (selecttwoname == '3') {
        let selectrolltwo = twonamefour.topics;
        var optionsrolltwo = selectrolltwo.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selecttworoll").html(optionsrolltwo.join(''));

    }
    if (selecttwoname == '4') {
        let selectrolltwo = twonamefive.topics;
        var optionsrolltwo = selectrolltwo.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selecttworoll").html(optionsrolltwo.join(''));

    }






}


















function mytest() {
   
    





}