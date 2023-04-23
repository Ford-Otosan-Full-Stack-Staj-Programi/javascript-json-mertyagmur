import data from './source.json' assert { type: 'JSON' }

let arr = data
const trueFirstArr = [...arr].sort((a, b) => b.assistant - a.assistant)
let result = trueFirstArr.reduce((acc, d) => {
    const value = { name: d.name, group: d.group, assistant: d.assistant }
    if (d.assistant) {
        acc.push({ ...value, students: [] })
    }
    else {
        const found = acc.find(o => o.group === d.group)
        found.students.push(value)
    }
    return acc;
}, [])

console.log(data)
console.log(result)
//document.getElementById("json").textContent = JSON.stringify(result, undefined, 2)

let innerDivs = ""

result.forEach((obj) => {
  let color = obj.group.toLowerCase()
  let students = obj.students.map(a => a.name);

  let namesListElements = ""
  students.forEach((student) => {
    namesListElements += `<li>${student}</li>`
  })

  let namesList = `<ul>${namesListElements}</ul>`
  let title = `<h2>${obj.group}</h2>`
  let assistant = `<h3>Assistant: ${obj.name}</h3>`

  innerDivs += `<div style="background-color:${color}">${title}${assistant}${namesList}</div>`
})

var outerDiv = document.getElementById("outer");
outerDiv.innerHTML = innerDivs;