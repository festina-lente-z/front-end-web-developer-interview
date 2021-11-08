function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw 'Must provide number as first argument';
      }
      success(2 * value);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}

const successCallback = (x) => console.log(`success: ${x}`);

const failureCallback = (e) => console.log(`failure: ${e}`);

double(3, successCallback, failureCallback);
double('b', successCallback, failureCallback);
