const fizzbuzz = (number) => {
     if(typeof number != 'number') throw new Error('paramater provided must be a number')
     if(Number.isNaN(number)) throw new Error('paramater provided must be a number')
 
     //if(number % 3 == 0 && number % 2 == 0) return 'Harkaitz Trujillo'
     if(number % 11 == 0) return 'Corrales'
     if(number % 3 == 0) return 'Trujillo'
     if(number % 2 == 0) return 'Harkaitz'
     const multiplies = {3:'Trujillo',2:'Harkaitz',11:'Corrales'}
     let output = ''
 
     Object
         .entries(multiplies)
         .forEach(([multiplier,word]) => {
             if(number % multiplier == 0) output += word
         })
 
     return output == '' ? number : output
 }