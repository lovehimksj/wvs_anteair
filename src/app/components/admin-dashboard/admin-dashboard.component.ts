import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
    public userList: Array<any> = [];

    constructor(private user: UserService) {
    }

    ngOnInit() {
        this.user.getAllUsers()
            .subscribe(value => {
                console.log(value);
                this.userList = value;
            }, error2 => {
                console.log(error2);
            })
    }

    updateUser(user: any) {
        const data = [];
        user['approval'] = true;
        user['onboard_status'] = true;
        data.push(user);
        this.user.updateUser(user)
            .subscribe(user =>{
                console.log(user);
            })
    }
}
