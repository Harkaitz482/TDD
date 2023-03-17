import { describe,expect,it } from "vitest";
import { canConfigure } from "../src/canConfigure";

 describe('can-configure',()=>{
   
    it('should return a boolean',()=>{
        expect(canConfigure('a','b')).toBeTypeOf('boolean')
    })
    it('should return a false if strings provided have different length',()=>{
        expect(canConfigure('abc','de')).toBe(false)
    })
    it('should return false if strings provided have different length even with unique letters',()=>{
        expect(canConfigure('aab','ab')).toBe(false)
    })
    it('should return false if strings provided have different number of unique letters',()=>{
        expect(canConfigure('abc','jjj')).toBe(false)
    })
   
})