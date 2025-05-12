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
    document.getElementById("projectName").innerHTML = "Three Pannel";
    
    //height
    document.getElementById("heightName").innerHTML = "Height";
    document.getElementById("Height").innerHTML = height;
    heightSave = length;

    //length
    document.getElementById("lengthName").innerHTML = "Length";
    document.getElementById("Length").innerHTML = length;
    lengthSave = height;
   
    //One Number Code..
    OneNum = length - 38;
    document.getElementById("oneNumSn").innerHTML = "1";
    document.getElementById("oneNumName").innerHTML = "1/2 ";
    document.getElementById("oneNum").innerHTML = OneNum;
    
    //six-seven-in & six-seven-out..
    sixSevenIn = height-60;
    document.getElementById("sixSevenInSn").innerHTML = "2";
    document.getElementById("sixSevenInName").innerHTML = "6/7 In";
    document.getElementById("sixSevenIn").innerHTML = sixSevenIn;
    
    sixSevenOut = height-50;
    document.getElementById("sixSevenOutSn").innerHTML = "3";
    document.getElementById("sixSevenOutName").innerHTML = "6/7 Out";
    document.getElementById("sixSevenOut").innerHTML = sixSevenOut;

    //fiveNumber..
    fiveNumber = length-245;
    fiveNumber = (fiveNumber / 3);
    document.getElementById("fiveNumberSn").innerHTML = "4";
    document.getElementById("fiveNumberName").innerHTML = "Five Number";
    document.getElementById("fiveNumber").innerHTML = fiveNumber;

     //centerSize..
     centerSize = fiveNumber + 69;
     document.getElementById("centerSizeSn").innerHTML = "5";
     document.getElementById("centerSizeName").innerHTML = "Center Size";
     document.getElementById("centerSize").innerHTML = centerSize;

    //glassIn & glassOut
    glassIn = sixSevenOut - 85;
    glassInHeight = centerSize - 3;
    document.getElementById("glassInSn").innerHTML = "6";
    document.getElementById("glassInName").innerHTML = "Glass Out";
    document.getElementById("glassIn").innerHTML = glassIn + " x " + glassInHeight;
    
    glassOut = sixSevenIn - 85;
    glassOutHeight = fiveNumber - 3;
    document.getElementById("glassOutSn").innerHTML = "7";
    document.getElementById("glassOutName").innerHTML = "Glass In";
    document.getElementById("glassOut").innerHTML = glassOut + " x " + glassOutHeight;
    
    
    //Jali Size
    jaliHeight = height - 75;
    jaliLength = fiveNumber + 83;
    document.getElementById("jaliSn").innerHTML = "9";
    document.getElementById("jaliName").innerHTML = "Jali";
    document.getElementById("jali").innerHTML = jaliHeight + " x " + jaliLength;
    
}

function copyFile() {
    // Your variables
    var variable1 = heightSave;
    var variable2 = lengthSave;
    var variable3 = OneNum;
    var variable4 = sixSevenIn;
    var variable5 = sixSevenOut;
    var variable6 = fiveNumber;
    var variable7 = centerSize;
    var variable8 = glassIn;
    var variable88 = glassInHeight;
    var variable9 = glassOut;
    var variable99 = glassOutHeight;
    var variable10 = centerGlass;
    var variable1010 = centerGlassHeight;
    var variable11 = jaliHeight;
    var variable1111 = jaliLength;

// Concatenate the variables into a single string
    var allData = '1)' + ' ' +  'Length' + ' = ' + variable1 + '\n' +
                  '2)' + ' ' +  'Height' + ' = ' + variable2 + '\n' +
                  '3)' + ' ' +  '1/2' + ' = ' + variable3 + '\n' +
                  '4)' + ' ' +  '6/7 In' + ' = ' + variable4 + '\n' +
                  '5)' + ' ' +  '6/7 Out' + ' = ' + variable5 + '\n' +
                  '6)' + ' ' +  'Five Number' + ' = ' + variable6 + '\n' +
                  '7)' + ' ' +  'Center Size' + ' = ' + variable7 + '\n' +
                  '8)' + ' ' +  'Glass In' + ' = ' + variable8 + ' x ' + variable88 +'\n' +
                  '9)' + ' ' +  'Glass Out' + ' = ' + variable9 + ' x ' + variable99 + '\n' +
                  '10)' + ' ' +  'Center Glass' + ' = ' + variable10 + ' x ' + variable1010 + '\n' +
                  '11)' + ' ' +  'Jali' + ' = ' + variable11 + ' x ' + variable1111;

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

