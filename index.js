function checkResult() {

    let marks = Number(document.getElementById("marks").value);

    let grade = "";
    let result = "";

    if (marks < 0 || marks > 100 || isNaN(marks)) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    if (marks >= 90) {
        grade = "A+";
        result = "Pass";
    }
    else if (marks >= 80) {
        grade = "A";
        result = "Pass";
    }
    else if (marks >= 70) {
        grade = "B";
        result = "Pass";
    }
    else if (marks >= 60) {
        grade = "C";
        result = "Pass";
    }
    else if (marks >= 50) {
        grade = "D";
        result = "Pass";
    }
    else {
        grade = "F";
        result = "Fail";
    }

    document.getElementById("grade").value = grade;
    document.getElementById("result").value = result;
}