function tampilMasukanJumlahPilihan(){
    jumlah = document.getElementById("dataInputJumlah").value;
    var tag = "";
    for (let index = 1; index <= parseInt(jumlah); index++) {
        tag+='Pilihan '+ index +' : <input type="text"> <br>';
    }
    document.getElementById("isi").innerHTML = tag;


    // <button onclick="tampilPilihanSalahSatu()">OK</button> 
    document.getElementById("tombolOKPilihan").style.display = 'block'

}

function tampilPilihanSalahSatu(){
    var data=document.createElement("");
    // jumlahData=document.getElementById("dataInputJumlah").value;
    // var isiData="";
    // for (let index = 1; index <= parseInt(jumlah); index++) {
    //     const element = array[index];
    //     isiData+= <select>
    //         <Option value="data"></Option>
    //     </select>
        
    // }
}

function pilihanDropBox(){
    var isiData=document.getElementById("isi");
    var dt;
    for (let index = 1; index <= parseInt(jumlah); index++) {
       dt+=<select> <Option></Option></select>
       document.getElementById("isiT").innerHTML=dt
        
    }
    document.getElementById("tombolOK").style.display = 'block'
}

function tampilPilihanDropBox(){
    var tDB=document.createElement("");
}