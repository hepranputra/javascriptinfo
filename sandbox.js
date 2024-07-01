let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 2500,
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    
    return maxName;
}

console.log(topSalary(salaries));
