import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/model/news';
import { ArticleServiceService } from 'src/app/service/article-service.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  id:String|undefined;
  news!:News;
  imge:any;
  base64Data: any;
  retrieveResonse?: any;
   retrievedImage: string|undefined;
  
   constructor(private uploadService:ArticleServiceService,
     private route:ActivatedRoute ) { }
 
   ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
    
     this.news=new News();
     this.uploadService.getNewsById(this.id).subscribe(data=>{
       this.news.newsTitle=data.newsTitle;
       console.log(data.newsTitle);
       this.news.newsBody=data.newsBody;
       this.news.deploy=data.deploy;
       this.news.newsRegistrationDate=data.newsRegistrationDate;
       this.news.databaseFile=data.databaseFile;
       console.log(this.news.databaseFile?.fileName);
       this.base64Data=data.databaseFile?.data;
       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
       },
     error=>{
       console.log(error);
       
     })
 
   }
 
 }
 
 
