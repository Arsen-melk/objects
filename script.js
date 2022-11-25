const salaries={
    John: 100,
    Ann: 160,
    Pete: 130
};

sum=0;

for(let key in salaries){
    sum=sum+salaries[key];
}
console.log(sum);


const salaries2={};

sum=0;
for( let i in salaries2){
    sum=sum+salaries2[i];
}
console.log(sum);