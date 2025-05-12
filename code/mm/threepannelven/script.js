function refreshPage(){
    location.reload();
}

function runTwoFunction(){
    getUserInput();
    heightColorChange();
}

function heightColorChange() {
    var row = document.getElementById('rowheightColor');
    row.classList.add('heightColor'); 
}

function getUserInput(){
    let height = document.getElementById("height").value;
    let length = document.getElementById('length').value;

    height = parseFloat(height);
    length = parseFloat(length);
    


    //table-title
    document.getElementById("tableSn").innerHTML = "SN";
    document.getElementById("tableName").innerHTML = "Name";
    document.getElementById("tableSize").innerHTML = "Size";
    
    //Project Name
    document.getElementById("projectTable").innerHTML = "Project";
    document.getElementById("projectName").innerHTML = "Three Pannel Vantilation";
    
    //height
    document.getElementById("heightName").innerHTML = "Height";
    document.getElementById("Height").innerHTML = height;
    heightSave = length;

    //length
    document.getElementById("lengthName").innerHTML = "Length";
    document.getElementById("Length").innerHTML = length;
    lengthSave = height;
   
    //elbHeightPlate
    elbLengthPlate = length - 38;
    document.getElementById("elbLengthPlateSn").innerHTML = "1";
    document.getElementById("elbLengthPlateName").innerHTML = "11B 1x2 Length";
    document.getElementById("elbLengthPlate").innerHTML = elbLengthPlate;

    //elbPlate
    elbPlate = 326 - 26;
    document.getElementById("elbPlateSn").innerHTML = "2";
    document.getElementById("elbPlateName").innerHTML = "11B Plate";
    document.getElementById("elbPlate").innerHTML = elbPlate;

    //trbPlate
    trbPlate = 326 - 26;
    document.getElementById("trbPlateSn").innerHTML = "3";
    document.getElementById("trbPlateName").innerHTML = "13B Plate";
    document.getElementById("trbPlate").innerHTML = trbPlate;
    
    
    //six-seven-in & six-seven-out..

    sixSevenInTemp = height-326;
    sixSevenIn = sixSevenInTemp-60; 
    document.getElementById("sixSevenInSn").innerHTML = "4";
    document.getElementById("sixSevenInName").innerHTML = "6/7 In";
    document.getElementById("sixSevenIn").innerHTML = sixSevenIn;
 
    sixSevenOutTemp = height-50;
    sixSevenOut = sixSevenOutTemp-326;
    document.getElementById("sixSevenOutSn").innerHTML = "5";
    document.getElementById("sixSevenOutName").innerHTML = "6/7 Out";
    document.getElementById("sixSevenOut").innerHTML = sixSevenOut;

    //fiveNumber
    oneNumTemp = length - 245;
    fiveNumber = oneNumTemp / 3;
    document.getElementById("fiveNumberSn").innerHTML = "6";
    document.getElementById("fiveNumberName").innerHTML = "Five Number";
    document.getElementById("fiveNumber").innerHTML = fiveNumber;
    
    //Center Size
    centerSize = fiveNumber + 69;
    document.getElementById("centerSizeSn").innerHTML = "7";
    document.getElementById("centerSizeName").innerHTML = "Center Size";
    document.getElementById("centerSize").innerHTML = centerSize;

    //glassVentilation
    glassVenTemp = length - 38 - 30 - 56;
    glassVen = glassVenTemp / 3;

    elivinbTemp  = 326 - 26;
    glassVenHeight = elivinbTemp - 3;
    document.getElementById("glassVenSn").innerHTML = "8";
    document.getElementById("glassVenName").innerHTML = "Glass Ventilation";
    document.getElementById("glassVen").innerHTML = glassVen + " x " + glassVenHeight;


    //glassIn & glassOut
    glassIn = sixSevenIn - 85;
    glassInHeight = fiveNumber - 3;
    document.getElementById("glassInSn").innerHTML = "9";
    document.getElementById("glassInName").innerHTML = "GlassIn";
    document.getElementById("glassIn").innerHTML = glassIn + " x " + glassInHeight;
    
    glassOut = sixSevenOut - 85;
    glassOutHeight = centerSize - 3;
    document.getElementById("glassOutSn").innerHTML = "10";
    document.getElementById("glassOutName").innerHTML = "Glass Out";
    document.getElementById("glassOut").innerHTML = glassOut + " x " + glassOutHeight;

    //Jali Size
    jaliHeightTemp = height - 326;
    jaliHeight = jaliHeightTemp - 75;
    jaliLength = fiveNumber + 83;
    document.getElementById("jaliSn").innerHTML = "11";
    document.getElementById("jaliName").innerHTML = "Jali";
    document.getElementById("jali").innerHTML = jaliHeight + " x " + jaliLength;
    
}



function copyFile() {
    // Your variables
    var variable1 = heightSave;
    var variable2 = lengthSave;

    var variable3 = elbLengthPlate;
    var variable4 = elbPlate;
    var variable5 = trbPlate;

    var variable6 = sixSevenIn;
    var variable7 = sixSevenOut;
    var variable8 = fiveNumber;

    var variable9 = centerSize;

    var variable10 = glassVen;
    var variable1010 = glassVenHeight;

    var variable11 = glassIn;
    var variable1111 = glassInHeight;
    var variable12 = glassOut;
    var variable1212 = glassOutHeight;
    var variable13 = jaliHeight;
    var variable1313 = jaliLength;

// Concatenate the variables into a single string
    var allData = '1)' + ' ' +  'Length' + ' = ' + variable1 + '\n' +
                  '2)' + ' ' +  'Height' + ' = ' + variable2 + '\n' +
                  '3)' + ' ' +  '11B 1x2 Length' + ' = ' + variable3 + '\n' +
                  '4)' + ' ' +  '11B' + ' = ' + variable4 + '\n' +
                  '5)' + ' ' +  '13B' + ' = ' + variable5 + '\n' +
                  '6)' + ' ' +  '6/7 In' + ' = ' + variable6 + '\n' +
                  '7)' + ' ' +  '6/7 Out' + ' = ' + variable7 + '\n' +
                  '8)' + ' ' +  'Five Number' + ' = ' + variable8 + '\n' +
                  '9)' + ' ' +  'Center Size' + ' = ' + variable9 + '\n' +
                  '10)' + ' ' +  'Glass Ventilatin ' + ' = ' + variable10 + ' x ' + variable1010 +'\n' +
                  '11)' + ' ' +  'Glass In' + ' = ' + variable11 + ' x ' + variable1111 +'\n' +
                  '12)' + ' ' +  'Glass Out' + ' = ' + variable12 + ' x ' + variable1212 + '\n' +
                  '13)' + ' ' +  'Jali' + ' = ' + variable13 + ' x ' + variable1313;

   // Create a temporary textarea element
   var textarea = document.createElement('textarea');
   textarea.value = allData;

   // Append the textarea to the document
   document.body.appendChild(textarea);

   // Select the text in the textarea
   textarea.select();
   textarea.setSelectionRange(0, 99999); // For mobile devices

   // Execute the copy command
   document.execCommand('copy');

   // Remove the textarea from the document
   document.body.removeChild(textarea);

   // Notify the user that the data has been copied
   alert('Data Copied To Clipboard!');
}


