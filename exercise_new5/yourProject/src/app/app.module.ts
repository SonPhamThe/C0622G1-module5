import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorComponent} from './color/color.component';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './like/like.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchDictonaryComponent } from './search-dictonary/search-dictonary.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    RegisterFormComponent,
    LoginFormComponent,
    SearchDictonaryComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
