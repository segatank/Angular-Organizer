import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {DateSelectorComponent} from './date-selector/date-selector.component';
import {MomentPipe} from './shared/moment.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    OrganizerComponent,
    DateSelectorComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
