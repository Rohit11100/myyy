
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
    console.log(twonametwo.topics);
    console.log(twonametwo.name);
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



function threenameee() {
    let selecttwoname = document.getElementById('selectthreename').value;
    let threenameone = JSON.parse(localStorage.getItem('player'));
    let threenametwo = JSON.parse(localStorage.getItem('playertwo'));
    let threenamethree = JSON.parse(localStorage.getItem('playerthree'));
    let threenamefour = JSON.parse(localStorage.getItem('playerfour'));
    let threenamefive = JSON.parse(localStorage.getItem('playerfive'));
    console.log(threenamethree.topics);
    console.log(threenamethree.name);
    if (selecttwoname == '0') {
        let selectrollthree = threenameone.topics;
        var optionsrollthree = selectrollthree.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectthreeroll").html(optionsrollthree.join(''));

    }
    if (selecttwoname == '1') {
        let selectrollthree = threenametwo.topics;
        var optionsrollthree = selectrollthree.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectthreeroll").html(optionsrollthree.join(''));

    }
    if (selecttwoname == '2') {
        let selectrollthree = threenamethree.topics;
        var optionsrollthree = selectrollthree.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectthreeroll").html(optionsrollthree.join(''));

    }
    if (selecttwoname == '3') {
        let selectrollthree = threenamefour.topics;
        var optionsrollthree = selectrollthree.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectthreeroll").html(optionsrollthree.join(''));

    }
    if (selecttwoname == '4') {
        let selectrollthree = threenamefive.topics;
        var optionsrollthree = selectrollthree.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectthreeroll").html(optionsrollthree.join(''));

    }

}

function fournameee() {
    let selecttwoname = document.getElementById('selectfourname').value;
    let fournameone = JSON.parse(localStorage.getItem('player'));
    let fournametwo = JSON.parse(localStorage.getItem('playertwo'));
    let fournamethree = JSON.parse(localStorage.getItem('playerthree'));
    let fournamefour = JSON.parse(localStorage.getItem('playerfour'));
    let fournamefive = JSON.parse(localStorage.getItem('playerfive'));
    console.log(fournamefour.topics);
    console.log(fournamefour.name);
    if (selecttwoname == '0') {
        let selectrollfour = fournameone.topics;
        var optionsrollfour = selectrollfour.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfourroll").html(optionsrollfour.join(''));

    }
    if (selecttwoname == '1') {
        let selectrollfour = fournametwo.topics;
        var optionsrollfour = selectrollfour.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfourroll").html(optionsrollfour.join(''));

    }
    if (selecttwoname == '2') {
        let selectrollfour = fournamethree.topics;
        var optionsrollfour = selectrollfour.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfourroll").html(optionsrollfour.join(''));

    }
    if (selecttwoname == '3') {
        let selectrollfour = fournamefour.topics;
        var optionsrollfour = selectrollfour.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfourroll").html(optionsrollfour.join(''));

    }
    if (selecttwoname == '4') {
        let selectrollfour = fournamefive.topics;
        var optionsrollfour = selectrollfour.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfourroll").html(optionsrollfour.join(''));

    }





}



function fivenameee() {
    let selecttwoname = document.getElementById('selectfivename').value;
    let fivenameone = JSON.parse(localStorage.getItem('player'));
    let fivenametwo = JSON.parse(localStorage.getItem('playertwo'));
    let fivenamethree = JSON.parse(localStorage.getItem('playerthree'));
    let fivenamefour = JSON.parse(localStorage.getItem('playerfour'));
    let fivenamefive = JSON.parse(localStorage.getItem('playerfive'));
    console.log(fivenameone.topics);
    console.log(fivenameone.name);
    if (selecttwoname == '0') {
        let selectrollfive = fivenameone.topics;
        var optionsrollfive = selectrollfive.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfiveroll").html(optionsrollfive.join(''));
    }
    if (selecttwoname == '1') {
        let selectrollfive = fivenametwo.topics;
        var optionsrollfive = selectrollfive.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfiveroll").html(optionsrollfive.join(''));
    }
    if (selecttwoname == '2') {
        let selectrollfive = fivenamethree.topics;
        var optionsrollfive = selectrollfive.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfiveroll").html(optionsrollfive.join(''));
    }
    if (selecttwoname == '3') {
        let selectrollfive = fivenamefour.topics;
        var optionsrollfive = selectrollfive.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfiveroll").html(optionsrollfive.join(''));
    }
    if (selecttwoname == '4') {
        let selectrollfive = fivenamefive.topics;
        var optionsrollfive = selectrollfive.map(function (arr) {
            return `<option value=` + arr + `>` + arr + `</option>`;
        });
        $("#selectfiveroll").html(optionsrollfive.join(''));
    }


}



















function mytest() {


    let mainselectonename = document.getElementById('selectonename').value;
    let mainselecttwoname = document.getElementById('selecttwoname').value;
    let mainselectthreename = document.getElementById('selectthreename').value;
    let mainselectfourname = document.getElementById('selectfourname').value;
    let mainselectfivename = document.getElementById('selectfivename').value;

    /////////////////////////////////////////////////////////////////
    // one----two
    if (mainselectonename == '0' && mainselecttwoname == '0') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selecttwoname").style.border = "thin  solid red";

    }
    if (mainselectonename !== '0' && mainselecttwoname == '0') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '0' && mainselecttwoname !== '0') {
        document.getElementById("selecttwoname").style.border = "thin  solid black";


    }

    if (mainselectonename == '1' && mainselecttwoname == '1') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selecttwoname").style.border = "thin  solid red";
    }
    if (mainselectonename !== '1' && mainselecttwoname == '1') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '1' && mainselecttwoname !== '1') {
        document.getElementById("selecttwoname").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselecttwoname == '2') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selecttwoname").style.border = "thin  solid red";
    }

    if (mainselectonename !== '2' && mainselecttwoname == '2') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselecttwoname !== '2') {
        document.getElementById("selecttwoname").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselecttwoname == '3') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selecttwoname").style.border = "thin  solid red";
    }

    if (mainselectonename !== '3' && mainselecttwoname == '3') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselecttwoname !== '3') {
        document.getElementById("selecttwoname").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselecttwoname == '4') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selecttwoname").style.border = "thin  solid red";
    }
    if (mainselectonename !== '4' && mainselecttwoname == '4') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselecttwoname !== '4') {
        document.getElementById("selecttwoname").style.border = "thin  solid black";


    }



    /////////////////////////////////////
    // one-three
    if (mainselectonename == '0' && mainselectthreename == '0') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectthreename").style.border = "thin  solid red";

    }
    if (mainselectonename !== '0' && mainselectthreename == '0') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '0' && mainselectthreename !== '0') {
        document.getElementById("selectthreename").style.border = "thin  solid black";


    }


    if (mainselectonename == '1' && mainselectthreename == '1') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectthreename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '1' && mainselectthreename == '1') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '1' && mainselectthreename !== '1') {
        document.getElementById("selectthreename").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselectthreename == '2') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectthreename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '2' && mainselectthreename == '2') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselectthreename !== '2') {
        document.getElementById("selectthreename").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselectthreename == '3') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectthreename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '3' && mainselectthreename == '3') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselectthreename !== '3') {
        document.getElementById("selectthreename").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselectthreename == '4') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectthreename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '4' && mainselectthreename == '4') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselectthreename !== '4') {
        document.getElementById("selectthreename").style.border = "thin  solid black";


    }


    /////////////////////////////////////
    // one-four
    if (mainselectonename == '0' && mainselectfourname == '0') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfourname").style.border = "thin  solid red";

    }
    if (mainselectonename !== '0' && mainselectfourname == '0') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '0' && mainselectfourname !== '0') {
        document.getElementById("selectfourname").style.border = "thin  solid black";


    }

    if (mainselectonename == '1' && mainselectfourname == '1') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfourname").style.border = "thin  solid red";
    }
    if (mainselectonename !== '1' && mainselectfourname == '1') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '1' && mainselectfourname !== '1') {
        document.getElementById("selectfourname").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselectfourname == '2') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfourname").style.border = "thin  solid red";
    }

    if (mainselectonename !== '2' && mainselectfourname == '2') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselectfourname !== '2') {
        document.getElementById("selectfourname").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselectfourname == '3') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfourname").style.border = "thin  solid red";
    }
    if (mainselectonename !== '3' && mainselectfourname == '3') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselectfourname !== '3') {
        document.getElementById("selectfourname").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselectfourname == '4') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfourname").style.border = "thin  solid red";
    }
    if (mainselectonename !== '4' && mainselectfourname == '4') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselectfourname !== '4') {
        document.getElementById("selectfourname").style.border = "thin  solid black";


    }

    /////////////////////////////////////
    // one-five
    if (mainselectonename == '0' && mainselectfivename == '0') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfivename").style.border = "thin  solid red";

    }
    if (mainselectonename !== '0' && mainselectfivename == '0') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '0' && mainselectfivename !== '0') {
        document.getElementById("selectfivename").style.border = "thin  solid black";


    }

    if (mainselectonename == '1' && mainselectfivename == '1') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfivename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '1' && mainselectfivename == '1') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '1' && mainselectfivename !== '1') {
        document.getElementById("selectfivename").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselectfivename == '2') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfivename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '2' && mainselectfivename == '2') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '2' && mainselectfivename !== '2') {
        document.getElementById("selectfivename").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselectfivename == '3') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfivename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '3' && mainselectfivename == '3') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '3' && mainselectfivename !== '3') {
        document.getElementById("selectfivename").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselectfivename == '4') {
        document.getElementById("selectonename").style.border = "thin  solid red";
        document.getElementById("selectfivename").style.border = "thin  solid red";
    }
    if (mainselectonename !== '4' && mainselectfivename == '4') {
        document.getElementById("selectonename").style.border = "thin  solid black";


    }
    if (mainselectonename == '4' && mainselectfivename !== '4') {
        document.getElementById("selectfivename").style.border = "thin  solid black";


    }
// ////////////////
//   two---three

if (mainselecttwoname == '0' && mainselectthreename == '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";

}
if (mainselecttwoname !== '0' && mainselectthreename == '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '0' && mainselectthreename !== '0') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}


if (mainselecttwoname == '1' && mainselectthreename == '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '1' && mainselectthreename == '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '1' && mainselectthreename !== '1') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselecttwoname == '2' && mainselectthreename == '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '2' && mainselectthreename == '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '2' && mainselectthreename !== '2') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselecttwoname == '3' && mainselectthreename == '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '3' && mainselectthreename == '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '3' && mainselectthreename !== '3') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselecttwoname == '4' && mainselectthreename == '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '4' && mainselectthreename == '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '4' && mainselectthreename !== '4') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
////////////////////////////////////////////////////////////////////////////////
 // two------four
 if (mainselecttwoname == '0' && mainselectfourname == '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";

}
if (mainselecttwoname !== '0' && mainselectfourname == '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '0' && mainselectfourname !== '0') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}

if (mainselecttwoname == '1' && mainselectfourname == '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselecttwoname !== '1' && mainselectfourname == '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '1' && mainselectfourname !== '1') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselecttwoname == '2' && mainselectfourname == '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}

if (mainselecttwoname !== '2' && mainselectfourname == '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '2' && mainselectfourname !== '2') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselecttwoname == '3' && mainselectfourname == '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselecttwoname !== '3' && mainselectfourname == '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '3' && mainselectfourname !== '3') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselecttwoname == '4' && mainselectfourname == '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselecttwoname !== '4' && mainselectfourname == '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '4' && mainselectfourname !== '4') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
/////////////////////////////////////////////////////////////////////////////////////////
 // two-----five
 if (mainselecttwoname == '0' && mainselectfivename == '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";

}
if (mainselecttwoname !== '0' && mainselectfivename == '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '0' && mainselectfivename !== '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}

if (mainselecttwoname == '1' && mainselectfivename == '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '1' && mainselectfivename == '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '1' && mainselectfivename !== '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselecttwoname == '2' && mainselectfivename == '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '2' && mainselectfivename == '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '2' && mainselectfivename !== '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselecttwoname == '3' && mainselectfivename == '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '3' && mainselectfivename == '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '3' && mainselectfivename !== '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselecttwoname == '4' && mainselectfivename == '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselecttwoname !== '4' && mainselectfivename == '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselecttwoname == '4' && mainselectfivename !== '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
////////////////////////////////////////////////////////////////////////////////////
// threee-----four

if (mainselectthreename == '0' && mainselectfourname == '0') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";

}
if (mainselectthreename !== '0' && mainselectfourname == '0') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '0' && mainselectfourname !== '0') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}

if (mainselectthreename == '1' && mainselectfourname == '1') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselectthreename !== '1' && mainselectfourname == '1') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '1' && mainselectfourname !== '1') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectthreename == '2' && mainselectfourname == '2') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}

if (mainselectthreename !== '2' && mainselectfourname == '2') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '2' && mainselectfourname !== '2') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectthreename == '3' && mainselectfourname == '3') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselectthreename !== '3' && mainselectfourname == '3') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '3' && mainselectfourname !== '3') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectthreename == '4' && mainselectfourname == '4') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselectthreename !== '4' && mainselectfourname == '4') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '4' && mainselectfourname !== '4') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
  

//////////////////////////////////////////////////////////////////////////////////////
// three-----five

if (mainselectthreename == '0' && mainselectfivename == '0') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";

}
if (mainselectthreename !== '0' && mainselectfivename == '0') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '0' && mainselectfivename !== '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}

if (mainselectthreename == '1' && mainselectfivename == '1') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectthreename !== '1' && mainselectfivename == '1') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '1' && mainselectfivename !== '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectthreename == '2' && mainselectfivename == '2') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectthreename !== '2' && mainselectfivename == '2') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '2' && mainselectfivename !== '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectthreename == '3' && mainselectfivename == '3') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectthreename !== '3' && mainselectfivename == '3') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '3' && mainselectfivename !== '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectthreename == '4' && mainselectfivename == '4') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectthreename !== '4' && mainselectfivename == '4') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '4' && mainselectfivename !== '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
////////////////////////////////////////////////////////////////////////////////
// four----------------five

if (mainselectfourname == '0' && mainselectfivename == '0') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";

}
if (mainselectfourname !== '0' && mainselectfivename == '0') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '0' && mainselectfivename !== '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}

if (mainselectfourname == '1' && mainselectfivename == '1') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfourname !== '1' && mainselectfivename == '1') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '1' && mainselectfivename !== '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfourname == '2' && mainselectfivename == '2') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfourname !== '2' && mainselectfivename == '2') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '2' && mainselectfivename !== '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfourname == '3' && mainselectfivename == '3') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfourname !== '3' && mainselectfivename == '3') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '3' && mainselectfivename !== '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfourname == '4' && mainselectfivename == '4') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfourname !== '4' && mainselectfivename == '4') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '4' && mainselectfivename !== '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}


if( mainselectonename=='none' && mainselecttwoname=='none'&& mainselectthreename=='none'&& mainselectfourname=='none '&&  mainselectfivename=='none'){
    document.getElementById("selectfourname").style.border = "thin  solid black";
    document.getElementById("selectfivename").style.border = "thin  solid black";
    document.getElementById("selectthreename").style.border = "thin  solid black";
    document.getElementById("selecttwoname").style.border = "thin  solid black";
    document.getElementById("selectonename").style.border = "thin  solid black";
}
if( mainselectonename=='none' && mainselecttwoname=='none'&& mainselectthreename=='none'&& mainselectfourname=='none '){
    document.getElementById("selectfourname").style.border = "thin  solid black";
   
    document.getElementById("selectthreename").style.border = "thin  solid black";
    document.getElementById("selecttwoname").style.border = "thin  solid black";
    document.getElementById("selectonename").style.border = "thin  solid black";
}
if( mainselectonename=='none' && mainselecttwoname=='none'&& mainselectthreename=='none'){
    
    document.getElementById("selectthreename").style.border = "thin  solid black";
    document.getElementById("selecttwoname").style.border = "thin  solid black";
    document.getElementById("selectonename").style.border = "thin  solid black";
}
if( mainselectonename=='none' && mainselecttwoname=='none'){
    
    document.getElementById("selecttwoname").style.border = "thin  solid black";
    document.getElementById("selectonename").style.border = "thin  solid black";
}
if( mainselecttwoname=='none'&& mainselectthreename=='none'&& mainselectfourname=='none '&&  mainselectfivename=='none'){
    document.getElementById("selectfourname").style.border = "thin  solid black";
    document.getElementById("selectfivename").style.border = "thin  solid black";
    document.getElementById("selectthreename").style.border = "thin  solid black";
    document.getElementById("selecttwoname").style.border = "thin  solid black";
    
}
if(  mainselectthreename=='none'&& mainselectfourname=='none '&&  mainselectfivename=='none'){
    document.getElementById("selectfourname").style.border = "thin  solid black";
    document.getElementById("selectfivename").style.border = "thin  solid black";
    document.getElementById("selectthreename").style.border = "thin  solid black";
    
}
if(   mainselectfourname=='none '&&  mainselectfivename=='none'){
    document.getElementById("selectfourname").style.border = "thin  solid black";
    document.getElementById("selectfivename").style.border = "thin  solid black";

    
}
if(mainselectonename==='none'){
    document.getElementById('selectonename').style.border = "thin  solid black";
}
if(mainselecttwoname==='none'){
    document.getElementById('selecttwoname').style.border = "thin  solid black";
}
if(mainselectthreename==='none'){
    document.getElementById('selectthreename').style.border = "thin  solid black";
}
if(mainselectfourname==='none'){
    document.getElementById('selectfourname').style.border = "thin  solid black";
}
if(mainselectfivename==='none'){
    document.getElementById('selectfivename').style.border = "thin  solid black";
}
if(mainselecttwoname==='none'&& mainselectthreename==='none'&& mainselectfourname==='none'&& mainselectfivename==='none'){
    document.getElementById('selecttwoname').style.border = "thin  solid black";
    document.getElementById('selectthreename').style.border = "thin  solid black";
    document.getElementById('selectfourname').style.border = "thin  solid black";
    document.getElementById('selectfivename').style.border = "thin  solid black";
}

if(mainselectonename===mainselecttwoname===mainselectthreename===mainselectfivename ){
    document.getElementById("selectfivename").style.border = "thin  solid red";

    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectonename").style.border = "thin  solid red";
}

if(mainselectonename===mainselecttwoname===mainselectfourname===mainselectfivename ){
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
   
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselectthreename===mainselectfourname===mainselectfivename ){
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
 
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselecttwoname===mainselectthreename===mainselectfourname){
    
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectfivename===mainselectonename===mainselectthreename ){
    document.getElementById("selectfivename").style.border = "thin  solid red";

    document.getElementById("selectthreename").style.border = "thin  solid red";
    
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectfourname===mainselectonename===mainselectthreename ){
    document.getElementById("selectfourname").style.border = "thin  solid red";

    document.getElementById("selectthreename").style.border = "thin  solid red";
    
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectfivename===mainselectonename===mainselectthreename ){
    document.getElementById("selectfivename").style.border = "thin  solid red";

    document.getElementById("selectthreename").style.border = "thin  solid red";
    
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselectthreename ){
   

    document.getElementById("selectthreename").style.border = "thin  solid red";
    
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselectfourname){
    
    document.getElementById("selectfourname").style.border = "thin  solid red";
   
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselectfourname ===mainselectfivename ){
    
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
   
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselectfivename ){
    document.getElementById("selectfivename").style.border = "thin  solid red";
   
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselecttwoname===mainselectthreename){
    
    
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectonename").style.border = "thin  solid red";
}
if(mainselectonename===mainselecttwoname){
    
    
 
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    document.getElementById("selectonename").style.border = "thin  solid red";
}


if(mainselectthreename===mainselectfourname===mainselectfivename ){

    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
    
}
if(mainselectthreename===mainselectfourname){

    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
   
}
if(mainselectthreename===mainselectfivename ){

    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
    
    
}



if(mainselecttwoname===mainselectthreename===mainselectfourname===mainselectfivename){
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectthreename===mainselectfourname){
   
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectthreename){
    
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectfourname){
    
    document.getElementById("selectfourname").style.border = "thin  solid red";
   
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectfourname===mainselectonename){
    
    document.getElementById("selectfourname").style.border = "thin  solid red";
   
    document.getElementById("selectonename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectfivename){
    document.getElementById("selectfivename").style.border = "thin  solid red";
  
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectfivename===mainselectonename){
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectonename").style.border = "thin  solid red";
  
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectthreename===mainselectfivename){
    document.getElementById("selectfivename").style.border = "thin  solid red";
  
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}
if(mainselecttwoname===mainselectfourname===mainselectfivename){
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
   
    document.getElementById("selecttwoname").style.border = "thin  solid red";
    
}





}