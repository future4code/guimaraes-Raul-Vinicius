import { UserAccount } from "./UserAccount";

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    //GETTERS
    
    getAccount = () :UserAccount[] => {
        return this.accounts
    }
  }