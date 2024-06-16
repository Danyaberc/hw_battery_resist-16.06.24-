let elBtnDicr = document.querySelector('.btn__dicr')
let elBtnIcr = document.querySelector('.btn__icr')
let elResult = document.querySelector('.result')
let elResist = document.querySelector('.resist')

let resist = 10;
let voltage = 12;
let conductRes = 1.6;



elBtnDicr.addEventListener('click',(ev)=>{
    if(resist > 0 ){
        resist-=1
        let callFun = countVal(resist)
        elResult.innerHTML = `${callFun} ${'Сила струму (А)'}`;
        elResist.innerHTML = `${resist} ${'Опір(Ом)'}` ;
    }
    if(resist <= 0){
        elResult.innerHTML = 'SHOTI KLAZAESH HOROSH'
        elResist.innerHTML = 'NE MAYE SIL R';
        return
    }
    
    
})

elBtnIcr.addEventListener('click',(ev)=>{
    resist+=1
    let callFun = countVal(resist)
    elResult.innerHTML = `${callFun} ${'Сила струму(А)'}`;
    elResist.innerHTML = `${resist} ${'Опір(Ом)'}` ;
    
})

let countVal = (actualResist) =>{
    let resCount = (voltage / actualResist) + conductRes
    return resCount
}


