var result;

document.getElementById('excelForm').addEventListener('submit', function (event) {
    event.preventDefault();
    myExcelFuns();
});

function myExcelFuns() {
    var numberStr = document.getElementById('numbers').value;

    if (!numberStr.trim()) {
        alert("Please enter numbers with spaces between them.");
    } else {
        numberStr = numberStr.trim();
        var numberArr = numberStr.split(' ').map(Number);
        var finalNumericArray = [];
        for (var i = 0; i < numberArr.length; i++) {
            var trimmedNumber = String(numberArr[i]).trim();
            if (!isNaN(trimmedNumber)) {
                finalNumericArray.push(parseFloat(trimmedNumber));
            }
        }

        if (document.getElementById("autoSum").checked) {
            result=0;
            for (var i = 0; i < finalNumericArray.length; i++) {
                result += finalNumericArray[i];
            }
        } 
        else if (document.getElementById("average").checked) {
            result=0;
            for (var i = 0; i < finalNumericArray.length; i++) {
                result += finalNumericArray[i];
            }
            result /= finalNumericArray.length;
        } 
        else if (document.getElementById("max").checked) {
            result=0;
            result = Math.max(...finalNumericArray);
        } 
        else {
            result=0;
            result = Math.min(...finalNumericArray);
        }

        var excelOutputDiv = document.getElementById('excel-output');
        excelOutputDiv.innerHTML = "<p>Result: " + result + "</p>";
    }
}



