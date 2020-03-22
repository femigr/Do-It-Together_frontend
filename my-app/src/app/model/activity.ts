export class Activity {
    id: number;
    name: string;
    description: string;
    date: Date;
    type: string;
    imageUrl: string;
    username: string;
    link: string;

    constructor() {
      this.name = '';
      this.description = '';
      this.date = new Date();
      this.type = '';
      this.imageUrl = '';
      this.username = '';
      this.link = '';
    }
  }
