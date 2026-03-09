import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      icon: 'fab fa-linkedin fa-lg',
      url: 'https://www.linkedin.com/in/yosra-ben-rajab',
      label: 'LinkedIn'
    },
    {
      icon: 'fab fa-github fa-lg',
      url: 'https://github.com/yosrabenrajab',
      label: 'GitHub'
    },
    {
      icon: 'fas fa-envelope fa-lg',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=yosrabenrajab@gmail.com',
      label: 'Email'
    }
  ];
}