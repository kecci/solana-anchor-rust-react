import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { Counter } from "../target/types/counter";

// !!! DON'T FORGET TO SET Anchor.toml with cluster = "Localnet" !!!
// 
// Run live local validator
// terminal-1: solana-test-validator 
//
// Run live stream solana logs
// terminal-2: solana logs
//
// Run test
// terminal-3: anchor test --skip-local-validator
describe("counter", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // This workspace.<ProgramName> should be same as target/idl/<program_name>.json
  const program = anchor.workspace.Counter as Program<Counter>;
  const wallet = provider.wallet as anchor.Wallet;
  const connection = provider.connection;

  const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")], 
    program.programId
  );

  it("Is initialized!", async () => {
    try {
      const txSig = await program.methods.initialize().rpc();
      
      const accountData = await program.account.counter.fetch(counterPDA);
      console.log(`Transaction Signature: ${txSig}`);
      console.log(`Count: ${accountData.count}`);
    } catch (error) {
      // If PDA Account already created, then we expect an error
      console.log(error);
    }
  });

  it("Increment", async () => {
    const transactionSignature = await program.methods.increment().rpc();

    const accountData = await program.account.counter.fetch(counterPDA);

    console.log(`Transaction Signature: ${transactionSignature}`);
    console.log(`Count: ${accountData.count}`);
  });
});