import { Component, OnInit } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './state/pokemon/pokemon';
import { Router } from '@angular/router';
declare var device: { platform: any; };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-angular';
  ngOnInit(){
    document.addEventListener("deviceready",function(){
      alert(device.platform)
    },false)
  }
}
