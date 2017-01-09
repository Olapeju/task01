function dataTypes(value) {
  if ((typeof value === 'object') && (value === null)) {
    return 'no value';
  }
  else if (typeof value === 'undefined') {
    return 'no value';
  }
  else if ((typeof value === 'boolean') && (value === true )) {
    return true;
  }
  else if ((typeof value === 'boolean') && (value === false )) {
    return false;
  }
  else if ((typeof value === 'number') && (value < 100)) {
    return 'less than 100';
  }
  else if ((typeof value === 'number') && (value > 100)) {
    return 'more than 100';
  }
  else if( (typeof value === "number") && (value === 100)) {
    return 'equal to 100';
  }
  else if (typeof value === 'string') {
    return value.length;
  }
  else if ((value instanceof Array) && (value.length == 0)) {
    return undefined;
  }
  else if ((value instanceof Array) && (value.length <= 2)) {
    return undefined;
  }
  else if( (value instanceof Array) && (value.length > 2)) {
    return value[2];
  }
  else if (typeof value === 'function') {
    var callback = function(arg){
      expect(arg).toBeTruthy();
      if(arg === true){
        return 'called callback'
      }
    };
  return callback(true);
  }
  else {
    return 'not a datatype'
  }
}
