import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../../services/challenge.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(public challengeService: ChallengeService) {
    this.challengeService.fetch();
  }

  ngOnInit() {
  }

}
