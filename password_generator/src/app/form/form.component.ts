import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  password:any;
  passwordLength:number = 15;
  checkBox = {
    capitalLetter:true,
    smallLetter:true,
    number:true,
    symbol:true
  }
  passwordType:string = "Very Strong"

   uppercase:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     lowercase:string = "abcdefghijklmnopqrstuvwxyz";
     numbers:string = "0123456789";
     symbols:string = "!@#$%^&*()_+[]{}|;:,.<>?";


  constructor() {}

  ngOnInit(): void {
    this.generatePassword()
  }

  generatePassword(){
    let characters = "";

    if(this.checkBox.capitalLetter) characters += this.uppercase
    if(this.checkBox.smallLetter) characters += this.lowercase
    if(this.checkBox.number) characters += this.numbers
    if(this.checkBox.symbol) characters += this.symbols

    if(this.passwordLength <= 4) this.passwordType = "Very Week"
    if(this.passwordLength >= 5 && this.passwordLength <= 7) this.passwordType = "Week"
    if(this.passwordLength >= 8 && this.passwordLength <= 9) this.passwordType = "Good"
    if(this.passwordLength >= 10 && this.passwordLength <= 11) this.passwordType = "Strong"
    if(this.passwordLength > 11) this.passwordType = "Very Strong"


    let password = "";
    let length = this.passwordLength
    
    if (characters === "") {
      this.password = "";
      return ;
  }
  
    // Generate password by randomly selecting characters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    this.password = password;
    console.log(password)
  }

  copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Text copied to clipboard!');
  }

}
