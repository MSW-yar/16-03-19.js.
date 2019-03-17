// node js mein hamein 3rd party server and installatiion server khud install kre fa.
// npm package json ko prhe ga and identify k kia kia hai and do repective installation.
// build pipeline ?
//vanilla JS kehte hein unhen jo ham web pe dekhte hein.

// let bn = "baby";
// console.log(bn);
// var b = "janu";
// console.log(b);
//
// import { a } from "./2ndindex"; //destructuring
// a();
//
// let cb = 'baby mere jaanu'
// console.log(cb);

//common js modules? donot work with import and export hence node js walon ne apni implementation banai thi
// var a = require("./2ndindex");
// a();

//making server.req telss incoming mein kia hai. check that server 3000 k paas jo url hamein
//
import http from "http";
http.createServer((req, res, nxt) => {
    /////// req.get('/',()=> {
    ///////   console.log('chicken');
    /////// })
    console.log(req);
    if (req.url == "/") {
      // if ki condition mei im checking path.
      res.end("chicken"); // end used to make clear thet it should end. req ko print kring phr ham checking path then giving respond to.
    }
  })
  .listen(3000);  // listens incoming req. port ka naam hai 3000 jidhr req coming.
