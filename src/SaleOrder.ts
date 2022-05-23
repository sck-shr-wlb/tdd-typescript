export class SaleOrder {
    status : string = "Draft";
    revising : string = "Revising";
    waitingForUpdate : string = "Waiting for Update";
    waitingForApproval : string = "Waiting for Approval";
    rejected : string = "Rejected";
    
    revise() {
        this.status = this.revising;
    }

    saveDraft(){
        this.status =  this.waitingForUpdate;
    };

    submit(){
        if(this.status === this.rejected){
            throw new Error ("ไม่สามารถกด submit ได้");
        }

        this.status = this.waitingForApproval;
    };

    setStatus(status: string){    
        this.status = status;
    };

    getStatus() {
        return this.status;
    };
}