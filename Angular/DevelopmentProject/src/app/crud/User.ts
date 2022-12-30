export class User{
        id:number
        fullName:string
        emailId:string
        mobileNumber:string
        username:string
        password:string

        constructor(fname:string,eid:string,mobile:string,uname:string,pass:string){
            this.emailId=eid;
            this.fullName=fname;
            this.mobileNumber=mobile;
            this.password=pass;
            this.username=uname;

        }
}