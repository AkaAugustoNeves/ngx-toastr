import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private toastr: ToastrService){}

  teste(){
    // this.toastr.success('mensagem', 'titulo', {
    //   timeOut: 500
    // });
    // this.toastr.warning('mensagem', 'titulo', {
    //   timeOut: 500
    // });
    // this.toastr.info('mensagem', 'titulo', {
    //   timeOut: 500
    // });
    this.toastr.error('mensagem', 'titulo', {
      timeOut: 500
    });
  }
}
