export class Activity {
    id: number;
    name: string;
    creator: string;
    description: string;
    date: Date;
    type: string;
    imageUrl: string;

    constructor() {
      this.name = '';
      this.creator = '';
      this.description = '';
      this.date = new Date();
      this.type = '';
      this.imageUrl = '';
    }
  }
