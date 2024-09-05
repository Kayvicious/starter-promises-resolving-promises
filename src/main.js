const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Can you tell me my future?"

const promise = tell(question);

console.log(promise);
promise.then(console.log)