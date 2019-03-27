//this functions takes an array as an argument with the regular expressions as arguments and return new array with in it only
//what was available in the Search bar
export function SimplifyByReg(array, search) {
   // console.log(array,search);
    let regular = new RegExp(search, "i");
   // console.log(array.filter(m => !m.title.search(regular)));
    return array.filter(m => !m.title.search(regular));
}

