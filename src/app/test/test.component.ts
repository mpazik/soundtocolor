import { Component, OnInit } from '@angular/core';
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
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
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

  toneJS(noteToPlay){
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();
    
    noteToPlay = "C4";
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease(noteToPlay, "8n");
  }
}

