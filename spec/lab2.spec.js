const User=require('../lab2');
describe("User class",()=>{
    beforeEach(() => {
        console.log("Before Each");
        userObj = new User("Ali","1234");
        userObj.cart=[];
    });
    describe("addToCart function",()=>{
        it(`test if length of cart is increase
         when adding new products or not`,()=>{
            const cartLength = userObj.cart.length; 
            const product = { name: "Test Product", price: 10 }; 
            userObj.addToCart(product); 
            expect(userObj.cart.length).toBeGreaterThan(cartLength);
      
        })

    });
    
    describe("calculateTotalCartPrice function",()=>{
        it(`test if function return a total price 
        after adding price object or not`,()=>{
            const products = 
            { name: "Test Product 1", price: 10,
              name: "Test Product 2", price: 20 }; 
            userObj.addToCart(products); 
            const actuallTotalPrice=userObj.cart.reduce((accPrice, prd) => accPrice + prd.price, 0)
            expect(userObj.calculateTotalCartPrice()).toEqual(actuallTotalPrice);
        });
    
    });
    describe("checkout function",()=>{
        it(`test if  member functions in checkout method 
        called once and isVerify is return true`,()=>{
            const paymentModel={
            goToVerifyPage: jasmine.createSpy("goToVerifyPage"),
            returnBack: jasmine.createSpy("returnBack"),
            isVerify: jasmine.createSpy("isVerify")
      
            }
            paymentModel.isVerify.and.returnValue(true);
             const paymentResult=userObj.checkout(paymentModel);
            expect(paymentModel.goToVerifyPage).toHaveBeenCalledTimes(1);
            expect(paymentModel.returnBack).toHaveBeenCalledTimes(1);
            expect(paymentResult).toEqual(true)
           
            });
});
})