let test_obj;


function doSomethingPromise() {
  return new Promise(resolve => {
    test_obj = {
    	test: 'promise!'
    }
    resolve(test_obj);
  }).then(value => {
  	test_obj.prop = 123;
  	return test_obj;
  });
}

async function asyncCall() {
  console.log(test_obj); // should be undefined
  var result = await doSomethingPromise();
  console.log(result); // should be an object with properties test and prop
}

asyncCall();

