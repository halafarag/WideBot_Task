import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs/operators';
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
    private userService: UserService,
    private router: Router
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

  goBack() {
    this.router.navigate(['home/users']);
  }
}
