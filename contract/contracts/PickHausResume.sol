// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// imports were gathered from openzeppelin wizard as much as possible

contract PickHausResume is ERC721, ERC721URIStorage, Pausable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("PickHausResume", "LJP") {}

    // Define boolean mapping for if the request has been approved or not
    mapping(address=>bool) public approved;

    // Define array for AddressLUT
    address[] public addressLUT;

    // Get address length
    function size()
        public
        view
        returns (uint)
    {
        return addressLUT.length;
    }

    // This function is to send a transaction to request the resume
    function requestResume() 
        public
    {
        approved[msg.sender] = false;
        addressLUT.push(msg.sender);
    }

    // Future state where safeMint is instantiated after this approval to return my resume as an NFT to the requester after approval (or payment :))
    function approveResumeRequest(address _address) public onlyOwner
    {
        approved[_address] = true;
        safeMint(_address, "https://gateway.pinata.cloud/ipfs/Qmc1AG4SEpKUTV9pSirr3ouEpbGS6og8irJ6PghoY5wGbH");
        // Todo remove address from array and remove gap to save on storage and gas with an index
    }

    // TO pause the contract
    function pause() public onlyOwner {
        _pause();
    }

    // TO unpause the contract

    function unpause() public onlyOwner {
        _unpause();
    }

    // Function for minting token
    function safeMint(address to, string memory uri)
        public
        onlyOwner
    {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
