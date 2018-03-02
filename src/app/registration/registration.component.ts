import { Component } from '@angular/core';

@Component({
selector : 'app-registration',
templateUrl : './registration.component.html',
styleUrls : ['./registration.component.css']
})
export class RegistrationComponent implements {

    products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe(products => this.products = products)
  }
}


/*document.addEventListener("DOMContentLoaded", function(){

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 //get a reference to the element
 var myBtn = document.getElementById('registerBtn');

 //add event listener
 myBtn.addEventListener('click', function(event) {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["pw"].value;
    if (x == "" || y=="") {
        alert("Please fill out all the text fields");
        return false;
    }else {
    registerUser();
    //Hate alerts, can change this later
        alert("You are registered as a user");
    }


 });
});

function registerUser(){
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var pw = (<HTMLInputElement>document.getElementById("pw")).value;
    console.log(name, pw)
}*/
