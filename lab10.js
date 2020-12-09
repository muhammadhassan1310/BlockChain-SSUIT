class basicinfo{
    constructor(lname,fathername,cellno,address,cnic){
        this.lname=lname
        this.fathername=fathername
        this.cellno=cellno
        this.address=address
        this.cnic=cnic
    }
}

class fname extends basicinfo{
    constructor(fname){
        super("Muhammad Hassan","Abdul Latif Tayyab","03323585558","Flat G 27 Al Naseer Square F B Area","********-*******-*")
        this.fname=fname
    }
        disp(){
            console.log("\n BASIC INFO ======================================")
        console.log("Full Name: "+this.fname+" "+this.lname)
        console.log("Father Name: "+this.fathername)
        console.log("Mobile Number: "+this.cellno)
        console.log("Address: "+this.address)
        console.log("CNIC: "+this.cnic)
    }
}
var abc=new fname("Muhammad Hassan")
abc.disp()

class exp{
    constructor(cname,desig,duration){
        this.cname=cname
        this.desig=desig
        this.duration=duration
    }
}class experience extends exp{
    constructor(){
        super("IBL-Unisys","Lead software developer","5 Years")
    }
    dispp(){
        console.log("\n WORK EXPERIENCE ======================================")
        console.log("Company Name: "+this.cname)
        console.log("Designation: "+this.desig)
        console.log("Duration: "+this.duration)
}
}
var aaa=new experience()
aaa.dispp()
class edu{
    constructor(educ,uni,cgpa){
        this.educ=educ
        this.uni=uni
        this.cgpa=cgpa
    }
}
class education extends edu{
    constructor(){
        super("MSCS in Software Engineering","Hamdard University","3.39")
    }
    disppp(){
        console.log("\n EDUCATION ======================================")
        console.log("Program: "+this.educ)
        console.log("University: "+this.uni)
        console.log("Obtained CGPA: "+this.cgpa+"\n")
}}
var bbb=new education()
bbb.disppp()