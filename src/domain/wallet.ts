export class Wallet {
  id: string;
  address: string;
  privateKey: string;

  constructor(id: string, address: string, privateKey: string) {
    this.id = id;
    this.address = address;
    this.privateKey = privateKey;
  }
}
