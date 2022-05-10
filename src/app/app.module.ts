import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
                 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FooterComponent } from './footer/footer.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EnqueteComponent } from './enquete/enquete.component';
import { SendComponent } from './send/send.component';
import { BlocsComponent } from './blocs/blocs.component';
import { QuestionsComponent } from './questions/questions.component';
import { StatsComponent } from './stats/stats.component';
;
import { ScriptComponent } from './script/script.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddblocComponent } from './addbloc/addbloc.component';
import { ScriptsendedComponent } from './scriptsended/scriptsended.component';
import { LangueComponent } from './langue/langue.component';
import { ScaleComponent } from './scale/scale.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { GererscriptComponent } from './gererscript/gererscript.component';
import { RegistermoderateurComponent } from './registermoderateur/registermoderateur.component';
import { EnqidComponent } from './enqid/enqid.component';
import { ReponseComponent } from './reponse/reponse.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FooterComponent,
    EnqueteComponent,
    SendComponent,
    BlocsComponent,
    QuestionsComponent,
    StatsComponent,
    ScriptComponent,
    AddquestionComponent,
    AddblocComponent,
    ScriptsendedComponent,
    LangueComponent,
    ScaleComponent,
    UploadfileComponent,
    GererscriptComponent,
    RegistermoderateurComponent,
    EnqidComponent,
    ReponseComponent

  ],
  imports: [
    BrowserModule,
    
    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
