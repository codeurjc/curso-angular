import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { GitHubService } from '../../services/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public foundRepos: any[];
    public username: string;

    constructor(private github: GitHubService,
                private nav: NavController) {}

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => this.foundRepos = data.json(),
            err => console.error(err)
        );
    }

    goToDetails(repo) {
        this.nav.push(DetailsPage, { repo: repo });
    }
}

