const PickHausResume = artifacts.require("PickHausResume");

contract("PickHausResume", function (accounts) {
  describe("Deployment", async () => {
    let contract;
    beforeEach(async () => {
      contract = await PickHausResume.deployed();
    });
    it("deploys", async () => {
      assert.exists(contract);
    });
    it("can retrieve the owner", async () => {
      const owner = await contract.owner();
      assert.equal(owner, accounts[0]);
    });
    it("can retrieve the name", async () => {
      const name = await contract.name();
      assert.equal(name, "PickHausResume");
    });
    it("can retrieve the name", async () => {
      const symbol = await contract.symbol();
      assert.equal(symbol, "LJP");
    });
    it("It can pause the contract", async () => {
        await contract.pause();
        assert.isTrue(await contract.paused());
      });
  });
});
