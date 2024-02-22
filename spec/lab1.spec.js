const {capitalizeTextFirstChar,createArray,random,removePropertyFromObject}=require('../lab1');

/* test capitalizeTextFirstChar function*/
describe("capitalizeTextFirstChar function",()=>{

     it(`test that the function takes a string
      it will return type to be a string`,()=>{
          expect(capitalizeTextFirstChar("some string")).toEqual(jasmine.any(String))    
     });  //test specific case in function
     it(`test that the function takes a string and
      return it after capitalize it`,()=>{
         expect(capitalizeTextFirstChar("small string")).toEqual("Small String")  ;
 
     })
});


describe("createArray function", () => {
     it(`test that the return value of type array`, () => {
         expect(createArray(4)).toEqual(jasmine.any(Array));
     });  
 
     it(`test if we pass 2 it will return array of length 2
      and test it includes 1`, () => {
         const arr = createArray(2);
         expect(arr.length).toEqual(2);
         expect(arr).toContain(1);
     });
 
     it(`test if we pass 3 it will return array of length 3
      and test it doesn't include 3`, () => {
         const arr = createArray(3);
         expect(arr.length).toEqual(3);
         expect(arr).not.toContain(3);
     });
 });
 describe("random function",()=>{

     it(`test that the return value is a number`,()=>{
          expect(random(1,8)).toEqual(jasmine.any(Number))    
     });  
     it(`test if we pass 5,7 
     it will return a number >= 5 and <= 7`,()=>{
          expect(random(5, 7)).toBeGreaterThanOrEqual(5);
          expect(random(5, 7)).toBeLessThanOrEqual(7);

     })
     it(`test if we pass 3 it will return NaN`,()=>{
          expect(isNaN(random(3))) ; 
     
     })
});
//
describe("removePropertyFromObject",()=>{

     it(`should take property/key and check 
     that's defined in that object or throwing an error`,()=>{
          expect(function (){
               const obj={a: 1, b: 2, c: 3};
               removePropertyFromObject(obj,'notProp')
          }).toThrow()  
     });  
    
     it(`should return type of object`,()=>{
          expect(removePropertyFromObject({a: 1, b: 2, c: 3},'a')).toEqual(jasmine.any(Object));
      
     })
     it(`should return the object without the property`,()=>{
          expect(removePropertyFromObject({a:1,b:2,c:3},"a")).toEqual({b:2,c:3}) ; 
     })
});