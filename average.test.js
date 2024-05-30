//import { describe } from "yargs";
import {averageTotal, calculateGradesAndAverageRe, calculateGradesAndAverage, calculateGradesAndAverageLanguages} from "./average";

describe("Re", ()=>{
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageRe(90)).toEqual("A")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageRe(70)).toEqual("B")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageRe(60)).toEqual("C")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageRe(50)).toEqual("PASS")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageRe(40)).toEqual("SUP")
    })
})

describe("language", ()=>{
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageLanguages(77)).toEqual("A")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageLanguages(70)).toEqual("B")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageLanguages(60)).toEqual("C")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageLanguages(50)).toEqual("PASS")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverageLanguages(40)).toEqual("SUP")
    })
})
describe("SCIENCE", ()=>{
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverage(70)).toEqual("A")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverage(60)).toEqual("B")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverage(50)).toEqual("C")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverage(40)).toEqual("PASS")
    })
    test("checks grades" , ()=>{
        expect(calculateGradesAndAverage(30)).toEqual("SUP")
    })
})

describe("averagepts",()=>{
    test("check average marks",()=>{
        expect(averageTotal({
            name: "john",
            math: 30,
            english:40,
            kiswahili:50,
            physics: 60,
            chemistry: 70,
            Re: 80,
            computer: 90,
        })).toEqual(
             
        { 
        name: 'john',
        math: 'SUP',
        english: 'SUP',
        kiswahili: 'PASS',
        physics: 'B',
        chemistry: 'A',
        Re: 'A',
        computer: 'A'
      
        }
    )
            })
    })



   
 
    
 
