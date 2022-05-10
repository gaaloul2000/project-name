import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  findall(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/findallenquete');
  }

  

  findscript(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/getscript');
  }

  getAllQuestion(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/getAllQuestion');
  }

  getAllscripts(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/findallscript');
  }

  getscale(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/scale');
  }
  getallscale(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/scalefindall');
  }

  findechellequestion(id: String): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/test/deletescript/${id}`);
  }
  idscript(id): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/test/getid/${id}`);
  }
  getalltarguets(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/targuetts');
  }



  getAllechelle(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/findechelle');
  }


  getAllblocs(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/getAllblocs');
  }

  satisfaction1(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/satisfaction');
  }

  satisfaction2(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/scale2');
  }

  satisfaction3(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/Fairly');
  }

  target(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/findalltarget');
  }

  endedornot(id:number ): Observable<any> {
    return this.http.get<any>( ` http://localhost:8080/api/test/endedornot/${id}`);
   
  }


  getAdminBoard(Question): Observable<any> {
    return this.http.post(API_URL + 'addquestion', {
      id: Question.id,
      question: Question.question,
      type: Question.type,
      liaison: Question.liaison,
      liaisonblocs: Question.liaisonblocs,
      langue: Question.langue,
      propositon1: Question.propositon1,
      propositon2: Question.propositon2,
      propositon3: Question.propositon3,
      propositon4: Question.propositon4,
      propositon5: Question.propositon5
    }, httpOptions);
  }


  addblocs(Blocs): Observable<any> {
    return this.http.post(API_URL + 'addbloc',

      {

        name: Blocs.name,
        idscript: Blocs.liaison,
        questions: Blocs.questions,
        
        language: Blocs.language



        /*questions:Blocs.questions*/
      },


      httpOptions);
  }

  addTarguet(target): Observable<any> {
    return this.http.post(API_URL + 'addTarguet',

    target,



      httpOptions);
  }



  addresponse(reponse): Observable<any> {
    return this.http.post(API_URL + 'addreponse',


      {
        responseId: {
          enquete: reponse.enquete,
          email: reponse.email,
          questionOrder: reponse.order
        },
        response: reponse.response,
        question:
        {
          id: reponse.idques
        },
        enquete:
        {
          id: reponse.enquete
        }


      },


      httpOptions);
  }

  findscriptsprochainaffecte(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/findscriptsprochainaffecte');
  }

  bloc(id:number ,langue:string ): Observable<any> {
    return this.http.get<any>( `http://localhost:8080/api/test/getbloc/${id}/${langue}`);
  }
 

  findscriptsencoursaffecte(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test/findscriptsencoursaffecte');
  }



  getcsvtarguett(file): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`http://localhost:8080/api/test/uploadhh`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }





  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', API_URL + 'upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  uploads(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', API_URL + 'uploadhh', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  addquest(quest): Observable<any> {
    return this.http.post(API_URL + 'addquestion',

      quest.questions,


      httpOptions);
  }



  sendscript(send): Observable<any> {
    return this.http.post(API_URL + 'send-mail', {
      emailAddress: send.emailAddress,
      subject: send.subject,
      msg: send.msg,

    }, httpOptions);
  }
  addscript(Script): Observable<any> {
    return this.http.post(API_URL + 'addscript',

      {
        scriptName: Script.scriptName,
        startDate: Script.startDate,
        endDate: Script.endDate,
        scriptPool: Script.scriptPool


      }
      , httpOptions);
  }



  addblocs2(Blocs): Observable<any> {
    return this.http.post(API_URL + 'addbloc',

      {

        name: Blocs.name,
        questions: Blocs.questions,
        language: Blocs.language

        /*questions:Blocs.questions*/
      },


      httpOptions);
  }


  addblocandscript(Blocs, scripts): Observable<any> {
    return this.http.post(API_URL + 'addblocandscript',

      {
        scripts: scripts,
        blocs: Blocs



      }
      , httpOptions);
  }


  /*
    addenquete(Enquete): Observable<any> {
      return this.http.post(API_URL + 'addEnquete',
   
     {
      channel: Enquete.channel,
      startDate: Enquete.startDate,
      endDate: Enquete.endDate,
      status: Enquete.status,
        typeInteraction: Enquete.typeInteraction,
        shortCode: Enquete.shortCode,
        script: [{
          scriptName: Enquete.scriptName,
          startDate: Enquete.startDateScript,
          endDate: Enquete.endDateScript,
          scriptPool: Enquete.scriptPoolScript
          
        }]
        
      }
      , httpOptions);
    }
  
  */
  addenquete(Enquete): Observable<any> {
    return this.http.post(API_URL + 'addEnquete',

      {

        channel: Enquete.channel,
        startDate: Enquete.startDate,
        endDate: Enquete.endDate,
        status: Enquete.status,
        typeInteraction: Enquete.typeInteraction,
        shortCode: Enquete.shortCode,
        scriptId: Enquete.scriptId


      }
      , httpOptions);
  }

  /*
    addscript(datascript, test88): Observable<any> {
      return this.http.post(API_URL + 'addscript',
  
        {
          scriptName: datascript[0].scriptName,
          startDate: datascript[0].startDate,
          endDate: datascript[0].endDate,
          scriptPool: datascript[0].scriptPool,
          questions: test88
  
  
  
        }
        , httpOptions);
    }
  
    */


  addscripts(datascript): Observable<any> {
    return this.http.post(API_URL + 'addscript',

      {
        scriptName: datascript.scriptName,
        startDate: datascript.startDate,
        endDate: datascript.endDate,
        scriptPool: datascript.scriptPool




      }
      , httpOptions);
  }

  arretenquete(id: number): Observable<any> {
    return this.http.post(`http://localhost:8080/api/test/arretenquete/${id}`, httpOptions);
  }




  deleteScript(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/test/deletescript/${id}`);
  }


  deleteQuestion(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/test/deletequestion/${id}`);
  }

  deleteEnquete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/test/deleteenquete/${id}`);
  }
  updateEnquete(id: number, form): Observable<object> {
    return this.http.put(`http://localhost:8080/api/test/updateenquete/${id}`, {
      channel: form.channel,
      startDate: form.startDate,
      endDate: form.endDate,
      status: form.status,
      typeInteraction: form.typeInteraction,
      shortCode: form.shortCode



    });
  }

  sendenquete(send): Observable<any> {
    return this.http.post(API_URL + 'send-mail', {
      emailAddress: send.emailAddress,
      subject: send.subject,
      msg: send.msg,

    }, httpOptions);
  }



  addechelle(echelle): Observable<any> {
    return this.http.post(API_URL + 'addEchelle',

      {
        answerScale: echelle.answerScale,
        answerCode: echelle.answerCode,
        customerAnswerEng: echelle.customerAnswerEng,
        customerAnswerFr: echelle.customerAnswerFr,
        customerAnswerAr: echelle.customerAnswerAr,
        answerScore: echelle.answerScore,
        answerValidation: echelle.answerValidation

      }
      , httpOptions);
  }


}
