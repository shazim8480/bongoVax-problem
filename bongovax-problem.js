const patientData = [
  {
    name: "Biplap",
    age: 22,
    temperature: 98,
  },
  {
    name: "Sunil",
    age: 21,
    temperature: 98,
  },
  {
    name: "Kabir",
    age: 36,
    temperature: 99,
  },
  {
    name: "Rahul",
    age: 37,
    temperature: 99,
  },
  {
    name: "Paul",
    age: 42,
    temperature: 98,
  },
  {
    name: "Kat",
    age: 41,
    temperature: 98,
  },
  {
    name: "Nayem",
    age: 50,
    temperature: 100,
  },
  {
    name: "Sabnaj",
    age: 51,
    temperature: 101,
  },
]; //patient data

//my main function
function vaxTrail(data) {
  const patients = data; //store patient data in a local variable
  //initialize all condition
  const conditionA = filterHandler("A", patients, 20, 30, 100, "lt");
  const conditionB = filterHandler("B", patients, 31, 40, 100, "lt");
  const conditionC = filterHandler("C", patients, 41, 50, 100, "lt");
  const conditionD = filterHandler("D", patients, null, null, 100, "gte");
  const output = {
    A: conditionA,
    B: conditionB,
    C: conditionC,
    D: conditionD,
  };
  return output;
}

//all condition filter will execute here
function filterHandler(
  condition,
  allData,
  ageRangeOne,
  ageRangeTwo,
  tempValue,
  tempCondition
) {
  const patients = allData; //store patient data in a local variable
  switch (condition) {
    case "A": {
      const output = patients
        .filter((patient) => {
          //it will return a array object
          const filtering = filteringHandler(
            condition,
            ageRangeOne,
            ageRangeTwo,
            patient,
            tempValue,
            tempCondition
          ); //it will sorting by age dynamically and with temp
          return filtering;
        })
        .sort((a, b) => (a.age % 2) - (b.age % 2)); //it will sort data by age in even order
      return output; //it will return a array object with all filtering and sorting
    }
    case "B": {
      const output = patients
        .filter((patient) => {
          //it will return a array object
          const sorting = filteringHandler(
            condition,
            ageRangeOne,
            ageRangeTwo,
            patient,
            tempValue,
            tempCondition
          ); //it will sorting by age dynamically and with temp
          return sorting;
        })
        .sort((a, b) => (a.age % 2) - (b.age % 2)); //it will sort data by age in even order
      return output; //it will return a array object with all filtering and sorting
    }
    case "C": {
      const output = patients
        .filter((patient) => {
          //it will return a array object
          const sorting = filteringHandler(
            condition,
            ageRangeOne,
            ageRangeTwo,
            patient,
            tempValue,
            tempCondition
          ); //it will sorting by age  and with temp dynamically
          return sorting;
        })
        .sort((a, b) => (a.age % 2) - (b.age % 2)); //it will sort data by age in even order
      return output; //it will return a array object with all filtering and sorting
    }
    case "D": {
      const output = patients
        .filter((patient) => {
          //it will return a array object
          const sorting = filteringHandler(
            condition,
            ageRangeOne,
            ageRangeTwo,
            patient,
            tempValue,
            tempCondition
          ); //it will sorting by age with temp dynamically
          return sorting;
        })
        .sort((a, b) => (a.age % 2) - (b.age % 2)); //it will sort data by age in even order
      return output; //it will return a array object with all filtering and sorting
    }
    default:
      return [];
  }
}

//handler the temperature Value condition
function tempFilterHandler(tempCondition, tempValue, patientData) {
  const patient = patientData;
  let output;
  if (tempCondition == "lt") output = patient.temperature < tempValue;
  if (tempCondition == "lte") output = patient.temperature <= tempValue;
  if (tempCondition == "gt") output = patient.temperature > tempValue;
  if (tempCondition == "gte") output = patient.temperature >= tempValue;
  if (tempCondition == "eq") output = patient.temperature == tempValue;
  if (tempCondition == "deq") output = patient.temperature === tempValue;
  return output;
}

//handle the main condition filtering
function filteringHandler(
  condition,
  ageRangeOne,
  ageRangeTwo,
  patientData,
  tempValue,
  tempCondition
) {
  const patient = patientData; //store single patient data in a local variable
  const temp = tempFilterHandler(tempCondition, tempValue, patient); //it will return the temperature condition dynamically
  if (condition == "A")
    return patient.age >= ageRangeOne && patient.age <= ageRangeTwo && temp;
  if (condition == "B")
    return patient.age >= ageRangeOne && patient.age <= ageRangeTwo && temp;
  if (condition == "C")
    return patient.age >= ageRangeOne && patient.age <= ageRangeTwo && temp;
  if (condition == "D") return temp;
}

console.log(vaxTrail(patientData));

//expected output
/*{
  A: [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Sunil', age: 21, temperature: 98 }  
  ],
  B: [
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 }
  ],
  C: [
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 }
  ],
  D: [
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
  ]
}*/
