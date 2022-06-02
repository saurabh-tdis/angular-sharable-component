import {Component,EventEmitter,Input,OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalType: string=''; // primary, right-side, confirmation
  @Input() header: string='';
  @Input() subHeader: string='';
  @Input() buttonText: string=''; // Optional
  @Input() isDisabled: string='';

  @Output() cancel = new EventEmitter<any>();
  @Output() submit = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

}