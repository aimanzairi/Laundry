export class laundry{
    address: string;
    image: string;
    owner: string;
    phone: string;
    name: string;
    pricekg: number;
    pricekm: number;
    laundrid: string;

    constructor(){
        this.address = "";
        this.image = "";
        this.owner = "";
        this.name = "";
        this.phone = "";
        this.pricekg = 0;
        this.pricekm = 0;
        this.laundrid = "";
    }
}