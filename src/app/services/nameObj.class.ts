export class NameObj {
    public count: number = 1;
    constructor(
        public name: string,
        public id: string
    ) { }

    public changeName(name: string) {
        this.name = name;
    }

    public changeCount(count: number) {
        this.count = count;
    }
}
