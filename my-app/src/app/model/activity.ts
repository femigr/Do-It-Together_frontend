export class Activity {
    id: number;
    name: string;
    description: string;
    date: Date;
    type: string;
    imageUrl: string;
    username: string;
    link: string;
    participants: number;

    constructor() {
      this.name = '';
      this.description = '';
      this.date = new Date();
      this.type = '';
      this.imageUrl = '';
      this.username = '';
      this.link = '';
      this.imageUrl = '/assets/images/example3.jpg';
      this.participants = 1;
    }
  }
