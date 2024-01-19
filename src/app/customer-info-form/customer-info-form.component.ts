import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.scss']
})
export class CustomerInfoFormComponent {
  @Output() submitForm = new EventEmitter<any>();

  customerInfo: any = {}; // You should create an interface for customer information

  onSubmit() {
    // Emit the customer information to the parent component
    this.submitForm.emit(this.customerInfo);
  }

}
