const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://sonnvph20319:MyIo2I4FdG2IkFtx@ss.meuyerx.mongodb.net/CP");
    console.log("Connect Successfully !");
  } catch (error) {
    console.log("Connect Failure !");
  }
}
module.exports = {connect};