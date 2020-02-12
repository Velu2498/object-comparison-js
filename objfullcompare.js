var obj1 = {
  arr: [1, 2, 3, "gegdszrt"],
  nes: { k: "v" },
  str: "nhtdt",
  num: 123456,
  bul: true
};
var obj2 = {
  arr: [1, 2, 3, "gegdszrt"],
  // arr:"gbdhfb",
  nes: { k: "v" },
  str: "nhtdt",
  num: 123456,
  bul: true
};
compobj(obj1, obj2)

//object comparison
function compobj(obj1, obj2) {
  var count = 0;
  k1 = Object.keys(obj1);
  k2 = Object.keys(obj2);
  if (k1.length == k2.length) { // chheck the length is equal
    for (i = 0; i < k1.length; i++) {
      if (typeof obj1[k1[i]] == typeof obj2[k2[i]]) { //check the data types
        // count++
        if (typeof obj1[k1[i]] == "object") { //type object
          if (Array.isArray(obj1[k1[i]]) && Array.isArray(obj1[k1[i]])) { //for array
            console.log("array");
            if ((obj1[k1[i]], obj2[k2[i]])) {
              count++;
            }
          } else { //for nested object
            console.log("object");
            if (compobj(obj1[k1[i]], obj2[k2[i]])) {
              count++;
            }
            // else console.log("no count in obj")
          }
        }
        else { //for str,int,bool
          console.log("str,int,bool");
          if(compstr(obj1[k1[i]],obj2[k2[i]])) { count++ }
          // count++
        }
      }
    }
  }
  // console.log(`arr-${k1},len-${k1.length},count-${count}`)
  if (count == k1.length) { 
    console.log("equal");
    return true;
  } 
  else {
    console.log(count);
    return false;
  }
}

//compare array
function comparr(arr1, arr2) {
  var countarr = 0;
  if (arr1.length == arr2.length) {
    for (i of arr1) {
      for (j of arr2) {
        if (i == j) countarr++;
      }
    }
  }
  countarr == arr1.length ? (arr = true) : (arr = false);
  return arr;
}
// console.log(comparr([1,2,5,6],[1,2,3]))

//compare strs
function compstr(str1, str2) {
  if (str1 === str2) return true;
  else return false;
}
