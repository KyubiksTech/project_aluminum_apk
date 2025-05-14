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
    document.getElementById("projectName").innerHTML = "90s Two Pannel Ventilation";
    
    //height
    document.getElementById("heightName").innerHTML = "Height";
    document.getElementById("Height").innerHTML = height;
    heightSave = length;

    //length
    document.getElementById("lengthName").innerHTML = "Length";
    document.getElementById("Length").innerHTML = length;
    lengthSave = height;
   
    //One Number Code
    OneNum = length - 3.8;
    document.getElementById("oneNumSn").innerHTML = "1";
    document.getElementById("oneNumName").innerHTML = "1/2 11B";
    document.getElementById("oneNum").innerHTML = OneNum;

    //11B 
    elbPlateTemp = 32.6  - 2.6;
    elbPlate = elbPlateTemp ;
    document.getElementById("elbPlateSn").innerHTML = "2";
    document.getElementById("elbPlateName").innerHTML = "11B ";
    document.getElementById("elbPlate").innerHTML = elbPlate;
    
    //six-seven-in & six-seven-out
    sixSevenInTemp = height-32.6;
    sixSevenIn = sixSevenInTemp-6;
    document.getElementById("sixSevenInSn").innerHTML = "3";
    document.getElementById("sixSevenInName").innerHTML = "6/7 In";
    document.getElementById("sixSevenIn").innerHTML = sixSevenIn;
    
    sixSevenOutTemp = height-32.6;
    sixSevenOut = sixSevenOutTemp-5;
    document.getElementById("sixSevenOutSn").innerHTML = "4";
    document.getElementById("sixSevenOutName").innerHTML = "6/7 Out";
    document.getElementById("sixSevenOut").innerHTML = sixSevenOut;

    //fiveFour
    fiveFourTemp = length - 15.2;
    fiveFour = fiveFourTemp / 2;
    document.getElementById("fiveFourSn").innerHTML = "5";
    document.getElementById("fiveFourName").innerHTML = "5/4";
    document.getElementById("fiveFour").innerHTML = fiveFour;

    

    //glassIn & glassOut
    glassIn = sixSevenIn - 8.5;
    glassInHeight = fiveFour - 0.3;
    document.getElementById("glassInSn").innerHTML = "6";
    document.getElementById("glassInName").innerHTML = "Glass In";
    document.getElementById("glassIn").innerHTML = glassIn + " x " + glassInHeight;
    
    glassOut = sixSevenOut - 8.5;
    glassOutHeight =  fiveFour - 0.3; 
    document.getElementById("glassOutSn").innerHTML = "7";
    document.getElementById("glassOutName").innerHTML = "Glass Out";
    document.getElementById("glassOut").innerHTML = glassOut + " x " + glassOutHeight;
    

    //GlassVent onenumber -3 - 2.8 /2
    oneNumberFiveFourTemp = length - 3.8;
    glassVentTemp = oneNumberFiveFourTemp - 3 - 2.8;
    glassVent = glassVentTemp /2;

    glassVentHeightTemp = 30 - 0.2;
    glassVentHeight = glassVentHeightTemp;
    document.getElementById("glassVentSn").innerHTML = "8";
    document.getElementById("glassVentName").innerHTML = "Glass Vent";
    document.getElementById("glassVent").innerHTML = glassVent + " x " + glassVentHeight;
    

    //Jali Size
    jaliHeight = height - 32.6 - 7.5;
    jaliLength = fiveFour + 8.3;
    document.getElementById("jaliSn").innerHTML = "9";
    document.getElementById("jaliName").innerHTML = "Jali";
    document.getElementById("jali").innerHTML = jaliHeight + " x " + jaliLength;
    
}


function copyFile() {
    // Your variables
    var variable1 = heightSave;
    var variable2 = lengthSave;
    var variable3 = OneNum;
    var variable4 = elbPlate;
    var variable5 = sixSevenIn;
    var variable6 = sixSevenOut;
    var variable8 = fiveFour;
    var variable9 = glassIn;
    var variable99 = glassInHeight;
    var variable10 = glassOut;
    var variable1010 = glassOutHeight;
    var variable11 = glassVent;
    var variable1111 = glassVentHeight;
    var variable12 = jaliHeight;
    var variable1212 = jaliLength;

// Concatenate the variables into a single string
    var allData = '1)' + ' ' +  'Height' + ' = ' + variable1 + '\n' +
                  '2)' + ' ' +  'Length' + ' = ' + variable2 + '\n' +
                  '3)' + ' ' +  '1/2' + ' = ' + variable3 + '\n' +
                  '4)' + ' ' +  '11B' + ' = ' + variable4 + '\n' +
                  '5)' + ' ' +  '6/7 In' + ' = ' + variable5 + '\n' +
                  '6)' + ' ' +  '6/7 Out' + ' = ' + variable6 + '\n' +
                  '7)' + ' ' +  '5/4' + ' = ' + variable8 + '\n' +
                  '8)' + ' ' +  'Glass In' + ' = ' + variable9 + ' x ' + variable99 +'\n' +
                  '9)' + ' ' +  'Glass Out' + ' = ' + variable10 + ' x ' + variable1010 + '\n' +
                  '10)' + ' ' +  'Glass Vent' + ' = ' + variable11 + ' x ' + variable1111 + '\n' +
                  '11)' + ' ' +  'Jali' + ' = ' + variable12 + ' x ' + variable1212;

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


