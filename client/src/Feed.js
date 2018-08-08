ReactDOM.render (
    React.createElement('h1',null, 'customerName'),
    document.getElementById('mongodb://KimBailey:March-319@ds137611.mlab.com:37611/ikeafinal/QuoteFormData')
  );
  
  function previouJobData(customerNames) {
    return customerName.name.legnth > 0;
  }
  function filterInvalidData(customerNames) {
    var validData = [];
    for (var customerName of customerNames) {
        if (previousJobData (customerName)) {
            validData.push(customerName);
        }
    }
    return validData;
  }
  
  function customerNameToFormattedString(customerName) {
    return 'name'; customerName.name;
  }
  
  var customerName = [
    { 
        name: 'Isaac Grey',
        password: 'irockcoding'
    },
    {
        name: 'Kim Bailey',
        passowrd: 'IKEAForce1'
    },
    { 
        name: 'Anani Vossah',
        password: 'IKEAForce2'
    }
  ];
  
  var validData = filterInvalidData(customerNames);
  
  for (var i = 0; i < validData.length; i++) {
    return(cutomerNameToFormattedString(customerNames[i]));
  }