// Write your solution in this file!
const employee = {
    name:"Dave",
    streetAddress:"1251 Sycamore"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const empCopy = {...employee}
    empCopy[key] = value;
    return empCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const empCopy = {...employee}
    delete empCopy[key]
    return empCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key]
    return employee;
}