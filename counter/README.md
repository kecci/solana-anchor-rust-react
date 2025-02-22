# counter

Deploying cluster: https://api.devnet.solana.com
Upgrade authority: /Users/abyankecci/.config/solana/id.json
Deploying program "counter"...
Program path: /Users/abyankecci/go/src/github.com/kecci/solana-anchor-rust-react/counter/target/deploy/counter.so...
==========================================================================
Recover the intermediate account's ephemeral keypair file with
`solana-keygen recover` and the following 12-word seed phrase:
==========================================================================
company forum name wish tongue option away slam coral predict swear runway
==========================================================================
To resume a deploy, pass the recovered keypair as the
[BUFFER_SIGNER] to `solana program deploy` or `solana program write-buffer'.
Or to recover the account's lamports, pass it as the
[BUFFER_ACCOUNT_ADDRESS] argument to `solana program close`.
==========================================================================
Error: 7 write transactions failed
There was a problem deploying: Output { status: ExitStatus(unix_wait_status(256)), stdout: "", stderr: "" }.
==========================================================================
 counter git:(main) ✗ solana-keygen recover 'prompt://?key=0/0' -o solana-keygen-devnet.json
[recover] seed phrase: 
[recover] If this seed phrase has an associated passphrase, enter it now. Otherwise, press ENTER to continue: 
Recovered pubkey `"2e3ewZjgdwRysL7KL3GhgBpdS1PLfWazRpmy6vuWbETi"`. Continue? (y/n): 
y
Wrote recovered keypair to solana-keygen-devnet.json