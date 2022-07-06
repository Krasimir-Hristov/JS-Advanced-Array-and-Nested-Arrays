function solve(arr, firstFlavor, secondFlavor) {
let indexFirstFlavor = arr.indexOf(firstFlavor);
let indexSecondFlavor = arr.indexOf(secondFlavor);
let result = arr.slice(indexFirstFlavor, indexSecondFlavor + 1);

return result


}
solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie');