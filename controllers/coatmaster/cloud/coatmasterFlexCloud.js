/**
 * Native and third-party modules
 */
 const wrapper = require("../../../utilities/wrapper/wrapper");

 /**
  * Own modules
  */
 const coatmasterFlex = require("../../../utilities/axios/coatmasterFlex");
 
 /**
  * Controllers
  */
 exports.coatmasterFlexCtrl = wrapper(async (req, res, next) => {
   console.log("[coatmasterFlexCtrl]: Coatmaster flex");
   const { data } = await coatmasterFlex.get("/configurations/5020");
  //console.log(data);
   res.send({ status: true, data: data });
 });
 