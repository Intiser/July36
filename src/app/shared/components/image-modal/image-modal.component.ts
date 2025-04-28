import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  @Input() isOpen = false;
  @Input() image = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() description = '';
  @Input() photographer = '';
  @Input() location = '';
  @Input() date = '';
  
  @Output() closeModal = new EventEmitter<void>();
  
  close() {
    this.closeModal.emit();
  }
}
