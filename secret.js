console.log(
    require("crypto")
      .createHmac("sha256", "no por madrugar amanece más temprano")
      .update("se pilla antes a un mentiroso que a un cojo")
      .digest("hex")
  );
// console.log(
//     require("crypto")
//       .createHmac("sha256", "no dispares la flecha que pueda volverse contra ti")
//       .update("donde fueres haz lo que vieres")
//       .digest("hex")
//   );
