// import personData from "../data/data.json" assert {type:'json'}
// console.log(personData);

const personData = async () => {
    const response = await fetch('../data/data.json');
    const data = await response.json();
    return data;
}

const MakeRow = (id, firstName, lastName, height, age, inject) => {
    let thRow = document.createElement('th');
    thRow.scope = 'row';
    thRow.textContent = id;
    let tdFName = document.createElement('td');
    tdFName.textContent = firstName;
    let tdLName = document.createElement('td');
    tdLName.textContent = lastName;
    let tdHeight = document.createElement('td');
    tdHeight.textContent = height;
    let tdAge = document.createElement('td');
    tdAge.textContent = age;

    let tr = document.createElement('tr');
    tr.append(thRow, tdFName, tdLName, tdHeight, tdAge);
    inject.append(tr);
}

const DisplayResults = (resultValue, array) => {
    let parseValue = parseInt(resultValue);
    let numberOfPages = Math.ceil(array.length / parseValue);
    let pages = [];
    for (let i = 0; i < array.length; i += parseValue) {
        let page = [];
        if (array.length < parseValue) {
            page = array.slice();
            pages.push(page);
        }
        else {
            page = array.slice(i, i + parseValue);
            pages.push(page);
        }
    }
    return pages;
}

const PopulateOnClick = (array) => {
    array.map(person => MakeRow(person.Id, person.FirstName, person.LastName, person.Height, person.Age, injectRows));
}

export { personData, MakeRow, PopulateOnClick, DisplayResults };