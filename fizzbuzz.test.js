import { expect } from 'chai';
import { describe, it } from 'vitest';
import { fizzbuzz } from './src/Fizzbuzz';




     describe("FIZZBUZZ",() =>{
        
         
          it('should return 2 if number provided is 2',() =>{
              expect(fizzbuzz(2)).toBe('Harkaitz')
              expect(fizzbuzz(4)).toBe('Harkaitz')
              expect(fizzbuzz(8)).toBe('Harkaitz')
          })
          it('should return fizz if number provided is 3',() =>{
              expect(fizzbuzz(3)).toBe('Trujillo')
              
              expect(fizzbuzz(9)).toBe('Trujillo')
          })
          it('should return fizz if number provided is multiple of 3',() =>{
              
            
             
          })
         
          it('should return buzz if number provided is multiple of 11',()=>{
            expect(fizzbuzz(11)).toBe('Corrales')
            expect(fizzbuzz(55)).toBe('Corrales')
             
          })
          it('should return buzz if number provided is multiple of 5',()=>{
            
          })
          it('should return fizzbuzz if number provided is multiple of 3 and 2 ',()=>{
              expect(fizzbuzz(6)).toBe('Harkaitz Trujillo')
             
          })
      })