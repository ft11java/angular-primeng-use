import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortEvent } from 'primeng-lts/api';
import { News } from 'src/app/model/news';
import { ArticleServiceService } from 'src/app/service/article-service.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  newses!:News[];
  filterNewses:News[]|undefined;
  
    
    constructor(private imageUploadService:ArticleServiceService,
      private router:Router) { }
  
    ngOnInit(): void {
      this.getAllNewsList();
    }
  
    private getAllNewsList(){
      this.imageUploadService.getAllNews().subscribe(data=>{
        this.newses=data;
        this.filterNewses=data;
      },
      error=>{
        console.log(error);
        
      })
  
    }
  
    articleDetails(id:String|undefined){
      console.log(id);
      this.router.navigate(['/view',id]);
    }
  
    search(searchText:string):void{
    
      searchText=searchText.toLowerCase();
      console.log(searchText);
      this.filterNewses=this.newses?.filter((news:News)=>{
        return news.newsBody!.toLowerCase().indexOf(searchText)>-1 ;
      })
      }
      
     
  }