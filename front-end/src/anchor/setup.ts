import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer";
import { Counter, IDL } from "./idl";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
// const programId = new PublicKey("C87Mkt2suddDsb6Y15hJyGQzu9itMhU7RGxTQw17mTm"); 

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<Counter>(IDL, {
  connection
});

// Derive a PDA for the counter account, using "counter" as the seed.
// We'll use this to update the counter on-chain.
export const [counterPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  program.programId
);

// Define a TypeScript type for the Counter data structure based on the IDL.
// This ensures type safety when interacting with the "counter" account, facilitating development and maintenance.
export type CounterData = IdlAccounts<Counter>["counter"];