export class Contact {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public sex: string = 'man',
        public company: string = '',
        public phone: string = '',
        public email: string = '',
        public description: string = '',
    ){}

    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }

    get img(){
        return `assets/img/${this.sex}.svg`;
    }
}