const date = require("date-and-time");//
var ip = require("ip");
const userCreate = function (req, res) {
  var url = req.url;
  var method =req.method;
  const now = new Date();
  const value = date.format(now, "YYYY-MM-DD HH:mm:ss");
  const ipad = ip.address();
  console.log("after middlewaree call \n", value, ",", ipad, ",", url,',',method);
  res.send("after middleware hit");
};

module.exports.userCreate = userCreate;
