const billInputDiv = document.getElementById('billTotalInput')
const tipInputDiv = document.getElementById('tipInput')
const numberofpeople = document.getElementById('numberOfPeople')
const perpersontotalDiv = document.getElementById('perPersonTotal')

let OfPeople = Number(numberofpeople.innerText)

//calculate billTotalInput
const calculateBill = () => {
  const bill = Number(billInputDiv.value)

  const tip = Number(tipInputDiv.value) / 100

  const tipAmount = tip * bill

  const totalAmount = bill + tipAmount

  const Totalperson = totalAmount / OfPeople

  perpersontotalDiv.innerText = `$${Totalperson.toFixed(2)}`
}
//Slipt between two or more people
const increasePeople = () => {
  OfPeople += 1

  numberofpeople.innerText = OfPeople

  calculateBill()
}
//Split bill between fewer people
const decreasePeople = () => {
  if(OfPeople <= 1) {
    return
  }
  
  OfPeople -= 1
  
  numberofpeople.innerText = OfPeople

  calculateBill()
}
