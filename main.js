




// let addDivfiveroll = document.getElementById("selectoneroll");
// console.log(onename.topics);
// let selectrollno = onename.topics;

// var optionsrollone = selectrollno.map(function (arr) {
//     return `<option value=` + arr + `>` + arr + `</option>`;
// });
// $("#selectoneroll").html(optionsrollone.join(''));
// //////////////////////////////////////////////////////////
// let selectrolltwo = twoname.topics;
// var optionsrolltwo = selectrolltwo.map(function (arr) {
//     return `<option value=` + arr + `>` + arr + `</option>`;
// });
// $("#selecttworoll").html(optionsrolltwo.join(''));
// ////////////////////////////////////////////////////////////////////////
// let selectrollthree = threename.topics;
// var optionsrollthree = selectrollthree.map(function (arr) {
//     return `<option value=` + arr + `>` + arr + `</option>`;
// });
// $("#selectthreeroll").html(optionsrollthree.join(''));
// ///////////////////////////////////////////////////////////////////
// let selectrollfour = fourname.topics;
// var optionsrollfour = selectrollfour.map(function (arr) {
//     return `<option value=` + arr + `>` + arr + `</option>`;
// });
// $("#selectfourroll").html(optionsrollfour.join(''));
// ////////////////////////////////////////////////////////////////////////////////////////////
// let selectrollfive = fivename.topics;
// var optionsrollfive = selectrollfive.map(function (arr) {
//     return `<option value=` + arr + `>` + arr + `</option>`;
// });
// $("#selectfiveroll").html(optionsrollfive.join(''));







function mytestone() {
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
// //////////////////////////////////////////////////////////////////////////////////////////////////////



}








function mytesttwo() {
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






    ///////////////////////////////////////////////////////////////////////////////////

    // two =======three

    // one-three
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






    ///////////////////////////////////////////////////////////////////////////////////////

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



    /////////////////////////////////////////////////////////////////////////////////////////////////
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
    


   
    selectoneroll()
    selecttworoll()

}

function mytestthree(){
    let mainselectonename = document.getElementById('selectonename').value;
    let mainselecttwoname = document.getElementById('selecttwoname').value;
    let mainselectthreename = document.getElementById('selectthreename').value;
    let mainselectfourname = document.getElementById('selectfourname').value;
    let mainselectfivename = document.getElementById('selectfivename').value;











///////////////////////////////////////////////////////////////////////////////////
// threeee----------one

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

///////////////////////////////////////////////////////////////////////////////////////////////////
// threeee--two
if (mainselectthreename == '0' && mainselecttwoname == '0') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";

}
if (mainselectthreename !== '0' && mainselecttwoname == '0') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '0' && mainselecttwoname !== '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}

if (mainselectthreename == '1' && mainselecttwoname == '1') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}
if (mainselectthreename !== '1' && mainselecttwoname == '1') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '1' && mainselecttwoname !== '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectthreename == '2' && mainselecttwoname == '2') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}

if (mainselectthreename !== '2' && mainselecttwoname == '2') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '2' && mainselecttwoname !== '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectthreename == '3' && mainselecttwoname == '3') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}

if (mainselectthreename !== '3' && mainselecttwoname == '3') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '3' && mainselecttwoname !== '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectthreename == '4' && mainselecttwoname == '4') {
    document.getElementById("selectthreename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}
if (mainselectthreename !== '4' && mainselecttwoname == '4') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectthreename == '4' && mainselecttwoname !== '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}









////////////////////////////////////////////////////////////////////////////////////////////

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
    


    //////////////////////////////////////////////////////////////////////////////////
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

    
    selectthreeroll()





}















function mytestfour(){
    let mainselectonename = document.getElementById('selectonename').value;
    let mainselecttwoname = document.getElementById('selecttwoname').value;
    let mainselectthreename = document.getElementById('selectthreename').value;
    let mainselectfourname = document.getElementById('selectfourname').value;
    let mainselectfivename = document.getElementById('selectfivename').value;



/////////////////////////////////////////////////////////////////////////////////
// four-----one
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

/////////////////////////////////////////////////////////////////////////////////////////////
 // four----two
 if (mainselectfourname == '0' && mainselecttwoname == '0') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";

}
if (mainselectfourname !== '0' && mainselecttwoname == '0') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '0' && mainselecttwoname !== '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}

if (mainselectfourname == '1' && mainselecttwoname == '1') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}
if (mainselectfourname !== '1' && mainselecttwoname == '1') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '1' && mainselecttwoname !== '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectfourname == '2' && mainselecttwoname == '2') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}

if (mainselectfourname !== '2' && mainselecttwoname == '2') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '2' && mainselecttwoname !== '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectfourname == '3' && mainselecttwoname == '3') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}

if (mainselectfourname !== '3' && mainselecttwoname == '3') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '3' && mainselecttwoname !== '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectfourname == '4' && mainselecttwoname == '4') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}
if (mainselectfourname !== '4' && mainselecttwoname == '4') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '4' && mainselecttwoname !== '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}

//////////////////////////////////////////////////////////////////////////////////////////////////
// four----------------------------------------three

 // one-three
 if (mainselectfourname == '0' && mainselectthreename == '0') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";

}
if (mainselectfourname !== '0' && mainselectthreename == '0') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '0' && mainselectthreename !== '0') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}


if (mainselectfourname == '1' && mainselectthreename == '1') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfourname !== '1' && mainselectthreename == '1') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '1' && mainselectthreename !== '1') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectfourname == '2' && mainselectthreename == '2') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfourname !== '2' && mainselectthreename == '2') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '2' && mainselectthreename !== '2') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectfourname == '3' && mainselectthreename == '3') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfourname !== '3' && mainselectthreename == '3') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '3' && mainselectthreename !== '3') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectfourname == '4' && mainselectthreename == '4') {
    document.getElementById("selectfourname").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfourname !== '4' && mainselectthreename == '4') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfourname == '4' && mainselectthreename !== '4') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}

////////////////////////////////////////////////////////////////////////////////////////////
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


selectfourroll()



}













function mytestfive(){
    let mainselectonename = document.getElementById('selectonename').value;
    let mainselecttwoname = document.getElementById('selecttwoname').value;
    let mainselectthreename = document.getElementById('selectthreename').value;
    let mainselectfourname = document.getElementById('selectfourname').value;
    let mainselectfivename = document.getElementById('selectfivename').value;




    ////////////////////////////////////////////////////////////////////////////////////
     // one-five
 if (mainselectfivename == '0' && mainselectonename == '0') {
    document.getElementById("selectonename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";

}
if (mainselectfivename !== '0' && mainselectonename == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '0' && mainselectonename !== '0') {
    document.getElementById("selectonename").style.border = "thin  solid black";


}

if (mainselectfivename == '1' && mainselectonename == '1') {
    document.getElementById("selectonename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfivename !== '1' && mainselectonename == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '1' && mainselectonename !== '1') {
    document.getElementById("selectonename").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselectonename == '2') {
    document.getElementById("selectonename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfivename !== '2' && mainselectonename == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselectonename !== '2') {
    document.getElementById("selectonename").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselectonename == '3') {
    document.getElementById("selectonename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfivename !== '3' && mainselectonename == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselectonename !== '3') {
    document.getElementById("selectonename").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselectonename == '4') {
    document.getElementById("selectonename").style.border = "thin  solid red";
    document.getElementById("selectfivename").style.border = "thin  solid red";
}
if (mainselectfivename !== '4' && mainselectonename == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselectonename !== '4') {
    document.getElementById("selectonename").style.border = "thin  solid black";


}




    ////////////////////////////////////////////////////////////////////////////
    // five----two
     
 if (mainselectfivename == '0' && mainselecttwoname == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";

}
if (mainselectfivename !== '0' && mainselecttwoname == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '0' && mainselecttwoname !== '0') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}

if (mainselectfivename == '1' && mainselecttwoname == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}
if (mainselectfivename !== '1' && mainselecttwoname == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '1' && mainselecttwoname !== '1') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselecttwoname == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}

if (mainselectfivename !== '2' && mainselecttwoname == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselecttwoname !== '2') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselecttwoname == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}

if (mainselectfivename !== '3' && mainselecttwoname == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselecttwoname !== '3') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselecttwoname == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selecttwoname").style.border = "thin  solid red";
}
if (mainselectfivename !== '4' && mainselecttwoname == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselecttwoname !== '4') {
    document.getElementById("selecttwoname").style.border = "thin  solid black";


}

////////////////////////////////////////////////////////////////////////////////
// five-----------------------threee

if (mainselectfivename == '0' && mainselectthreename == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";

}
if (mainselectfivename !== '0' && mainselectthreename == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '0' && mainselectthreename !== '0') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}


if (mainselectfivename == '1' && mainselectthreename == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfivename !== '1' && mainselectthreename == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '1' && mainselectthreename !== '1') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselectthreename == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfivename !== '2' && mainselectthreename == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselectthreename !== '2') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselectthreename == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfivename !== '3' && mainselectthreename == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselectthreename !== '3') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselectthreename == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectthreename").style.border = "thin  solid red";
}
if (mainselectfivename !== '4' && mainselectthreename == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselectthreename !== '4') {
    document.getElementById("selectthreename").style.border = "thin  solid black";


}

///////////////////////////////////////////////////////////////////////////////
// five-------four

if (mainselectfivename == '0' && mainselectfourname == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";

}
if (mainselectfivename !== '0' && mainselectfourname == '0') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '0' && mainselectfourname !== '0') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}

if (mainselectfivename == '1' && mainselectfourname == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselectfivename !== '1' && mainselectfourname == '1') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '1' && mainselectfourname !== '1') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselectfourname == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}

if (mainselectfivename !== '2' && mainselectfourname == '2') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '2' && mainselectfourname !== '2') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselectfourname == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselectfivename !== '3' && mainselectfourname == '3') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '3' && mainselectfourname !== '3') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselectfourname == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid red";
    document.getElementById("selectfourname").style.border = "thin  solid red";
}
if (mainselectfivename !== '4' && mainselectfourname == '4') {
    document.getElementById("selectfivename").style.border = "thin  solid black";


}
if (mainselectfivename == '4' && mainselectfourname !== '4') {
    document.getElementById("selectfourname").style.border = "thin  solid black";


}


selectfiveroll()










}

function myfunroll(){
    let selectoneroll = document.getElementById('selectoneroll').value;
    let selecttworoll = document.getElementById('selecttworoll').value;
    let selectthreeroll = document.getElementById('selectthreeroll').value;
    let selectfourroll = document.getElementById('selectfourroll').value;
    let selectfiveroll = document.getElementById('selectfiveroll').value;

//////////////////////////////////////////////////////////////////////////////////
            // batsman

            if (selectoneroll == 'Batsman' && selecttworoll == 'Batsman' && selectthreeroll == 'Batsman' && selectfourroll == 'Batsman' && selectfiveroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Batsman' && selecttworoll == 'Batsman' && selectthreeroll == 'Batsman' && selectfourroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Batsman' && selecttworoll == 'Batsman' && selectthreeroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Batsman' && selecttworoll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

            }

            ///////////
            // 2345  

            if (selecttworoll == 'Batsman' && selectthreeroll == 'Batsman' && selectfourroll == 'Batsman' && selectfiveroll == 'Batsman') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Batsman' && selectthreeroll == 'Batsman' && selectfourroll == 'Batsman') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Batsman' && selectthreeroll == 'Batsman') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Batsman' && selectfourroll == 'Batsman' && selectfiveroll == 'Batsman') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Batsman' && selectthreeroll == 'Batsman' && selectfiveroll == 'Batsman') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Batsman' && selectfiveroll == 'Batsman') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";



            }
            if (selecttworoll == 'Batsman' && selectfiveroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Batsman' && selectfourroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Batsman' && selectfourroll == 'Batsman') {

                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }

            //////////////////////////////////////////////
            // 333333
            if (selectthreeroll == 'Batsman' && selectfourroll == 'Batsman' && selectfiveroll == 'Batsman') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Batsman' && selectfourroll == 'Batsman') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Batsman' && selectfiveroll == 'Batsman') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }

            if (selectthreeroll == 'Batsman' && selectfourroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Batsman' && selectfourroll == 'Batsman') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Batsman' && selectfiveroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Batsman' && selectfiveroll == 'Batsman') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfiveroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Batsman' && selectoneroll == 'Batsman') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Batsman' && selectfiveroll == 'Batsman') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            ////////////////////////////////////////////////////////////////////////////////////////
            // boller


            //////////////////////////////////////////////////////////////////////////////////
            // Bowler

            if (selectoneroll == 'Bowler' && selecttworoll == 'Bowler' && selectthreeroll == 'Bowler' && selectfourroll == 'Bowler' && selectfiveroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Bowler' && selecttworoll == 'Bowler' && selectthreeroll == 'Bowler' && selectfourroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Bowler' && selecttworoll == 'Bowler' && selectthreeroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Bowler' && selecttworoll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

            }

            ///////////
            // 2345  

            if (selecttworoll == 'Bowler' && selectthreeroll == 'Bowler' && selectfourroll == 'Bowler' && selectfiveroll == 'Bowler') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Bowler' && selectthreeroll == 'Bowler' && selectfourroll == 'Bowler') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Bowler' && selectthreeroll == 'Bowler') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Bowler' && selectfourroll == 'Bowler' && selectfiveroll == 'Bowler') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Bowler' && selectthreeroll == 'Bowler' && selectfiveroll == 'Bowler') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Bowler' && selectfiveroll == 'Bowler') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";



            }
            if (selecttworoll == 'Bowler' && selectfiveroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Bowler' && selectfourroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Bowler' && selectfourroll == 'Bowler') {

                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }

            //////////////////////////////////////////////
            // 333333
            if (selectthreeroll == 'Bowler' && selectfourroll == 'Bowler' && selectfiveroll == 'Bowler') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Bowler' && selectfourroll == 'Bowler') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Bowler' && selectfiveroll == 'Bowler') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }

            if (selectthreeroll == 'Bowler' && selectfourroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Bowler' && selectfourroll == 'Bowler') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Bowler' && selectfiveroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Bowler' && selectfiveroll == 'Bowler') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfiveroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Bowler' && selectoneroll == 'Bowler') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Bowler' && selectfiveroll == 'Bowler') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            /////////////////////////////////////////////////////////////////////////////////////
            // field


            //////////////////////////////////////////////////////////////////////////////////
            // Fielder

            if (selectoneroll == 'Fielder' && selecttworoll == 'Fielder' && selectthreeroll == 'Fielder' && selectfourroll == 'Fielder' && selectfiveroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Fielder' && selecttworoll == 'Fielder' && selectthreeroll == 'Fielder' && selectfourroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Fielder' && selecttworoll == 'Fielder' && selectthreeroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Fielder' && selecttworoll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

            }

            ///////////
            // 2345  

            if (selecttworoll == 'Fielder' && selectthreeroll == 'Fielder' && selectfourroll == 'Fielder' && selectfiveroll == 'Fielder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Fielder' && selectthreeroll == 'Fielder' && selectfourroll == 'Fielder') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Fielder' && selectthreeroll == 'Fielder') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Fielder' && selectfourroll == 'Fielder' && selectfiveroll == 'Fielder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Fielder' && selectthreeroll == 'Fielder' && selectfiveroll == 'Fielder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Fielder' && selectfiveroll == 'Fielder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";



            }
            if (selecttworoll == 'Fielder' && selectfiveroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Fielder' && selectfourroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Fielder' && selectfourroll == 'Fielder') {

                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }

            //////////////////////////////////////////////
            // 333333
            if (selectthreeroll == 'Fielder' && selectfourroll == 'Fielder' && selectfiveroll == 'Fielder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Fielder' && selectfourroll == 'Fielder') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Fielder' && selectfiveroll == 'Fielder') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }

            if (selectthreeroll == 'Fielder' && selectfourroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Fielder' && selectfourroll == 'Fielder') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Fielder' && selectfiveroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Fielder' && selectfiveroll == 'Fielder') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfiveroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Fielder' && selectoneroll == 'Fielder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Fielder' && selectfiveroll == 'Fielder') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            ///////////////////////////////////////////////////////////////////////////
            // allrounder


            //////////////////////////////////////////////////////////////////////////////////
            // All-Rounder

            if (selectoneroll == 'All-Rounder' && selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'All-Rounder' && selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'All-Rounder' && selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'All-Rounder' && selecttworoll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

            }

            ///////////
            // 2345  

            if (selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'All-Rounder' && selectfourroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'All-Rounder' && selectthreeroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'All-Rounder' && selectfiveroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'All-Rounder' && selectfourroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'All-Rounder' && selectfourroll == 'All-Rounder') {

                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }

            //////////////////////////////////////////////
            // 333333
            if (selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }

            if (selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'All-Rounder' && selectfourroll == 'All-Rounder') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'All-Rounder' && selectfiveroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfiveroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'All-Rounder' && selectoneroll == 'All-Rounder') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'All-Rounder' && selectfiveroll == 'All-Rounder') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            ///////////////////////////////////////////////////////////////////////////////////////////////


            //////////////////////////////////////////////////////////////////////////////////
            // Wicket-Keeper

            if (selectoneroll == 'Wicket-Keeper' && selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Wicket-Keeper' && selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Wicket-Keeper' && selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectoneroll == 'Wicket-Keeper' && selecttworoll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";

                document.getElementById("selecttworoll").style.border = "thin solid red";

            }

            ///////////
            // 2345  

            if (selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper') {


                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";

                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selecttworoll == 'Wicket-Keeper' && selectthreeroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";



            }
            if (selecttworoll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }
            if (selecttworoll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper') {

                document.getElementById("selectfourroll").style.border = "thin solid red";
                document.getElementById("selecttworoll").style.border = "thin solid red";


            }

            //////////////////////////////////////////////
            // 333333
            if (selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {

                document.getElementById("selectfiveroll").style.border = "thin solid red";

                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";


            }

            if (selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Wicket-Keeper' && selectfourroll == 'Wicket-Keeper') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectthreeroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {
                document.getElementById("selectthreeroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfiveroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfiveroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Wicket-Keeper' && selectoneroll == 'Wicket-Keeper') {
                document.getElementById("selectoneroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }
            if (selectfourroll == 'Wicket-Keeper' && selectfiveroll == 'Wicket-Keeper') {
                document.getElementById("selectfiveroll").style.border = "thin solid red";
                document.getElementById("selectfourroll").style.border = "thin solid red";

            }













}



























// function selectoneroll() {
//     let selectoneroll = document.getElementById('selectoneroll').value;
//     let selecttworoll = document.getElementById('selecttworoll').value;
//     let selectthreeroll = document.getElementById('selectthreeroll').value;
//     let selectfourroll = document.getElementById('selectfourroll').value;
//     let selectfiveroll = document.getElementById('selectfiveroll').value;
//     console.log(selectoneroll);
//     if (selectoneroll == selecttworoll) {
//         document.getElementById("selectoneroll").style.border = "thick  solid red";
//         document.getElementById("selecttworoll").style.border = "thick  solid red";

//     }

//     if (selectoneroll !== selecttworoll) {
//         document.getElementById("selectoneroll").style.border = "thin solid black";
//         document.getElementById("selecttworoll").style.border = "thin solid black";

//     }
//     ///////////////////////////////////////////////////////////
//     if (selectoneroll == selectthreeroll) {
//         document.getElementById("selectoneroll").style.border = "thick  solid red";
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";

//     }
//     if (selectoneroll !== selectthreeroll) {
//         document.getElementById("selectoneroll").style.border = "thin solid black";
//         document.getElementById("selectthreeroll").style.border = "thin solid black";
//     }
//     ///////////////////////////////////////////////////////////
//     if (selectoneroll == selectfourroll) {
//         document.getElementById("selectoneroll").style.border = "thick  solid red";
//         document.getElementById("selectfourroll").style.border = "thick  solid red";
//     }
//     if (selectoneroll !== selectfourroll) {
//         document.getElementById("selectoneroll").style.border = "thin solid black";
//         document.getElementById("selectfourroll").style.border = "thin solid black";
//     }
//     ///////////////////////////////////////////
//     if (selectoneroll == selectfiveroll) {
//         document.getElementById("selectoneroll").style.border = "thick  solid red";
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";
//     }
//     if (selectoneroll !== selectfiveroll) {
//         document.getElementById("selectoneroll").style.border = "thin solid black";
//         document.getElementById("selectfiveroll").style.border = "thin solid black";
//     }






// }

// function selecttworoll() {
//     let selectoneroll = document.getElementById('selectoneroll').value;
//     let selecttworoll = document.getElementById('selecttworoll').value;
//     let selectthreeroll = document.getElementById('selectthreeroll').value;
//     let selectfourroll = document.getElementById('selectfourroll').value;
//     let selectfiveroll = document.getElementById('selectfiveroll').value;
//     console.log(selecttworoll);
//     if (selecttworoll == selectoneroll) {
//         document.getElementById("selecttworoll").style.border = "thick  solid red";
//         document.getElementById("selectoneroll").style.border = "thick  solid red";

//     }
//     if (selecttworoll !== selectoneroll) {
//         document.getElementById("selecttworoll").style.border = "thin solid black";
//         document.getElementById("selectoneroll").style.border = "thin solid black";

//     }
//     ///////////////////////////////////////////////////////////
//     if (selecttworoll == selectthreeroll) {
//         document.getElementById("selecttworoll").style.border = "thick  solid red";
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";

//     }
//     if (selecttworoll !== selectthreeroll) {
//         document.getElementById("selecttworoll").style.border = "thin solid black";
//         document.getElementById("selectthreeroll").style.border = "thin solid black";

//     }
//     //////////////////////////////////////////////////////////////////////
//     if (selecttworoll == selectfourroll) {
//         document.getElementById("selecttworoll").style.border = "thick  solid red";
//         document.getElementById("selectfourroll").style.border = "thick  solid red";

//     }
//     if (selecttworoll !== selectfourroll) {
//         document.getElementById("selecttworoll").style.border = "thin solid black";
//         document.getElementById("selectfourroll").style.border = "thin solid black";

//     }
//     ////////////////////////////////////////////////////////////////
//     if (selecttworoll == selectfiveroll) {
//         document.getElementById("selecttworoll").style.border = "thick  solid red";
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";

//     }
//     if (selecttworoll !== selectfiveroll) {
//         document.getElementById("selecttworoll").style.border = "thin solid black";
//         document.getElementById("selectfiveroll").style.border = "thin solid black";

//     }
//     /////////////////////////////////////////////////////////////////////////


// }


// function selectthreeroll() {
//     let selectoneroll = document.getElementById('selectoneroll').value;
//     let selecttworoll = document.getElementById('selecttworoll').value;
//     let selectthreeroll = document.getElementById('selectthreeroll').value;
//     let selectfourroll = document.getElementById('selectfourroll').value;
//     let selectfiveroll = document.getElementById('selectfiveroll').value;
//     console.log(selectthreeroll);
//     if (selectthreeroll == selectoneroll) {
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";
//         document.getElementById("selectoneroll").style.border = "thick  solid red";

//     }
//     if (selectthreeroll !== selectoneroll) {
//         document.getElementById("selectthreeroll").style.border = "thin solid black";
//         document.getElementById("selectoneroll").style.border = "thin solid black";

//     }
//     ///////////////////////////////////////////////////////////
//     if (selectthreeroll == selecttworoll) {
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";
//         document.getElementById("selecttworoll").style.border = "thick  solid red";

//     }
//     if (selectthreeroll !== selecttworoll) {
//         document.getElementById("selectthreeroll").style.border = "thin solid black";
//         document.getElementById("selecttworoll").style.border = "thin solid black";

//     }
//     //////////////////////////////////////////////////////////////////////
//     if (selectthreeroll == selectfourroll) {
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";
//         document.getElementById("selectfourroll").style.border = "thick  solid red";

//     }
//     if (selectthreeroll !== selectfourroll) {
//         document.getElementById("selectthreeroll").style.border = "thin solid black";
//         document.getElementById("selectfourroll").style.border = "thin solid black";

//     }
//     ////////////////////////////////////////////////////////////////////////////////
//     if (selectthreeroll == selectfiveroll) {
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";

//     }
//     if (selectthreeroll !== selectfiveroll) {
//         document.getElementById("selectthreeroll").style.border = "thin solid black";
//         document.getElementById("selectfiveroll").style.border = "thin solid black";

//     }



// }

// function selectfourroll() {
//     let selectoneroll = document.getElementById('selectoneroll').value;
//     let selecttworoll = document.getElementById('selecttworoll').value;
//     let selectthreeroll = document.getElementById('selectthreeroll').value;
//     let selectfourroll = document.getElementById('selectfourroll').value;
//     let selectfiveroll = document.getElementById('selectfiveroll').value;
//     console.log(selectfourroll);
//     if (selectfourroll == selectoneroll) {
//         document.getElementById("selectfourroll").style.border = "thick  solid red";
//         document.getElementById("selectoneroll").style.border = "thick  solid red";

//     }
//     if (selectfourroll !== selectoneroll) {
//         document.getElementById("selectfourroll").style.border = "thin solid black";
//         document.getElementById("selectoneroll").style.border = "thin solid black";

//     }
//     ////////////////////////////////////////////////////////////////////////////
//     if (selectfourroll == selecttworoll) {
//         document.getElementById("selectfourroll").style.border = "thick  solid red";
//         document.getElementById("selecttworoll").style.border = "thick  solid red";

//     }
//     if (selectfourroll !== selecttworoll) {
//         document.getElementById("selectfourroll").style.border = "thin solid black";
//         document.getElementById("selecttworoll").style.border = "thin solid black";

//     }
//     ///////////////////////////////////////////////////////////////////////////////////////
//     if (selectfourroll == selectthreeroll) {
//         document.getElementById("selectfourroll").style.border = "thick  solid red";
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";

//     }
//     if (selectfourroll !== selectthreeroll) {
//         document.getElementById("selectfourroll").style.border = "thin solid black";
//         document.getElementById("selectthreeroll").style.border = "thin solid black";

//     }
//     //////////////////////////////////////////////////////////////////////////////////////////////
//     if (selectfourroll == selectfiveroll) {
//         document.getElementById("selectfourroll").style.border = "thick  solid red";
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";

//     }
//     if (selectfourroll !== selectfiveroll) {
//         document.getElementById("selectfourroll").style.border = "thin solid black";
//         document.getElementById("selectfiveroll").style.border = "thin solid black";

//     }
//     /////////////////////////////////////////////////////////////////////////////////




// }


// function selectfiveroll() {
//     let selectoneroll = document.getElementById('selectoneroll').value;
//     let selecttworoll = document.getElementById('selecttworoll').value;
//     let selectthreeroll = document.getElementById('selectthreeroll').value;
//     let selectfourroll = document.getElementById('selectfourroll').value;
//     let selectfiveroll = document.getElementById('selectfiveroll').value;
//     console.log(selectfiveroll);
//     if (selectfiveroll == selectoneroll) {
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";
//         document.getElementById("selectoneroll").style.border = "thick  solid red";

//     }
//     if (selectfiveroll !== selectoneroll) {
//         document.getElementById("selectfiveroll").style.border = "thin solid black";
//         document.getElementById("selectoneroll").style.border = "thin solid black";

//     }
//     ////////////////////////////////////////////////////////////////////////////
//     if (selectfiveroll == selecttworoll) {
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";
//         document.getElementById("selecttworoll").style.border = "thick  solid red";

//     }
//     if (selectfiveroll !== selecttworoll) {
//         document.getElementById("selectfiveroll").style.border = "thin solid black";
//         document.getElementById("selecttworoll").style.border = "thin solid black";

//     }
//     /////////////////////////////////////////////////////////////////////////////////
//     if (selectfiveroll == selectthreeroll) {
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";
//         document.getElementById("selectthreeroll").style.border = "thick  solid red";

//     }
//     if (selectfiveroll !== selectthreeroll) {
//         document.getElementById("selectfiveroll").style.border = "thin solid black";
//         document.getElementById("selectthreeroll").style.border = "thin solid black";

//     }
//     //////////////////////////////////////////////////////////////////////////////
//     if (selectfiveroll == selectfourroll) {
//         document.getElementById("selectfiveroll").style.border = "thick  solid red";
//         document.getElementById("selectfourroll").style.border = "thick  solid red";

//     }
//     if (selectfiveroll !== selectfourroll) {
//         document.getElementById("selectfiveroll").style.border = "thin solid black";
//         document.getElementById("selectfourroll").style.border = "thin solid black";

//     }




// }


