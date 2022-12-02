const students = ['Smoil', 'Rudra', 'Josh', 'Mun', 'Sum', 'Jorsy', 'Nishil', 'Reasee'];
students.sort();
const elementHeader = document.getElementById('elements');
elementHeader.textContent += students.join(', ');

const linearSearchButton = document.getElementById('linear-submit');
linearSearchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('linear-input');
    const searchValue = searchInput.value;
    const result = linearSearch(students, searchValue);
    const resultHeader = document.getElementById('linear-result');
    if (result == -1)
        resultHeader.textContent = 'Element not found';
    else
        resultHeader.textContent = `The required element is found in index ${result}`;
});

const binarySearchButton = document.getElementById('binary-submit');
binarySearchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('binary-input');
    const searchValue = searchInput.value;
    const result = binarySearch(students, searchValue);
    const resultHeader = document.getElementById('binary-result');
    if (result == -1)
        resultHeader.textContent = 'Element not found';
    else
        resultHeader.textContent = `The required element is found in index ${result}`;
});

const linearSearch = (arr, query) => {
    for (let i in arr) if (arr[i] === query) return i;
    return -1;
};

const binarySearch = (arr, query) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === query)
            return mid;
        else if (arr[mid] < query)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
};