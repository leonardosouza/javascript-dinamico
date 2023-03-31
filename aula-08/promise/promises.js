const elementP = document.createElement('p');
document.body.appendChild(elementP);
elementP.innerHTML = '';

function appendText(value){
  elementP.append(value);
}



const updateValue = (value) => {

  //SEM PROMISE
  /* setTimeout( ()=>{
    appendText(value)
    callback();
  },2000 ) */
  

  // COM PROMISE
  const promise = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      if(value === ''){
        reject("Valor não pode ser vazio");
      }else{
        resolve(value);
      }
    }, 2000 ) 
  })

  return promise;
  
}


/* async function go(){

} */

const go = async () =>{


  // SEM PROMISE
 /*  updateValue("Porto Alegre, ", ()=>{
    updateValue("São Paulo, ",()=>{
      updateValue("Rio de Janeiro", ()=>{})
    })
  }) */


  // CHAMAR EM FILA 
  ////////// --- com then
 /*  updateValue("Porto Alegre, ")
    .then( (value)=>{
        appendText(value)
        return updateValue("")
    }).then((value) => {
        appendText(value);
        return updateValue("Rio de Janeiro")
    }).then( (value)=> {
        appendText(value);
    }).catch( (erro)=> {
       console.log(erro)
    }) */



  ////////// --- com await
  /////////////////// --  manualmente
  /* const value = await updateValue("Porto Alegre")
  appendText(value)
  console.log("frases sincrona entra awaits")
  const value2 = await updateValue("São Paulo")
  appendText(value2) */
  ////////////////// -- com hofs nao funciona
  const arr = ["", "São Paulo, ", "Rio de Janeiro"]
/*   arr.forEach( async (element)=> {
      const value = await updateValue(element);
      appendText(value)
  })
 */

  ////////////////// -- com for of - funciona :)
  /* for (const iterator of arr) {
    const value = await updateValue(iterator);
    appendText(value)
  } */


  
  // CHAMAR TUDO DE UMA SÓ VEZ COM MAP
  //const arrPromise = arr.map( (element) => updateValue(element));
 /*  const arrPromise = arr.map(async (element)=> {
    const value = await updateValue(element);
    appendText(value)
  } ) */
  
  // VERIFICAR QUANDO TODOS TERMINAM SEM INTERROMPER CASO UMA CHAMADA DE ERRO
  const arrPromise = arr.map( (element) => updateValue(element).catch((erro)=>{
    console.log(erro)
  }));


  // VERIFICAR QUANDO TODOS TERMINAM E INTERROMPER SE ALGUM DAR ERRO
  ////////// ---- com then
   /*  Promise.all(arrPromise).then( (retorno)=> {
        console.log(retorno)
        retorno.forEach((value)=>{
          if(value === undefined){
            appendText("")
          }else{
            appendText(value)
          }          
          
        })
    }).catch( (erro)=>{
        console.log(erro)
    }) */
  ////////// ---- com await
    try {
        const retorno =  await Promise.all(arrPromise)
        retorno.forEach((value)=>{
          if(value === undefined){
            appendText("")
          }else{
            appendText(value)
          }          
        })
    } catch (error) {
      console.log(erro)
    }
  
}


go();


