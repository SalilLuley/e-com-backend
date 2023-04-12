import * as crypto from 'crypto';
import { generateKeyPair } from 'jose';

export class EdDSAKeys {
  private privateKey;
  private publicKey;

  static async generateKeys() {
    const keyPair: crypto.KeyPairSyncResult<string, string> =
      crypto.generateKeyPairSync('ed25519', {
        privateKeyEncoding: { format: 'pem', type: 'pkcs8' },
        publicKeyEncoding: { format: 'pem', type: 'spki' },
      });
    EdDSAKeys.prototype.privateKey = keyPair.privateKey;
    EdDSAKeys.prototype.publicKey = keyPair.publicKey;
  }

  static getPrivateKey() {
    return EdDSAKeys.prototype.privateKey;
  }

  static getPublicKey() {
    return EdDSAKeys.prototype.publicKey;
  }
}
