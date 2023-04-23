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
document.getElementById("json").textContent = JSON.stringify(result, undefined, 2)