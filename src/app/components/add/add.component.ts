import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { catchError, tap, of } from 'rxjs';

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
    MatSnackBarModule,
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  httpClient = inject(HttpClient);
  snackBar = inject(MatSnackBar);

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
      .pipe(
        catchError((err) => {
          this.snackBar.open('Fehler', 'Danke');
          return of(null);
        }),
        tap((result) => result && this.snackBar.open('Gespeichert', 'Danke'))
      )
      .subscribe();
  }
}
