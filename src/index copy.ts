import ContaCorrente from "./classes/conta-corrente";

const conta = new ContaCorrente(
  1234,
  1,
  "Gustavo",
  "12345678911",
  new Date("1989-03-21"),
  new Date("2007/07/01")
);

try {
console.log("Saldo Inicial: ", conta.saldo)
conta.setSaldo(100, "C");
console.log("Saldo atual", conta.saldo);

conta.setSaldo(10, "D");
console.log("Saldo atual", conta.saldo);

conta.setSaldo(100, "D");
console.log("Saldo atual", conta.saldo);
} catch (error: any){
  console.log(`Erro ao executar operação:  ${error.message}`);
}

console.log(conta);
