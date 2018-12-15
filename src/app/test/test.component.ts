import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import $ from 'jquery'
declare var $: $
import 'bootstrap-colorpicker';
import 'tone';
import './research.ts'
import { ResearchQuestion } from './research';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  h2Style: boolean = false;
  name: string;
  questions: [];
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  title = 'Tour of Heroes';
  noteToPlay = "C4";
  userReply = {
    "A4": {
      "A41":"",
      "A42":"",
      "A43":"",
      "A44":"",
      "A45":""
    },
    "B4": {
      "B41":"",
      "B42":"",
      "B43":"",
      "B44":"",
      "B45":""
    },
    "C4": {
      "C41":"",
      "C42":"",
      "C43":"",
      "C44":"",
      "C45":""
    },
    "D4": {
      "D41":"",
      "D42":"",
      "D43":"",
      "D44":"",
      "D45":""
    },
    "E4": {
      "E41":"",
      "E42":"",
      "E43":"",
      "E44":"",
      "E45":""
    },
    "F4": {
      "F41":"",
      "F42":"",
      "F43":"",
      "F44":"",
      "F45":""
    },
    "G4": {
      "G41":"",
      "G42":"",
      "G43":"",
      "G44":"",
      "G45":""
    },
    "A5": {
      "A51":"",
      "A52":"",
      "A53":"",
      "A54":"",
      "A55":""
    }
   }

  researchQuestion: ResearchQuestion = {
    id: 1,
    note: 'A4',
    color: ''
  };
  constructor() { }

  ngOnInit() {

    var notes = ["A4","B4","C5","D5","E5","F5","G5","A5","A4","B4","C5","D5","E5","F5","G5","A5","A4","B4","C5","D5","E5","F5","G5","A5","A4","B4","C5","D5","E5","F5","G5","A5","A4","B4","C5","D5","E5","F5","G5","A5"];
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    var notesShuffled = shuffle(notes);
    console.log(notesShuffled)
    console.log(notes.length)
    this.questions = notesShuffled;

    var synth = new Tone.Synth().toMaster();   
    synth.triggerAttackRelease("C5", "8n");



    $(function () {
      
      for(var i = 0; i < notes.length; i++)
      {
        $('#cp'+i).colorpicker({
          inline: true,
          container: true,
          useAlpha: false, //color will be always opaque
          format: 'hsl',
          horizontal: true,
          customClass: 'colorpicker-2x',
          sliders: {
            saturation: {
              maxLeft: 200,
              maxTop: 200
            },
            hue: {
              maxTop: 200
            }
          },
          template: '<div class="colorpicker">' +
            '<div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>' +
            '</div>'
        }).on('colorpickerChange colorpickerCreate', function (e) {
          e.colorpicker.picker.parents('.card').find('.color-div')
              .css('background-color', e.value)});
      }
    });
  }



  firstClick(){
    console.log('clicked');
    this.h2Style = true;
  }

  toneJS(someobject): void{
    var synth = new Tone.Synth().toMaster();
    var noteToPlay = someobject.target.attributes['value'].value;
    synth.triggerAttackRelease(noteToPlay, "8n");
  }

  addAnswer(newAnswer: string){
    console.log("newanswer: "+newAnswer)
    this.userReply.A4.A41 =newAnswer.substring(4, newAnswer.indexOf(","));
    console.log(this.userReply.A4.A41);
  }
}

