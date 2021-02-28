const fs = require('fs');
function Cluster(name, environment, region) {
  this.name = name;
  this.environment = environment;
  this.region = region;
}

Cluster.prototype.toString = function () {
  return (
    'Cluster: \033[32m' +
    this.name +
    '\33[0m, Environment: \033[32m' +
    this.environment +
    '\033[0m, Region: \033[32m' +
    this.region +
    '\033[0m'
  );
};

Cluster.prototype.createRole = function (stack) {
  // return an object representing the role
  let role = {
    role: `role will be here for ${stack}`,
  };
  return role;
};

Cluster.prototype.createDataBag = function (stack) {
  // return an object representing the databag item
  let dataBag = {
    text: 'This will be the data bag obj',
  };
  return role;
};
