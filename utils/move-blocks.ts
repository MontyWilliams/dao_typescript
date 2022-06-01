// This is just a little helper function to speed up the network if we are on the local chain
import { network } from 'hardhat'

export async function moveBlocks(amount: number) {
  console.log("Moving blocks...")
  for (let index = 0; index < amount; index++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    })
  }
  console.log(`Moved ${amount} blocks`)
}
