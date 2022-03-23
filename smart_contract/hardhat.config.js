require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/5VnXzwsq1KqeHC0LlR3_1raqw2Z2z3z6",
      accounts: [
        "eee13fb2414679c460f7173bbca4874282924c22d2ffa2d7afda9986ca34199d",
      ],
    },
  },
};
