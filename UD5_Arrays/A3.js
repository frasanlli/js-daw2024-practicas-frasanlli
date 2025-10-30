let data = [
    {name: "Nacho", telephone: "966112233", age: 40},
    {name: "Ana", telephone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", telephone: "633663366", age: 17}
];

//a
data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
)

console.log("APARTADO b)")
//b
for (let x = 0; x < data.length; x++) {
    console.log(data[x])
}

console.log("APARTADO c)")
//c
let data_age = []
let new_data = new Array (data.length)

for (let x = 0; x < data.length; x++) {
    data_age.push(data[x].age)
}
data_age.sort()

for (let x = 0; x < data_age.length; x++) {
    for (let i = 0; i < data.length; i++) {
        if (data_age[x] == data[i].age){
            new_data[x] = data[i]
        }
    }
}
data = new_data

for (let x = 0; x < data.length; x++) {
    console.log(data[x])
}

console.log("APARTADO d)")
//d
let data_name = []
let new_data_name = new Array (data.length)

for (let x = 0; x < data.length; x++) {
    data_name.push(data[x].name)
}
data_name.sort()

for (let x = 0; x < data_name.length; x++) {
    for (let i = 0; i < data.length; i++) {
        if (data_name[x] == data[i].name){
            new_data_name[x] = data[i]
        }
    }
}
data = new_data_name

for (let x = 0; x < data.length; x++) {
    console.log(data[x])
}

console.log("APARTADO e)")
//e
let new_vector = []
for (let x = 0; x < data.length; x++) {
    if (data[x].age > 30){
        new_vector.push(data[x])
    }
}

for (let x = 0; x < new_vector.length; x++) {
    console.log(new_vector[x])
}