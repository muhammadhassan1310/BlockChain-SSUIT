class basic_details{
    constructor(name,roll_no){
        this.name=name
        this.roll_no = roll_no
    }
}

class marksheet extends basic_details{
    constructor(math,phy,chem,bio,comp,obtainedmarks,totalmarks,percent){
        super()
        this.math=math
        this.phy=phy
        this.chem=chem
        this.bio=bio
        this.comp=comp
        this.obtainedmarks=obtainedmarks
        this.totalmarks=totalmarks
        this.percent=percent
    }
    set math(value){
        this._math=value
    }
    get math(){
        return this._math
    }
    set phy(value){
        this._phy=value
    }
    get phy(){
        return this._phy
    }
    set chem(value){
        this._chem=value
    }
    get chem(){
        return this._chem
    }
    set bio(value){
        this._bio=value
    }
    get bio(){
        return this._bio
    }
    set comp(value){
        this._comp=value
    }
    get comp(){
        return this._comp
    }
    print(){
        console.log ("\nStudent Name: ",this.name+"\nRegistration Number: "+this.roll_no)
    }
    percentage(){
        this.obtainedmarks = this._chem + this._bio + this._math + this._comp + this._phy;
        this.totalmarks = 500;
        this.percent = ((this.obtainedmarks / this.totalmarks) * 100).toFixed(2)
        // console.log("Final percentage is " + this.percent)
    }
    printresult() {
        console.log("\n REPORT CARD =====================================================================")
        console.log("\nStudent Name:" + this.name + "")
        console.log("\nRegistration Number:" + this.roll_no + "")
        console.log("\nGrand Obtained Marks: ", this.obtainedmarks)
        console.log("Grand Total Marks: ", this.totalmarks)
        console.log("Final Percentage is: ", this.percent, "\n")
        console.log("\n REPORT CARD =====================================================================\n")
    }
    grade() {
        if (this.percent >= 90) {
            console.log("Grade is A-1")
        }
        else if (this.percent < 90 && this.percent >= 80) {
            console.log("Grade is A")
        }
        else if (this.percent < 80 && this.percent >=70) {
            console.log("Grade is B")
        }
        else if (this.percent <70 && this.percent >=60) {
            console.log("Grade is C")
        }
        else if (this.percent <60 && this.percent >=50) {
            console.log("Grade is E")
        }
        else{
            console.log("Grade is F")
        }
    }
}

let mehmood = new marksheet("Muhammad Hassan", 5229)
mehmood.name= "Muhammad Hassan"
mehmood.roll_no= 5229
mehmood.math = 98
mehmood.phy = 78
mehmood.chem = 84
mehmood.bio = 55
mehmood.comp = 89
mehmood.print()
mehmood.percentage()
mehmood.printresult()
mehmood.grade()