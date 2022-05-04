const { expect } = require("chai");

describe("Ecommerce Contract", function () {
    let ecommerce;
    let hardhatEcommerce;
    let owner;
    let addr1;
    let addr2;
    let addrs;
  
    beforeEach(async function () {
      ecommerce = await ethers.getContractFactory("Ecommerce");
      [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
      hardhatEcommerce = await ecommerce.deploy();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
          expect(await hardhatEcommerce.manager()).to.equal(owner.address);
        });
    });

    
        
});