import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createHash } from 'crypto-browserify';
import { CryptoFactory, createContext } from "sawtooth-sdk/signing";
import * as protobuf  from "sawtooth-sdk/protobuf";
import { fetch } from "node-fetch";
import { TextEncoder, TextDecoder} from "text-encoding/lib/encoding";
import {Buffer} from 'buffer/'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loggedInStatus = false
  private signer: any;
  public publicKey: any;
  public address: any;
  

  constructor(public http: HttpClient) { 
    const context = createContext('secp256k1');
    const privateKey = context.newRandomPrivateKey()
    this.signer = new CryptoFactory(context).newSigner(privateKey);
    this.publicKey = this.signer.getPublicKey().asHex();
    this.address =  this.f("cookiejar").substr(0, 6) + this.f(this.publicKey).substr(0, 64);
    console.log("Storing at: " + this.address);
  }

  FAMILY_NAME='cookiejar'

  f = function hash(v) {
    return createHash('sha512').update(v).digest('hex');}
      
  
 
   
    
        wrap_and_send(action,values){
        var userid = '';
        userid="cookiejar"
        var payload = ''
        const address = this.address;
        console.log("wrapping for: " + this.address);
        var inputAddressList = [address];
        var outputAddressList = [address];
        payload = action+","+values[0];
        var enc = new TextEncoder('utf8');
        const payloadBytes = enc.encode(payload);
        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
        familyName: 'cookiejar',
        familyVersion: '1.0',
        inputs: inputAddressList,
        outputs: outputAddressList,
        signerPublicKey: this.signer.getPublicKey().asHex(),
        nonce: "" + Math.random(),
        batcherPublicKey: this.signer.getPublicKey().asHex(),
        dependencies: [],
        payloadSha512: this.f(payloadBytes),
        }).finish();
        const transaction = protobuf.Transaction.create({
        header: transactionHeaderBytes,
        headerSignature: this.signer.sign(transactionHeaderBytes),
        payload: payloadBytes
        });
        const transactions = [transaction];
        const batchHeaderBytes = protobuf.BatchHeader.encode({
          signerPublicKey: this.signer.getPublicKey().asHex(),
          transactionIds: transactions.map((txn) => txn.headerSignature),
        }).finish();
        const batchSignature = this.signer.sign(batchHeaderBytes);
        const batch = protobuf.Batch.create({
          header: batchHeaderBytes,
          headerSignature: batchSignature,
          transactions: transactions,
        });
        const batchListBytes = protobuf.BatchList.encode({
          batches: [batch]
        }).finish();
        console.log("batchlist",batchListBytes)
        this._send_to_rest_api(batchListBytes);	
      }



      _send_to_rest_api(batchListBytes): Promise<any>{
        return new Promise((resolve, reject) => {
        
        console.log("one11")
          if (batchListBytes == null) {
            var geturl = 'http://rest-api:8008/state/'+this.address
            console.log("Getting from: " + geturl);
            return fetch(geturl, {
              method: 'GET',
            })
            .then((response) => response.json())
            .then((responseJson) => {
              var data = responseJson.data;
              var amount = new Buffer(data, 'base64').toString();
              return amount;
            })
            .catch((error) => {
              console.error(error);
            }); 	
          }
          else{
          return fetch('http://rest-api:8008/batches', {
        method: 'POST',
              headers: {
          'Content-Type': 'application/octet-stream'
              },
              body: batchListBytes
               })
             }  
         })
    
        }

  
}