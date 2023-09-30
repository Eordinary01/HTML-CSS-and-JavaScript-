// console.log("This is module");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
        
    });
return sum/arr.length;
}

// module.exports = average;
// module.exports.new = " New joining "
// module.exports.name = "Parth Manocha"
// module.exports.profession = "Senior Developer"

module.exports = 
        {
    Name:"Parth",
    Role:"Senior Developer",
    Salary:100000,
}
