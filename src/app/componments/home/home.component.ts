import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: string;

  data: any;

  source: any[];

  text: string;

  results: string[];
  filter: string[];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getJson();
  }

  getJson() {
    this.data = this.testService.getJson();
    console.log(this.data);
    this.testService.getSource().subscribe(data => {
      this.source = data['helloWorlds'];
      console.log(this.source);
    });
    this.testService.getReleases().subscribe(data => {
      console.log(data);
    });
    this.results = ['aaaa', 'dDD', 'vQQ', 'dFF'];
    this.filter = this.results.slice();
  }

  search(event) {
    this.filter = this.results.filter(item => item.indexOf(event.query) > -1);
  }

}
