const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const NATR = await ethers.getContractFactory("NATR");
  const instance = await upgrades.deployProxy(NATR, [42]);
  await instance.deployed();

  // Upgrading
  const NATRV2 = await ethers.getContractFactory("NATRV2");
  const upgraded = await upgrades.upgradeProxy(instance.address, NATRV2);
}

main();