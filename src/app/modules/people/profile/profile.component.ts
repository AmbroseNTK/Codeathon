import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../services/config.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SolutionDialogComponent } from '../../workspace/solution-dialog/solution-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public router: Router, public client: HttpClient, public config: ConfigService, public matDialog: MatDialog) { }

  data = null;

  @ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>;

  dataSourceOfContribs = null;
  dataSourceOfSolutions = null;

  displayedColumnsForContribs = [
    "id",
    "title",
    "description",
    "goTo"
  ];

  displayedColumnsForSolutions = [
    "id",
    "date",
    "language",
    "execTime",
    "viewSolution",
    "goTo"
  ];

  languages = ["Python", "Ruby", "Clojure", "PHP", "JavaScript", "Scala", "Go", "C/C++", "Java", "VB.NET", "C#", "Bash", "Objective-C", "MySQL", "Perl", "Rust", "Pascal"];

  ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      this.config.config$.subscribe((config) => {
        this.client.post(config.backend + "/people/search", {
          email: params.email
        }).subscribe(data => {
          this.data = data;
          console.log(this.data);
          this.dataSourceOfContribs = new MatTableDataSource(
            this.data.challenges.map(entry => ({ ...entry, goTo: "" }))
          );
          //this.dataSourceOfContribs.paginator = this.paginators[0];
          this.dataSourceOfSolutions = new MatTableDataSource(
            this.data.history.map(entry => ({ ...entry, viewSolution: "", goTo: "" }))
          )
          this.paginators.changes.subscribe((p) => {
            this.paginators.forEach((item, index, arr) => {
              switch (index) {
                case 0:
                  this.dataSourceOfContribs.paginator = item;
                  break;
                case 1:
                  this.dataSourceOfSolutions.paginator = item;
                  break;
              }
            });
          })

        });
      })
    })
  }

  applyFilterForContribs(filterValue: string) {
    this.dataSourceOfContribs.filter = filterValue.trim().toLowerCase();
  }

  applyFilterForSolutions(filterValue: string) {
    this.dataSourceOfSolutions.filter = filterValue.trim().toLowerCase();
  }

  onOpenSolution(language, code) {
    this.matDialog.open(SolutionDialogComponent, {
      width: '90%',
      data: { language: language, code: code }
    });
  }

  onClickGoTo(challengeID) {
    this.router.navigate(["solving/" + challengeID]);
  }

}
