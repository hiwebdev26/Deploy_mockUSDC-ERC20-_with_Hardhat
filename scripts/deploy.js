const hre = require("hardhat");

async function main() {
  // Get the ContractFactory
  const MockKStar = await hre.ethers.getContractFactory("MockKStar");
  
  // Deploy the contract
  console.log("Deploying MockKStar...");
  const mockKStar = await MockKStar.deploy(ethers.parseUnits("10000000", 18));
  
  // Wait for the deployment to finish
  await mockKStar.waitForDeployment();
  
  console.log("MockKStar deployed to:", await mockKStar.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });