import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  userData: User = {} as User;
  showLoader: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.userId = +params.get('id')!;
          return this.userService.getUserById(this.userId);
        })
      )
      .subscribe(
        (data: User) => {
          this.showLoader = false;
          console.log(data);
          this.userData = data;
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }

  goPrevious() {
    if (this.userId <= 1) {
      return;
    }
    this.userId--;
    this.getUser();
  }

  goNext() {
    if (this.userId >= 12) {
      return;
    }
    this.userId++;
    this.getUser();
  }

  private getUser() {
    this.showLoader = true;
    this.userService.getUserById(this.userId).subscribe(
      (data: User) => {
        this.showLoader = false;
        this.userData = data;
      },
      (error) => {
        console.log('Error :', error);
      }
    );
  }
  goBack() {}
}
