export const locateQueryParam = (string, lastString)=> {
    const index = string.lastIndexOf(lastString);
    const param = string.slice(1, index);
    return param;
}

export const locateFilterTerm = (string, lastString)=> {
    const index = string.lastIndexOf(lastString);
    const term = string.slice(index+1);
    return term;
}


export const search = (array, att, searchTerm)=> {
    const newArray = [];
    array.forEach(element => {
        if (element[att].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
            newArray.push(element);
        }
    });
    return newArray;
}


export const compareValues= (key) => {
    return function (a, b) {
        if (a[key] > b[key]) return 1;
        if (b[key] > a[key]) return -1;
        return 0;
    }
  }