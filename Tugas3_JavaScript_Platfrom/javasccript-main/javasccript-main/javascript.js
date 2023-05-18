var pil = [];
var button = "";
var jumPilihan;
var input = "";
function TampilanPilihan() {
    jumPilihan = document.getElementById("jumPilihan").value;
    var pilihan = "";
    button = '<button onclick="Radiobtn()">Submit</button>';

    for (var i = 1; i <= jumPilihan; i++) {
        pilihan += '<p> Pilihan ' + i + ': <input type="text" id="input' + i + '"> </p>';
    }
    pilihan += button;
    document.getElementById("pilihan").innerHTML = pilihan;

}
function call2Func() {
    Radionbtn();
    DropDown();
}

function Radiobtn() {
    jumPilihan = document.getElementById("jumPilihan").value;
    var kataPil = "";
    button = '<button onclick="Output()">Submit</button>';

    for (var i = 1; i <= jumPilihan; i++) {
        pil[i - 1] = document.getElementById("input" + i).value;
        input += pil[i - 1] + ", ";
        kataPil += '<p><input type="radio" name="pilihan" value="' + pil[i - 1] + '"> ' + pil[i - 1] + '</p>';

    }
    kataPil += button;
    document.getElementById("btnRadio").innerHTML = kataPil;
}

// function DropDown(){
//     var jumPilihan = document.getElementById("jumPilihan").value;
//     var kataDrop = "";
//     kataDrop += '<select name="cars" id="cars">';
//     for (let i = 1; i <= jumPilihan; i++) {
//         kataDrop += '<option value="input'+i+'">'+pil[i-1]+'</option>';

//     }
//     document.getElementById("dropDown").innerHTML = kataDrop;
// }
function Output() {
    var username = document.getElementById("username").value;
    var radio = document.getElementsByName("pilihan");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            var teksPilihan = radio[i].value;
        }

    }
    var Output = 'Hallo, nama saya ' + username + ', saya mempunyai sejumlah '
        + jumPilihan + ' pilihan yaitu ' + input + ' dan saya memilih ' + teksPilihan + '.'

    document.getElementById("Outputdata").innerHTML = Output;
}