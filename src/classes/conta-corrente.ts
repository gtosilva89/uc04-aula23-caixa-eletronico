export default class ContaCorrente {
  private _agencia: number;
  private _numero: number;
  private _nomeCliente: string;
  private _cpf: string;
  private _dataNascimento: Date;
  private _dataCriacao: Date;
  private _saldo: number;

  constructor(
    agencia: number,
    numero: number,
    nomeCliente: string,
    cpf: string,
    dataNascimento: Date,
    dataCriacao: Date
  ) {
    this._agencia = agencia;
    this._numero = numero;
    this._nomeCliente = nomeCliente;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
    this._dataCriacao = dataCriacao;
    this._saldo = 0;
  }

  public get agencia() {
    return this._agencia;
  }
  public get numero() {
    return this._numero;
  }
  public get nomeCliente() {
    return this._nomeCliente;
  }
  public get cpf() {
    return this._cpf;
  }
  public get dataNascimento() {
    return this._dataNascimento;
  }
  public get dataCriacao() {
    return this._dataCriacao;
  }
  public get saldo() {
    return this._saldo;
  }

  public setSaldo(valor: number, tipoOperacao: "C" | "D") {
    if (!valor || valor <= 0) {
      throw new Error("Valor inválido!");
    }

    switch (tipoOperacao) {
      case "C":
        this._saldo = this._saldo + valor;
        break;
      case "D":
        if (valor > this._saldo) {
          throw new Error ("Saldo insuficiente")
        }
        this._saldo = this._saldo - valor;
        break;
      default:
        throw new Error("Tipo de operação inválida");
    }
  }
}