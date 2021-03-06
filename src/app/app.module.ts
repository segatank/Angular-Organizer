import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {DateSelectorComponent} from './date-selector/date-selector.component';
import {MomentPipe} from './shared/moment.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskComponent} from './organizer/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    OrganizerComponent,
    DateSelectorComponent,
    MomentPipe,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
