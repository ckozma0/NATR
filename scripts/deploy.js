const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const natr = await ethers.getContractFactory("NATR");
  const instance = await upgrades.deployProxy(natr, [42]);
  await instance.deployed();

  // Upgrading
  const natrV2 = await ethers.getContractFactory("NATRV2");
  const upgraded = await upgrades.upgradeProxy(instance.address, natrV2);
}

main();