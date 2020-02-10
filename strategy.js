function Fedex(){
    this.calculate = package =>{
        //fedex calculation
        return 2.45;
    }
}

function Ups(){
    this.calculate = package =>{
        // Ups calculations
        
        return 1.56;
    }
}

function Usps(){
    this.calculate = package =>{
        // Usps calculations

        return 4.5;
    }
}

function Shipping(){
    this.company = "";
    this.setStrategy = (company) =>{
        this.company = company;
    }
    this.calculate = (package) => {
        return this.company.calculate(package);
    }
}

const fedex = new Fedex();
const ups = new Ups();
const usps = new Usps();

const package = {from: 'Alabama', to: 'Georgia', weight:1.56};

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex: "+shipping.calculate(package));

shipping.setStrategy(ups)
console.log("Ups: "+shipping.calculate(package));
