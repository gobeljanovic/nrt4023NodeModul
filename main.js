const math = require('mathjs');


const naKvadrat = (num) => {
    return math.multiply(num,num);
}
const faktorijel = (num) =>{
    if(num<0){
        return 'Faktorijel negativnog broja ne postoji!';
    }
    else if(num === 1 || num === 0){
        return num;
    }
    else{
        return num * faktorijel(num-1);
    }
}

const stepen = (num,stepen) => {
    return math.pow(num,stepen);
}

const koren = (num) =>{
    if(num<0){
        return "Koren ne moze od negativnog broja";
    }else{
        return math.sqrt(num);
    }
}
const ostatakPriDeljenju=(a,b)=>{
    return a % b;
}
const paranBroj=(num)=>{
    return (num % 2 === 0);
}
const neparanBroj=(num)=>{
    return (num % 2 !== 0);
}


module.exports = {
    naKvadrat,
    faktorijel,
    stepen,
    koren,
    ostatakPriDeljenju,
    paranBroj,
    neparanBroj
}