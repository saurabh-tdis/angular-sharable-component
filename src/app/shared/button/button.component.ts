import {Component,EventEmitter,Input,OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string='';
  @Input() classes: string[]=[];

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  className = '';
  constructor() {}

  ngOnInit() {
    this.className = this.classes.join(' ');
  }

  emmitClick() {
    this.onClick.emit('clicked');
  }
}
