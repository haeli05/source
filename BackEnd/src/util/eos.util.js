import Eos from 'eosjs';
import ecc from 'eosjs-ecc';
import {configChain, configFiles, masterKey, eosioKey} from '../config';
import binaryen from 'binaryen';
import format from 'eosjs/lib/format';
import fs from "fs";
import path from 'path';
import BigNumber from 'bignumber.js';

/**
* Function converts string into uint64
* @
**/
export function to64(string){
  return Eos.modules.format.encodeName(string);
}

/**
Atomically Registers a repo in the master contract + publishes
the per-repo smart contract
*/
export function newRepoEOS(data) {
  data.repo = data.cid;
  data.cid = format.encodeName(data.cid);

  configChain.keyProvider = eosioKey;
  let eos = Eos(configChain);
  const newAccount = eos.transaction(tr => {
    tr.newaccount({
      creator: 'eosio',
      name: data.repo,
      active: {threshold: 1,keys: [{key: ecc.privateToPublic(masterKey), weight: 1}], accounts: [{permission:{actor:data.repo, permission:"eosio.code"}, weight:1}]},
      owner: ecc.privateToPublic(masterKey)
    });
  });


  return newAccount
  .then(() => {
    const configChain1 = configChain;
    configChain1.keyProvider = masterKey;
    configChain1.binaryen = binaryen;
    const eos1 = Eos(configChain1);

    const wasm = fs.readFileSync(path.join(__dirname, configFiles.repoWASM));
    const abi = fs.readFileSync(path.join(__dirname, configFiles.repoABI));



    const masterCall = {
      actions: [
        {
          account: configFiles.masterSC,
          name: "newrepo",
          authorization: [{
            actor: configFiles.masterSC,
            permission: "active"
          }],
          data: {
            repo: data.repo,
            cid: data.cid,
            name: data.name
          }
          }
        ]
    };

    return Promise.all([eos1.setabi(data.repo, JSON.parse(abi)), eos1.setcode(data.repo, 0, 0, wasm), eos1.transaction(masterCall)]);
  })
}









/**
Sets values in the repo-specific SC
*/
export function setRepoEOS(_data) {
  configChain.keyProvider = masterKey;
  const eos = Eos(configChain);
  return new Promise((resolve, reject) => {
    eos.transaction({
    actions: [
      {
        account: _data.cid,
        name: 'create',
        authorization: [{
          actor: _data.cid,
          permission: 'active'
        }],
        data: {
          username : _data.cid,
          role_count : _data.role_count,
          role_names : _data.role_names,
          actions : _data.actions,
          compensations : _data.compensations,
          reputations : _data.reputations,
          thresholds : _data.thresholds,
          _cid : format.encodeName(_data.cid)
        }
        }
      ]
    })
    .then(tx => {resolve(tx)})
    .catch(err => {
      console.log(err);
      reject(err);
    });
  });
}

/**
User action in a repo
*/
export function userActionEOS(data) {
  const actionNum = data.action;
  const actor = data.actor;
  const recipient = data.recipient;
  const account = data.cid;
    let keys = [data.privateKey,masterKey]
    configChain.keyProvider=data.privateKey//keys;

  const eos = Eos(configChain);
  let options ={
      authorization: [actor.concat("@active")],
      broadcast: true,
      sign: true
  }

  return new Promise((resolve,reject) => {
    eos.contract(account)
    .then(repo=> {
      repo.acting(actor,actionNum,recipient,options)
      .then((tx) => {
        resolve(['transaction posted', tx])
      })
      .catch(err => {
        err = JSON.parse(err);
        reject(err.error.details[0].message);
      });
    });
  })
}

/**
Generates a stringed account name. Convert this to a uint64 when needed by using
Eos.encodeName()
*/
export function makecid() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz12345";

  for (var i = 0; i < 12; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


/**
Register an account name on EOS testnet. Currently uses the Source username,
in production need to safeguard that the account name isn't taken
*/
export function createUserEOS(data) {
  const ak = data.ak;
  const ok = data.ok;
  const account_name = data.username;

  configChain.keyProvider = eosioKey;
  const eos = Eos(configChain);
  return eos.transaction(tr => {
    tr.newaccount({
      creator: 'eosio',
      name: account_name,
      owner: {threshold: 1,keys: [{key: ok, weight: 1}], accounts: [{permission:{actor:account_name, permission:"eosio.code"}, weight:1}]},
      active: ak
    })
  });
}

export function checkAccountEOS(username) {
  configChain.keyProvider = eosioKey;
  const eos = Eos(configChain);
  return new Promise((resolve,reject)=>{
    eos.getAccount(username)
    .then(acc=>{
      reject(`EOS account with username ${username} already created`);
    })
    .catch(err => {
      resolve("good to go");
    });
  });
}


// export function setPermission(account) {
//   console.log("Setting permission for the account on EOS!");
//   configChain.keyProvider = eosioKey;
//   const eos = Eos(configChain);
//
//   return eos.transaction(tr => {
//     tr.set
//   })
// }

export function deployToRepos(){
  configChain.keyProvider = eosioKey;
  const eos = Eos(configChain);
  return new Promise((resolve,reject)=>{
    eos.contract("minter").then(acc=>{

    })
    .catch(err => {
      console.log("ERROR",err);
      resolve([false,err]);  //NOTE: should this be resolve????
    });
  });
}

export function deployToUsers(){
  configChain.keyProvider = eosioKey;
  const eos = Eos(configChain);
  return new Promise((resolve,reject)=>{
    eos.contract("minter").then(acc=>{

    })
    .catch(err => {
      console.log("ERROR",err);
      resolve([false,err]); //NOTE: should this be resolve????
    });
  });
}

export function transferEOS(sender, receiver, src, message, key) {
  configChain.keyProvider = key;
  const eos = Eos(configChain);

  return eos.transaction({
  actions: [
    {
      account: "minter",
      name: 'transfer',
      authorization: [{
        actor: sender,
        permission: 'active'
      }],
      data: {
        from : sender,
        to : receiver,
        quantity : src,
        memo: message
      }
      }
    ]
  });
}

export function dReposEOS(data) {

}

export function dUsersEOS(data) {
  configChain.keyProvider = masterKey;
  const eos = Eos(configChain);

  return eos.transaction({
  actions: [
    {
      account: "distribution",
      name: 'repodist',
      authorization: [{
        actor: sender,
        permission: 'active'
      }],
      data: {
        non: 0
      }
      }
    ]
  });
}

export function getBalanceEOS(cid){
  configChain.keyProvider = masterKey;
  const eos = Eos(configChain);
  return new Promise(async (resolve, reject) => {
    const table_key = new BigNumber(to64(cid))
      const accounts = await eos.getTableRows({
        code: 'master',
        json: true,
        limit: 1,
        lower_bound: table_key.toString(),
        scope: 'master',
        table: 'repos',
        upper_bound: table_key.plus(1).toString()
      })
        .catch(err => {reject(err)});

    const balance = accounts;

    resolve(balance);
  });
}




// const table_key = new BigNumber(Eos.format.encodeName(ACCOUNT_NAME, false))
//   const accounts = await eos.getTableRows({
//     code: CONTRACT_NAME,
//     json: true,
//     limit: 1,
//     lower_bound: table_key.toString(),
//     scope: CONTRACT_NAME,
//     table: TABLE_NAME,
//     upper_bound: table_key.plus(1).toString()
//   })
//   const balance = accounts.rows[0].balance
