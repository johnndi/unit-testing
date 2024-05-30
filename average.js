 let student={name:"name",math:"math",english:"english",kiswahili:"kiswahili" ,Re:"Re",computer:"computer" ,chemistry:"chemistry", physics:"physics"   
}
export function calculateGradesAndAverage(math){
    if( math <=100 && math >=70){
        return "A";
    }
    else if(math <70 && math >=60){
        return "B";
    }
    else if(math <60 && math >=50){
        return "C";
    }
    else if(math <50 && math >=40){
        return "PASS";
    }
    else {
        return "SUP";
    }
}


export function calculateGradesAndAverageLanguages(languages){
    if( languages <=100 && languages >=75){
        return "A";
    }
    else if(languages <75 && languages >=65){
        return "B";
    }
    else if(languages <65 && languages >=55){
        return "C";
    }
    else if(languages <55 && languages >=45){
        return "PASS";
    }
    else {
        return "SUP";
    }
}

export function calculateGradesAndAverageRe(Re){
    if( Re <=100 && Re >=80){
        return "A";
    }
    else if(Re <80 && Re >=70){
        return "B";
    }
    else if(Re <70 && Re >=60){
        return "C";
    }
    else if(Re <60 && Re >=50){
        return "PASS";
    }
    else {
        return "SUP";
    }
}

//export default calculateGradesAndAverageRe
student ={
    name: "john",
    math: 30,
    english:40,
    kiswahili:50,
    physics: 60,
    chemistry: 70,
    Re: 80,
    computer: 90,
}

export function averageTotal(student){
  let result =  (student.math + student.english + student.kiswahili + student.Re + student.computer + student.physics +student.chemistry)/7
  student ={
    name: student.name,
    math:calculateGradesAndAverage(student.math),
    english:calculateGradesAndAverageLanguages(student.english),
    kiswahili:calculateGradesAndAverageLanguages(student.kiswahili),
    physics:calculateGradesAndAverage(student.physics),
    chemistry:calculateGradesAndAverage(student.chemistry),
    Re:calculateGradesAndAverageRe(student.Re),
    computer:calculateGradesAndAverageLanguages(student.computer),
}

console.log(calculateGradesAndAverage(result)                                                                  );    
    return student;
}


console.log(averageTotal(student));