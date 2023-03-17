import { expect } from 'chai';
import { describe, it } from 'vitest';





     describe("FIZZBUZZ",() =>{
        
          it('Should throw if not number is provided as parameter',()=>{
              expect(() => fizzbuzz()).toThrow()
          })
          it('Should throw a specific error message if not number is provided as parameter',()=>{
              expect(() => fizzbuzz()).toThrow('paramater provided must be a number')
          })
          it('Should throw a specific error message  if not number is provided',()=>{
              expect(() => fizzbuzz(NaN)).toThrow('paramater provided must be a number')
          })
          it('should return 1 if number provided is 1',() =>{
              expect(fizzbuzz(1)).toBe(1)
          })
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
          it('should return fizzbuzz if number provided is multiple of 3 and 2',()=>{
              expect(fizzbuzz(6)).toBe('Harkaitz Trujillo')
              expect(fizzbuzz(12)).toBe('Harkaitz Trujillo')
              expect(fizzbuzz(18)).toBe('Harkaitz Trujillo')
          })
      })