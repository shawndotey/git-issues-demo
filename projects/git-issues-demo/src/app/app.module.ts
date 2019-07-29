import { GitIssuesOverviewWidgetModule } from './git-issues/git-issues-overview-widget/git-issues-overview-widget.module';
import { ConfigManagerModule } from './config-manager/config-manager.module';
import { ConfigEffects } from './core/config/store/effects/config.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppCoreModule } from './core/app-core.module';
import { appReducers } from './core/app-store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ConfigEffects]),
    GitIssuesOverviewWidgetModule,
    StoreDevtoolsModule.instrument(),
    ConfigManagerModule,
    AppCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
