const express = require("express");
const router= express.Router();
const UC=require("../controllers/userController")

const token=require("../middleware/auth");

//Write a POST api /users to register a user from the user details in request body.
router.post("/users",UC.register);

/*Write a POST api /login to login a user that takes user details like email and password
 from the request body. If the credentials don't match with any user's data return a suitable error. 
 On successful login, generate a JWT token and return it in response body.
*/

router.post("/login",UC.login)

/**
 Write a GET api /users/ to fetch user details. Pass the userId as path param in the url. Check that 
 request must contain x-auth-token header. If absent, return a suitable error. If present, check that
  the token is valid.
 */

router.get("/users/:userId",token.tokencheck,token.authorise,UC.getUser)

router.post("/users/:userId/posts",token.tokencheck,token.authorise,UC.postMessage)

/**
 Write a PUT api /users/ to update user details. Pass the userId as path param in the url and update
  the attributes received in the request body. Check that request must contain x-auth-token header. 
  If absent, return a suitable error.
 */

router.put("/users/:userId",token.tokencheck,token.authorise,UC.userUpdateDetails)

  /*
    Write a DELETE api /users/ that takes the userId in the path params and marks the isDeleted attribute
    for a user as true. Check that request must contain x-auth-token header. If absent, return a suitable
     error.
  */

router.delete("/users/:userId",token.tokencheck,UC.deleteUser)

/*
Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
*/


/*
Add this middleware at route level in the routes where applicable.
*/

module.exports=router;