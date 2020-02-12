var obj1={   //object one
    key1:"val1",
    key2:"val2"
}
var obj2={  //object two
    key2:"val2",
    key1:"val1"
}
count=0;  
function compstr(){
    k1=Object.keys(obj1) //get the keys from objects
    k2=Object.keys(obj2)
    k1.sort() //sorting the keys
    k2.sort()
    if(k1.length == k2.length ){
        for (i=0;i<k1.length;i++)
            if (obj1[k1[i]]==obj2[k2[i]])  count++
    }
    count==k1.length ? console.log("equal") : console.log("not equal")
}

compstr()


