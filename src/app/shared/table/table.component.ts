import {Component,Input,OnInit} from '@angular/core';
import {ActionSettings,ColumnSetting,TableSettings} from '../../modals/table-modals';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<T> implements OnInit {
  @Input() data: T[] = [];
  @Input() config: TableSettings={};
  headers: (string | undefined)[] = [];
  dataSettings: ColumnSetting[]  = [];
  actionRequired = false;
  actionSettings: ActionSettings[]|undefined=[]
  
  // @Output() onClick: EventEmitter<any>=new EventEmitter<any>();


  constructor() {}

  ngOnInit() {
   

    if (this.config && this.config!.settings!.length > 0) {
      this.actionRequired=this.config.actionRequired!=null? this.config.actionRequired:false;
      this.headers = this.config.settings!.map((s) => s.header);
      this.dataSettings = this.config!.settings?this.config.settings:[];
      this.actionSettings = this.config!.actions;
    } else {
      
      if (this.data && this.data.length > 0) {
        this.headers = Object.keys(this.data[0]);
        this.actionRequired = false;
        let datSat: ColumnSetting[] = [];
        this.headers.forEach((h) => {
          let sat: ColumnSetting={
            key :h?h:''
          };
          datSat.push(sat);
        });
        this.dataSettings = datSat;
      } else {
        this.headers=[];
        this.data=[]
      }
    }

  }

  getValue(value: any,setting: ColumnSetting) {
    return value[ setting.key ];
  }

  callParent(action: ActionSettings,value:T) {
    action.func(value)
  }

}
