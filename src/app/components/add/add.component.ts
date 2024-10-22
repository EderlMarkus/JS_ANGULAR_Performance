import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  httpClient = inject(HttpClient);
  form = new FormGroup({
    comment: new FormControl(''),
  });

  onSubmit() {
    this.httpClient
      .post('https://dummyjson.com/comments/add', {
        userId: 5,
        postId: 3,
        body: this.form.controls.comment.getRawValue(),
      })
      .subscribe();
  }
}
