# Avoiding Common Attacks

I have taken care to avoid common attacks through mitigation steps identified as follows:
## [SWC-100](https://swcregistry.io/docs/SWC-100) Function default visibility

#### Remediation:
- I ensured to set a visibility parameter on ***every*** function defined in my Smart Contract
## [SWC-102](https://swcregistry.io/docs/SWC-102) Outdated Compiler Version

#### Remediation:
- I used the ***latest*** version of the solidity compiler.

## [SWC-103](https://swcregistry.io/docs/SWC-103) Floating Pragma

### Lock pragmas to specific compiler version

#### Remediation:
- I locked my pragma to version ***0.8.10***

## [SWC-131](https://swcregistry.io/docs/SWC-131) Presence of Unused Variables

#### Remediation:
- I removed any ***unused*** code in my contract.