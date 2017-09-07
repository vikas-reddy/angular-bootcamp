import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'weather-panel',
  templateUrl: './weatherPanel.html'
})
export class WeatherPanel implements OnInit {
  @Input() city: string;

  hourly$: FirebaseListObservable<any>;
  currently$: FirebaseObjectObservable<any>;

  constructor(private afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.hourly$ = this.afDb.list(this.city + '/' + 'hourly/data',
      {
        query: {
          limitToLast: 10
        }
      });

    this.currently$ = this.afDb.object(this.city + '/' + 'currently');
  }
}
