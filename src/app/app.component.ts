import { Component, OnInit, LOCALE_ID } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-led';
  LEDS = {}
  constructor(private db:AngularFireDatabase){
    const data= this.db.object('/');
    data.snapshotChanges().subscribe(action => {
      // console.log(action.type);
      // console.log(action.key)
      this.LEDS = action.payload.val();
      console.log(this.LEDS)
    });
  }
  public onLed(): void {
    const itemsRef = this.db.list('/');
    itemsRef.update('/',{ LED_STATUS: 'ON' });
  }
  public offLed(): void {
    const itemsRef = this.db.list('/');
    itemsRef.update('/',{ LED_STATUS: 'OFF' });
  }
}


