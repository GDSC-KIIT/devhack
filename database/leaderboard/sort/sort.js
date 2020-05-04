// Bubble Sort to the rescue !

let education = require('./final_education.json')
let transport = require('./final_transport.json')
let healthcare = require('./final_healthcare.json')
let environment = require('./final_environment.json')
const fs = require('fs')

let sorted_education = []
let sorted_transport = []
let sorted_healthcare = []
let sorted_environment = []

let final_sorted_education = []
let final_sorted_transport = []
let final_sorted_healthcare = []
let final_sorted_environment = []


const load = () => {
    // Loading Education
    Object.keys(education).forEach(k => {
        let total_marks = 0;

        total_marks += parseFloat(education[k]['marks']['business_potential'])
        total_marks += parseFloat(education[k]['marks']['impact_on_society'])
        total_marks += parseFloat(education[k]['marks']['innovation'])
        total_marks += parseFloat(education[k]['marks']['practicality'])
        total_marks += parseFloat(education[k]['marks']['prototype'])

        sorted_education.push({
            uid: k,
            total: total_marks
        })
    })

    // Loading Education
    Object.keys(transport).forEach(k => {
        let total_marks = 0;

        total_marks += parseFloat(transport[k]['marks']['business_potential'])
        total_marks += parseFloat(transport[k]['marks']['impact_on_society'])
        total_marks += parseFloat(transport[k]['marks']['innovation'])
        total_marks += parseFloat(transport[k]['marks']['practicality'])
        total_marks += parseFloat(transport[k]['marks']['prototype'])

        sorted_transport.push({
            uid: k,
            total: total_marks
        })
    })

    // Loading Education
    Object.keys(environment).forEach(k => {
        let total_marks = 0;

        total_marks += parseFloat(environment[k]['marks']['business_potential'])
        total_marks += parseFloat(environment[k]['marks']['impact_on_society'])
        total_marks += parseFloat(environment[k]['marks']['innovation'])
        total_marks += parseFloat(environment[k]['marks']['practicality'])
        total_marks += parseFloat(environment[k]['marks']['prototype'])

        sorted_environment.push({
            uid: k,
            total: total_marks
        })
    })    
    
    // Loading Education
    Object.keys(healthcare).forEach(k => {
        let total_marks = 0;

        total_marks += parseFloat(healthcare[k]['marks']['business_potential'])
        total_marks += parseFloat(healthcare[k]['marks']['impact_on_society'])
        total_marks += parseFloat(healthcare[k]['marks']['innovation'])
        total_marks += parseFloat(healthcare[k]['marks']['practicality'])
        total_marks += parseFloat(healthcare[k]['marks']['prototype'])

        sorted_healthcare.push({
            uid: k,
            total: total_marks
        })
    })

    sort(sorted_education)
    sorted_education.forEach(d => {
        education[d['uid']]['total'] = d['total']
        final_sorted_education.push(education[d['uid']])
    })
    fs.writeFileSync('sorted/final_sorted_education.json', JSON.stringify(final_sorted_education))

    
    sort(sorted_transport)
    sorted_transport.forEach(d => {
        transport[d['uid']]['total'] = d['total']
        final_sorted_transport.push(transport[d['uid']])
    })
    fs.writeFileSync('sorted/final_sorted_transport.json', JSON.stringify(final_sorted_transport))


    sort(sorted_environment)
    sorted_environment.forEach(d => {
        environment[d['uid']]['total'] = d['total']
        final_sorted_environment.push(environment[d['uid']])
    })
    fs.writeFileSync('sorted/final_sorted_environment.json', JSON.stringify(final_sorted_environment))


    sort(sorted_healthcare)
    console.log(sorted_healthcare)
    sorted_healthcare.forEach(d => {
        healthcare[d['uid']]['total'] = d['total']
        final_sorted_healthcare.push(healthcare[d['uid']])
    })
    fs.writeFileSync('sorted/final_sorted_healthcare.json', JSON.stringify(final_sorted_healthcare))

}

const sort = (arr) => {
    let sorted = false;

    while(!sorted){
        sorted = true;

        for(let i=0; i<arr.length-1; i++){
            if(arr[i]['total'] < arr[i+1]['total']) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp

                sorted = false
            }
        }
    }
}

load()