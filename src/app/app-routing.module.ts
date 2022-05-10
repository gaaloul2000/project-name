import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FooterComponent } from './footer/footer.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { BlocsComponent } from './blocs/blocs.component';
import { StatsComponent } from './stats/stats.component';
import { ScriptComponent } from './script/script.component';
import { AddblocComponent } from './addbloc/addbloc.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ScriptsendedComponent } from './scriptsended/scriptsended.component';
import { LangueComponent } from './langue/langue.component';
import { ScaleComponent } from './scale/scale.component';
import { GererscriptComponent } from './gererscript/gererscript.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { EnqidComponent } from './enqid/enqid.component';
import { SendComponent } from './send/send.component';
import { ReponseComponent } from './reponse/reponse.component';
import { RegistermoderateurComponent } from './registermoderateur/registermoderateur.component';
const routes: Routes = [
  { path: 'registermoderateur', component: RegistermoderateurComponent },
  { path: 'gererscript', component: GererscriptComponent },
  { path: 'home', component: HomeComponent },
  { path: 'uploadfile', component: UploadfileComponent },
  { path: 'send', component: SendComponent },
  { path: 'enqid', component: EnqidComponent },
  { path: 'reponse', component: ReponseComponent },

  { path: 'script', component: ScriptComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin/:id', component: BoardAdminComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'blocs/:idscript', component: BlocsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'addquestion', component: AddquestionComponent },
  { path: 'bloc', component: AddblocComponent },
  { path: 'scriptsended', component: ScriptsendedComponent },
  { path: 'enquete/:id/:idClient', component: EnqueteComponent },
  { path: 'enquete/:id', component: EnqueteComponent },

  { path: 'langue', component: LangueComponent },
  { path: 'scale', component: ScaleComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
