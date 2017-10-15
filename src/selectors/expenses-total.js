
//Get the total amount of displayed expenses

export default (expenses) => expenses
    .reduce((sum, { amount }) =>  sum + amount, 0);