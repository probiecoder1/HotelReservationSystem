import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Invoice } from './invoice.model';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  @Input() invoiceData: Invoice | null = null;
  @ViewChild('pdfContainer') pdfContainer!: ElementRef;

  ngAfterViewInit(): void {
    if (this.pdfContainer) {
      this.generatePDF();
    }
  }

  generatePDF(): void {
    if (this.invoiceData) {
      const pdf = new jspdf.jsPDF();

      // Convert the HTML content to a canvas
      const pdfContent = this.pdfContainer.nativeElement;
      pdf.html(pdfContent, {
        callback: (pdf) => {
          // Save the PDF
          pdf.save('invoice.pdf');
        }
      });
    }
  }

  getSelectedRoomsNames(): string {
    return this.invoiceData?.bookingDetails?.rooms
      .map(room => room.name)
      .join(', ') || '';
  }
  printInvoice() {
    window.print();
  }
}
