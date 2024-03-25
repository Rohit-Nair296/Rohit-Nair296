import { Component } from '@angular/core';
import { ProfilePopupService } from 'src/app/Services/profile-popup.service';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopupComponent {

  isVisible = false;

  constructor(private profilePopup: ProfilePopupService) { }

  ngOnInit(): void {
    this.profilePopup.isVisible$().subscribe(result => {
      this.isVisible = result;
    });
  }

  closePopup(): void {
    this.profilePopup.hidePopup();
  }
}
