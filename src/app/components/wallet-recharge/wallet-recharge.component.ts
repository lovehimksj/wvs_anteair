import {Component, OnInit} from '@angular/core';
import {WalletService} from "../../service/wallet/wallet.service";

@Component({
  selector: 'app-wallet-recharge',
  templateUrl: './wallet-recharge.component.html',
  styleUrls: ['./wallet-recharge.component.css']
})
export class WalletRechargeComponent implements OnInit {
    public user_list: Array<any> = [];
    public userInfo: Object = {};

  constructor(private wallet: WalletService) { }

  ngOnInit() {
      this.getUserListWithKeyValue()
  }

    private getUserListWithKeyValue() {
        this.wallet.getUserWithKeyValue()
            .subscribe(value => {
                this.user_list = value;
                console.log(value)
            }, error2 => {
                console.log(error2);
            })
    }

    selectUser() {
        console.log(this.userInfo);
        this.rechargeUserWallet(this.userInfo);
    }

    public rechargeUserWallet(userId) {
      const data = {
          "amt_inr": 1000,
          "user_id": userId,
      };

      this.wallet.rechargeWallet(data)
          .subscribe(value => {
              console.log(value)
          }, error2 => {
              console.log(error2);
          })
    }
}
