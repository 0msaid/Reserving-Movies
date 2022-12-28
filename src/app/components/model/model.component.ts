import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
@Input() selectedMovie={title:'',vote_count:'',release_date:'',id:0};
  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Reserv Successfully', 'done');
  }
  showWarning(){
    this.toastr.warning('You are not reserv movie')
  }

}
