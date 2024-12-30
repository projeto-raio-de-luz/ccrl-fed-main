import { Component, OnInit } from '@angular/core';
import { OrganizationDetail } from '../../../core/models/organizacao.model';
import { Post } from '../../../core/models/post';
import { OrganizationDataService } from '../../../service/data/organization-data.service';
import { PostService } from '../../../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  organization: OrganizationDetail = new OrganizationDetail();
  dataInsta: Post[] = [];

  constructor(
    private organizationDataService: OrganizationDataService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const data = this.organizationDataService.getData();
    if (data) this.organization = data;

    this.postService.obterPosts().subscribe({
      next: (response) => {
        this.dataInsta = response;
      },
    });
  }

  isVideo(media_type: string): boolean {
    return media_type === 'VIDEO';
  }
}
