function gradingStudents(grades) {
    // Write your code here
    return grades<38?grades:5-(grades%5)<3?grades+(5-grades%5):grades
}


console.log(gradingStudents(33))

73
67
38
33