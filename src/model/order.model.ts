export class order{
    Status: string;
    Total_estimation_kg: number;
    Total_km: number;
    deliver: boolean;
    pickup: boolean;
    laundryname: string;
    laundryadd: string;
    bookername: string;
    bookeradd: string;
    bookerphone: string;

    constructor(){
        this.Status = "";
        this.Total_estimation_kg = 0;
        this.Total_km = 0;
        this.deliver = false;
        this.pickup = false;
        this.laundryname = "";
        this.laundryadd = "";
        this.bookername = "";
        this.bookeradd = "";
        this.bookerphone = "";
    }
}