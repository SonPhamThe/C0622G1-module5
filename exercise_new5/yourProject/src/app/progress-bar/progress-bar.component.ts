import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#27570a';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

  loading() {
    const interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress === 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
