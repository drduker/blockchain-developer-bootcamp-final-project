const Migrations = artifacts.require("./Deploy.sol");

module.exports = function (deployer) {
  deployer.deploy(MyToken);
};
