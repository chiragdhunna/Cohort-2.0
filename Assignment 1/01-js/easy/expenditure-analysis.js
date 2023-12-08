/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function solve(result, category, totalSpent) {
  for (let i of result) {
    if (i["category"] === category) {
      i["totalSpent"] += totalSpent;
      return true;
    }
  }

  return false;
}

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i of transactions) {
    let category = i["category"];
    let totalSpent = i["price"];

    let chk = solve(result, category, totalSpent);

    if (!chk) {
      result.push({
        category: category,
        totalSpent: totalSpent,
      });
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
