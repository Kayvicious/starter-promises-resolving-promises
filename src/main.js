const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Can you tell me my future?"

const tellPromise = tell(question);

console.log(tellPromise);
tellPromise.then((fortune) => {
    console.log(question);
    console.log(fortune);
  });