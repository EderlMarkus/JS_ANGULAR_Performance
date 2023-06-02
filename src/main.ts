import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './app/components/toolbar/toolbar.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, importProvidersFrom } from '@angular/core';
import { appRoutes } from './app/router/routes';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `<app-toolbar></app-toolbar> <router-outlet></router-outlet>`,
  styleUrls: ['./styles.scss'],
})
export class App {}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserAnimationsModule,
      HttpClientModule
    ),
    provideRouter(appRoutes),
  ],
});
