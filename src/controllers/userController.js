const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async function (req, res) {
  try {
    let data = req.body;
    let saveData = await User.create(data);
    res.status(201).send(saveData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async function (req, res) {
  try {
    let userEmail = req.body.emailId;
    let password = req.body.password;

    let user = await User.findOne({ emailId: userEmail, password: password });
    if (!user) {
      return res.send("emailId and password not correct");
    }

    //genrate token
    let token = jwt.sign({ userId: user._id.toString() }, "tujliman-khan");
    console.log(token);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async function (req, res) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) {
      return res.send("token is not valid");
    }
    // if(token){
    //     return res.send("token is valid")
    // }

    let decodedToken = jwt.verify(token, "tujliman-khan");
    if (!decodedToken) {
      return res.send("token is not valid please try again");
    }
    let userId = req.params.userId;
    let userDetails = await User.findById(userId);
    if (!userDetails) {
      return res.send("user does not exist");
    }

    res.status(200).send({ status: true, msg: userDetails });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message;
    //   let token=req.headers["x-auth-token"];
    //   if(!token) return res.send("invalid token");
    //   let decodedToken = jwt.verify(token,"tujliman-khan");
    //   let userToBeModified=req.params.userId;
    //   let userLoggedIn=decodedToken.userId;

    //   if(userToBeModified != userLoggedIn) return res.send({status:false,msg:"user is not allowed to modified the requeted userId"});

    let userId = req.params.userId;
    let user = await User.findById(userId);

    if (!user)
      return res
        .status(400)
        .send({ status: false, msg: "no such user exists" });
    let updatedPosts = user.posts;
    updatedPosts.push(message);
    let updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPosts },
      { new: true }
    );

    return res.status(201).send({ status: true, data: updatedUser });
  } catch (error) {
    res.status(500).send(error.message);
  }

  //   res.send(message)
};

const deleteUser = async function (req, res) {
  try {
    let userid = req.params.userId;
    let Deleteuser = await User.findOneAndUpdate(
      { _Id: userid },
      { $set: { isDeleted: true } },
      { $new: true }
    );
    res.status(200).send({ data: Deleteuser });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const userUpdateDetails = async function (req, res) {
  try {
    let userid = req.params.userId;
    let user = await User.findById(userid);
    if (!user) {
      return res.status(400).send("user does not exists");
    }

    let userdata = req.body;

    let updateU = await User.findOneAndUpdate({ _id: userid }, userdata, {
      $new: true,
    });
    res.status(202).send({ data: updateU });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.register = register;
module.exports.login = login;
module.exports.getUser = getUser;
module.exports.userUpdateDetails = userUpdateDetails;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
