import {Component,VERSION} from '@angular/core';
import {Customer,PipeFormat,TableSettings} from './modals/table-modals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  msg = '';

  // // Toggle modal
  // showModal = false;

  // // Modal Properties
  // modalData: any = {
  //   modalType: 'confirmation',
  //   header: 'Hello World',
  //   subHeader: 'Dynamic modal in action...',
  //   buttonText: 'Submit',
  // };

  // Button vaildation
  // buttonDisabled: 'VALID' | 'INVALID' = 'INVALID';

  customers: Customer[] = [
    {
      id:1,
      name: 'Faith Joy',
      email: 'fj@stooli.com',
      phone: '09088776655',
      loyaltyReward: true,
      totalSpent: 400,
    },
    {
      id:2,
      name: 'Ayo Benson',
      email: 'aydot@jk.com',
      phone: '08128743650',
      loyaltyReward: false,
      totalSpent: 59000,
    },
    {
      id:3,
      name: 'Ade Ayobami',
      email: 'ade@frtt.com',
      phone: '08027437650',
      loyaltyReward: false,
      totalSpent: 200,
    },
    {
      id:4,
      name: 'Valentine Awe',
      email: 'val@errt.com',
      phone: '09077214562',
      loyaltyReward: true,
      totalSpent: 120000,
    },
    {
      id:5,
      name: 'Rahman Hafeez',
      email: 'rfeez@xvxw.com',
      phone: '09033487655 ',
      loyaltyReward: true,
      totalSpent: 3490000,
    },
  ];


  settings:TableSettings={
    actionRequired :true,
    settings:[
      {
        key: 'id',
        header: 'S.No.'
      },
      {
        key: 'name',
        header: 'Full Name',
      },
      {
        key: 'email',
        header: 'Email',
      },
      {
        key: 'phone',
        header: 'Phone Number',
      },
      {
        key: 'loyaltyReward',
        header: 'Loyal Customer',
      },
      {
        key: 'totalSpent',
        header: 'Total Spent',
        format: PipeFormat.CURRENCY,
      },
    ],
    actions : [
      {
        title:'view',
        func:this.view.bind(this),
        class:['btn-sm','btn-info']
      },
      {
        title:'edit',
        func: this.edit.bind(this),
        class:['btn-sm','btn-success','mx-1']
      },
      {
        title:'delete',
        func: this.delete.bind(this),
        class:['btn-sm','btn-danger','mx-1']
      }
    ]
  }


  printMsg(event:any) {
    console.log(event);
    this.msg = event ? event : '';
  }

  view(data:any) {
    console.log(data)
  }

  edit(data: any) {
    console.log(data)
  }

  delete(data: any) {
    console.log(data)
  }


 
}
