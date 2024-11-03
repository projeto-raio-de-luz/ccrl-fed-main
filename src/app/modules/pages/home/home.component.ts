import { Component, OnInit } from '@angular/core';
import { PathEnum } from '@shared/enum/paths.enum';
import { MenuModel } from '../../../core/models/menu.model';
import { OrganizationDetailModel } from '../../../core/models/organizacao.model';
import { OrganizationDataService } from '../../../service/data/organization-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  organization: OrganizationDetailModel = new OrganizationDetailModel();

  dataInsta = {
    data: [
      {
        media_type: 'CAROUSEL_ALBUM',
        media_url:
          'https://scontent.cdninstagram.com/v/t51.75761-15/464997955_18153489238330330_1268573015700814183_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=moXmBxWuFLIQ7kNvgH8wANe&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Awl62D15VgmQ7-4iBKFKaFP&oh=00_AYBMVW4WRuMBhi8hyf7xLBo779j-RZdAz8ipP_MLrrmm-Q&oe=6728B412',
        permalink: 'https://www.instagram.com/p/DBtd88WOC2O/',
        timestamp: '2024-10-29T13:53:38+0000',
        caption:
          '• Na oficina do projeto “Reciclar como Direito, 2030 vem aí”, os idosos do @centroculturalraiodeluzong mostram que a criatividade e a sustentabilidade andam lado a lado. 🪄\n\nCom retalhos de tecido, papelão e papéis reaproveitados, eles estão confeccionando capinhas de celular únicas, cheias de personalidade e responsabilidade ambiental. Um momento inspirador que une aprendizado, talento e o cuidado com o planeta! 🤍',
        like_count: 16,
        id: '17981468780767841',
      },
      {
        media_type: 'VIDEO',
        media_url:
          'https://instagram.frec40-1.fna.fbcdn.net/o1/v/t16/f1/m86/7A4FDCC457971B0EE843A0158217738A_video_dashinit.mp4?efg=eyJ4cHZfYXNzZXRfaWQiOjkyNjc2MjcyNjE3NjQ3NCwidmVuY29kZV90YWciOiJ4cHZfcHJvZ3Jlc3NpdmUuSU5TVEFHUkFNLkNMSVBTLkMzLjcyMC5kYXNoX2Jhc2VsaW5lXzFfdjEifQ&_nc_ht=instagram.frec40-1.fna.fbcdn.net&_nc_cat=104&vs=5e1a9f39ef00c10f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83QTRGRENDNDU3OTcxQjBFRTg0M0EwMTU4MjE3NzM4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFa1ZzUnNFYUJ1YXpJWUVBQlliaFdlVWVuNVRicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJrTbrbHYuKUDFQIoAkMzLBdASYhysCDEnBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gcA&ccb=9-4&oh=00_AYC38KCfFiPCre017MxfQthES3AzRThlncUlTrt9nQ10Iw&oe=6724AF72&_nc_sid=1d576d',
        permalink: 'https://www.instagram.com/reel/DBmObdkvJ6_/',
        timestamp: '2024-10-26T18:57:12+0000',
        caption:
          'Hoje foi dia de atividade no Projeto Alvorecer! 🌅🧩 \n\nEm cada encontro, nossos beneficiários mergulham em experiências que ensinam e inspiram. Com jogos de tabuleiro e cultura, seguimos firmes no caminho do aprendizado e da união! 🌞🎲❤️',
        like_count: 26,
        thumbnail_url:
          'https://scontent.cdninstagram.com/v/t51.29350-15/464686018_546164441496828_2120165233213282510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=F8n7JFUXAh0Q7kNvgFubdhZ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Awl62D15VgmQ7-4iBKFKaFP&oh=00_AYC5Yomvk2Hv8drggvI1rFvz37P3Okml9vtedgm3wTiYew&oe=6728C3D1',
        id: '18284698876243169',
      },
      {
        media_type: 'CAROUSEL_ALBUM',
        media_url:
          'https://scontent.cdninstagram.com/v/t51.75761-15/464758838_18153099079330330_6283282119966815932_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=Z9LIyY5UIE8Q7kNvgEc4LZP&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Awl62D15VgmQ7-4iBKFKaFP&oh=00_AYAKvKNWvBbJ7NhpaJ071BnbJFl75Lap6qLYi7yS-CfE-g&oe=6728B5C2',
        permalink: 'https://www.instagram.com/p/DBkTgzTNuVd/',
        timestamp: '2024-10-26T00:29:15+0000',
        caption:
          '• Consciência e sustentabilidade para todas as gerações! ✨\n\nNo Centro Cultural Raio de Luz, a palestra sobre o descarte consciente de eletrônicos foi especialmente direcionada aos idosos do projeto “Reciclar como Direito, 2030 vem aí”. \n\nEsse encontro reforçou a importância do reaproveitamento e da responsabilidade ambiental, mostrando que, com conhecimento e pequenas atitudes, é possível construir um futuro mais sustentável. \n\nJuntos, estamos plantando as sementes de um amanhã mais verde e consciente! 💚',
        like_count: 14,
        id: '18467813806017155',
      },
    ],
    paging: {
      cursors: {
        before:
          'QVFIUk5CTHEyNkZAhelJMbm1CYV8zZAnZAXaHJjVVlTMndzUElNODQ0MGRyUE1JYVoteEZAqNTZARQ1dDWW40Wk5PaHdtNVAzN1h4bi1PWlVSWjh2REwtVWs5WlZAR',
        after:
          'QVFIUmRsMFlpUWVKQkZAfd2dUZAWV6WjZARd1JESlU4VVR4VG9yaUxLRjVOSlRiOVRxSUJ3TmVEdk5DV1NYY1BpNXhvS0RUVWxxbDJ4YlF3QnAtZA19SZAXNBQzNB',
      },
      next: 'https://graph.instagram.com/v21.0/17841409909882183/media?access_token=IGQWRNNDc1OHI5QUFQc0hBV2R6NXYtbVkxYXd3TC1RNEhxSWUybFhlSzdIRTJmRUZA0VXdmTWhWVU5RMnliSlVaU3d3ZAmdUTG1ta2VXNXBtS0xNWmVvZA1JlY2UtLWZAiUlRSOThuR0pNLVdTa0o3TlBhZAUJzZAWM4dDQZD&fields=media_type,%20media_url,%20permalink,%20timestamp,%20caption,%20like_count,%20thumbnail_url&limit=25&after=QVFIUmRsMFlpUWVKQkZAfd2dUZAWV6WjZARd1JESlU4VVR4VG9yaUxLRjVOSlRiOVRxSUJ3TmVEdk5DV1NYY1BpNXhvS0RUVWxxbDJ4YlF3QnAtZA19SZAXNBQzNB',
    },
  };

  constructor(private organizationDataService: OrganizationDataService) {}

  ngOnInit(): void {
    const data = this.organizationDataService.getData();
    if (data) this.organization = data;
  }

  isVideo(media_type: string): boolean {
    return media_type === 'VIDEO';
  }
}
