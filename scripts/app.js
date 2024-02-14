import { personData, MakeRow, PopulateOnClick, DisplayResults } from "./function.js";

let data = await personData();
let sortIdBigToSmall, sortIdSmallToBig, sortAgeBigToSmall, sortAgeSmallToBig, sortHeightTallToShort, sortHeightShortToTall;
let sortFirstNameAsc, sortFirstNameDesc, sortLastNameAsc, sortLastNameDesc;
let sortId, sortAge, sortHeight, sortFirstName, sortLastName;
let index = 1;
let limit = 0;
// console.log(data);
// console.log(data.People[0].FirstName);

let injectRows = document.querySelector('#injectRows');
let sortByID = document.querySelector('#sortByID');
let sortByFirstName = document.getElementById('sortByFirstName');
let sortByLastName = document.getElementById('sortByLastName');
let sortByHeight = document.querySelector('#sortByHeight');
let sortByAge = document.getElementById('sortByAge');
let results = document.querySelector('#results');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

const PopulateTable = (data) => {
    data.People.map(person => {
        MakeRow(person.Id, person.FirstName, person.LastName, person.Height, person.Age, injectRows);
    });
}
PopulateTable(data);

results.addEventListener('change', function () {
    let pages = DisplayResults(results.value, data.People);
    injectRows.innerHTML = '';
    pages[0].map(person => MakeRow(person.Id, person.FirstName, person.LastName, person.Height, person.Age, injectRows));

});

nextBtn.addEventListener('click', function () {
    let pages = DisplayResults(results.value, data.People);
    switch (parseInt(results.value)) {
        case 10:
            limit = 10;
            break;
        case 20:
            limit = 5;
            break;
        case 30:
            limit = 4;
            break;
        case 40:
            limit = 3;
            break;
        case 50:
            limit = 2;
            break;
        default:
            break;
    }
    injectRows.innerHTML = '';
    pages[index].map(person => MakeRow(person.Id, person.FirstName, person.LastName, person.Height, person.Age, injectRows));
    index++;
    if (index < 0) {
        index = 0;
    } else if (index > limit) {
        index = limit;
    }
    console.log(index);
});

prevBtn.addEventListener('click', function () {
    console.log(results.value);
    let pages = DisplayResults(results.value, data.People);
    switch (parseInt(results.value)) {
        case 10:
            limit = 10;
            break;
        case 20:
            limit = 5;
            break;
        case 30:
            limit = 4;
            break;
        case 40:
            limit = 3;
            break;
        case 50:
            limit = 2;
            break;
        default:
            break;
    }
    injectRows.innerHTML = '';
    pages[index].map(person => MakeRow(person.Id, person.FirstName, person.LastName, person.Height, person.Age, injectRows));
    index--;
    if (index < 0) {
        index = 0;
    } else if (index > limit) {
        index = limit;
    }
    console.log(index);
});

sortId = true;
sortByID.addEventListener('click', function () {
    sortIdBigToSmall = data.People.slice().sort((a, b) => b.Id - a.Id);
    sortIdSmallToBig = data.People.slice().sort((a, b) => a.Id - b.Id);
    injectRows.innerHTML = '';
    sortId ? PopulateOnClick(sortIdBigToSmall) : PopulateOnClick(sortIdSmallToBig);
    sortId = !sortId;
});

sortAge = true;
sortByAge.addEventListener('click', function () {
    sortAgeBigToSmall = data.People.slice().sort((a, b) => b.Age - a.Age);
    sortAgeSmallToBig = data.People.slice().sort((a, b) => a.Age - b.Age);
    injectRows.innerHTML = '';
    sortAge ? PopulateOnClick(sortAgeBigToSmall) : PopulateOnClick(sortAgeSmallToBig);
    sortAge = !sortAge;
});

sortHeight = true;
sortByHeight.addEventListener('click', function () {
    sortHeightTallToShort = data.People.slice().sort((a, b) => {
        let bHeight = parseInt(b.Height.split(' ')[0]);
        let aHeight = parseInt(a.Height.split(' ')[0]);
        return bHeight - aHeight;
    });
    sortHeightShortToTall = data.People.slice().sort((a, b) => {
        let aHeight = parseInt(a.Height.split(' ')[0]);
        let bHeight = parseInt(b.Height.split(' ')[0]);
        return aHeight - bHeight;
    })
    injectRows.innerHTML = '';
    sortHeight ? PopulateOnClick(sortHeightTallToShort) : PopulateOnClick(sortHeightShortToTall);
    sortHeight = !sortHeight;
});

sortFirstName = true;
sortByFirstName.addEventListener('click', function () {
    sortFirstNameAsc = data.People.slice().sort((a, b) => {
        return a.FirstName.localeCompare(b.FirstName);
    });
    sortFirstNameDesc = data.People.slice().sort((a, b) => {
        return b.FirstName.localeCompare(a.FirstName);
    });
    injectRows.innerHTML = '';
    sortFirstName ? PopulateOnClick(sortFirstNameAsc) : PopulateOnClick(sortFirstNameDesc);
    sortFirstName = !sortFirstName;
});

sortLastName = true;
sortByLastName.addEventListener('click', function () {
    sortLastNameAsc = data.People.slice().sort((a, b) => {
        return a.LastName.localeCompare(b.LastName);
    });
    sortLastNameDesc = data.People.slice().sort((a, b) => {
        return b.LastName.localeCompare(a.LastName);
    });
    injectRows.innerHTML = '';
    sortLastName ? PopulateOnClick(sortLastNameAsc) : PopulateOnClick(sortLastNameDesc);
    sortLastName = !sortLastName;
});