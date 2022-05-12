export class SaleOrder {

     status : string = "Draft";

    
    saveDraft(){
        this.status =  "Waiting for Update";
    };
    submit(){
    };
    getStatus() {
        return this.status;
    }
}