const myPromise = new Promise((resolveFunction, rejectfuntion) => {
  let connect = true;
  if (connect) {
    resolveFunction("connection Etablished");
  } else {
    rejectfuntion(Error("connection  failed"));
  }
});

console.log(myPromise);

myPromise.then(
  (resolveValue) => console.log(`good ${resolveValue}`),
  (rejectValue) => console.log(`bad ${rejectValue}`)
);
