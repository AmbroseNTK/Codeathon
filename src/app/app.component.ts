import { Component } from '@angular/core';
import { ChallengeService } from './services/challenge.service';
import { ConfigService } from './services/config.service';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  constructor(private challengeService: ChallengeService, private configService: ConfigService) {
    this.challengeService.fetch();
  }
}
