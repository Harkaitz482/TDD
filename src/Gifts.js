const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"] 
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
export const distribuiteGiftHTC=(packOfGifts, reindeers)=> {

    let pesoPack = 0;
    let cargaRenos = 0;

    
    packOfGifts
    .forEach(element => {
        let tamaño = element.length;
        pesoPack += tamaño;
        return pesoPack;
    });

    reindeers.forEach(element =>{
        let carga = (element.length * 4)
        cargaRenos += carga;
        return cargaRenos;
    })
 
    let resultado = Math.floor(cargaRenos/pesoPack)
  return resultado;
  
}
