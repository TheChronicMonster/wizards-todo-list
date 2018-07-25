var ToDo = artifacts.require("./ToDo.sol");

module.exports = function(deployer) {
  deployer.deploy(ToDo, "This is Wizards ToDo DApp");
};
