// XMLDocument

const rc = new XMLHttpRequest();
rc.open("GET","https://restcountries.com/v3.1/all");
rc.send();
rc.responsetype="json";
rc.onload= function result(){
    var countries=(rc.response);
    countries= JSON.parse(countries);
    console.log(countries);
    console.log(typeof countries);
    console.log(countries.length);
    console.log(countries[0].name.common);
    console.log(countries[0].flag);
    // var flags = countries.filter
    // console.log(flags);
};
result();
console.log(result());
var flags = countries.filter(e=>e.flag)
console.log(flags);

var details = countries
.filter((e)=>e.name.common , e.region, e.subregion, e.population);

// var countries= displayresult();
// var flags=countries
// .filer(e=>e(flag));
// console.log(flag);
