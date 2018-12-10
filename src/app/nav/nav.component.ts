import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "Color to sound research";
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'charset', content: 'utf-8' });
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },true);
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
  }

  ngOnInit() {

  }

}
