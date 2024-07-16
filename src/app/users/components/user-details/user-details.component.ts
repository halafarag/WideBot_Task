import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userId!: number;
  userData: User = {} as User;
  showLoader: boolean = true;
  paramSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.fetchUser(this.userId);
    });
  }

  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

  fetchUser(userId: number) {
    this.showLoader = true;
    this.userService.getUserById(userId).subscribe(
      (data: User) => {
        this.userData = data;
        this.showLoader = false;
      },
      (error) => {
        console.log('Error:', error);
        this.showLoader = false;
      }
    );
  }

  goPrevious() {
    if (this.userId > 1) {
      this.userId--;
      this.fetchUser(this.userId);
    }
  }

  goNext() {
    if (this.userId < 10) {
      this.userId++;
      this.fetchUser(this.userId);
    }
  }
}
