const User = require("../models/userModel");

//@desc Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
//@route Get /first
//@access Public
const firstFromList = async (req, res) => {
  const data = await User.find();
  const responseData = data.filter((item) => {
    const income = parseInt(item.income.substring(1));
    const car = item.car;
    return income < 5 && (car === "BMW" || car === "Mercedes-Benz");
  });
  res.json(responseData);
};

//@desc Male Users which have phone price greater than 10,000.
//@route Get /second
//@access Public
const secondFromList = async (req, res) => {
  const data = await User.find();
  const responseData = data.filter((item) => {
    return parseInt(item.phone_price) > 10000;
  });
  res.json(responseData);
};

//@desc Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
//@route Get /third
//@access Public
const thirdFromList = async (req, res) => {
  const data = await User.find();
  const responseData = data.filter((item) => {
    const validateEmail =
      item.email.includes(item.first_name.toLowerCase()) ||
      item.email.includes(item.last_name.toLowerCase());

    return item.last_name[0] === "M" && item.quote.length > 15 && validateEmail;
  });
  res.json(responseData);
};

//@desc Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
//@route Get /fourth
//@access Public
const fourthFromList = async (req, res) => {
  const data = await User.find();
  const responseData = data.filter((item) => {
    const carBrandValidate =
      item.car === "BMW" || item.car === "Mercedes-Benz" || item.car === "Audi";

    return carBrandValidate && !/[0-9]/.test(item.email);
  });
  res.json(responseData);
};

//@desc Show the data of top 10 cities which have the highest number of users and their average income.
//@route Get /fourth
//@access Public
const fifthFromList = async (req, res) => {
  // const data = await User.aggregate([
  //   { $group: { _id: "$city", income_average: { $avg: "$income" } } },
  // ]);
  const averageCityCount = {};
  const data = await User.find();

  data.forEach((value) => {
    if (value.city in averageCityCount) {
      averageCityCount[value.city][0]++;
      const income = parseFloat(value.income.substring(1));
      averageCityCount[value.city][1] += income;
    } else {
      averageCityCount[value.city] = [1, parseFloat(value.income.substring(1))];
    }
  });

  const average = [];
  for (let x in averageCityCount) {
    average.push({
      city: x,
      avg: (averageCityCount[x][1] / averageCityCount[x][0]).toFixed(2),
      numberOfUsers: averageCityCount[x][0],
    });
  }

  average.sort((a, b) => {
    return b.numberOfUsers - a.numberOfUsers;
  });

  res.json(average.slice(0, 11));
};

module.exports = {
  firstFromList,
  secondFromList,
  thirdFromList,
  fourthFromList,
  fifthFromList,
};
