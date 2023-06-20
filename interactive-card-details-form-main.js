
'use strict';
const colors = {
	'Red': 'hsl(0, 100%, 66%)',
	'Black': 'hsl(359°, 100%, 0%)',
};

const formData=()=>{
  return {
	  input_name :        document.getElementById('input-name'),
	  input_name_error :  document.getElementById('input-name-error'),
	  input_name_clear :  document.getElementById('nameclear'),
	  input_number :      document.getElementById('input-number'),
	  input_number_error: document.getElementById('input-number-error'),
	  input_number_clear : document.getElementById('numberclear'),
	  input_month:        document.getElementById('input-month'),
	  input_month_error : document.getElementById('input-month-error'),
	  input_month_clear : document.getElementById('monthclear'),
	  input_year :        document.getElementById('input-year'),
	  input_year_error :  document.getElementById('input-year-error'),
	  input_year_clear :  document.getElementById('yearclear'),
	  input_cvc :         document.getElementById('input-cvc'),
	  input_cvc_error :   document.getElementById('input-cvc-error'),
	  input_cvc_clear :   document.getElementById('cvcclear'),
	  
  };
}
$(window).resize(function(){
	location.reload();
});

const addListeners=()=>{
	  
	  let data = formData();
	  //display placeholder values for name and number when the page has loaded.
	  document.querySelector('.prename').textContent= data.input_name.placeholder;
	  document.querySelector('#preview-number').textContent = data.input_number.placeholder;
	  
	  
	  //one:
	  //clear the user input on focus of the placeholder values.
	  [document.querySelector('#input-name'), document.querySelector('#input-number'),
	  document.querySelector('#input-month'),document.querySelector('#input-year'),
	  document.querySelector('#input-cvc')].forEach(item => {
          item.addEventListener('focus', event => {
             item.placeholder='';
			 $(item).addClass('addBorder');
          });
	  });
	  
	  
	  //two:
	  //The user is typing input , on the keyup event show the output of all input typed values as they're being typed in the cards images.
	  //for the name, number, month, year and cvc input fields.
	  document.querySelector('input.name').addEventListener('keyup',function(){
		   let out = document.querySelector('output.name');
		   //for the name field, also allow space(s) to be added in between first and last names
		   if(event.keyCode == 32){
			   this.value += ' ';
		   }else {
			   this.value;
		   } 
		   //show typed input in the cards output
		   out.textContent= this.value;
	  });
	  
      document.querySelector('input.number').addEventListener('keyup',function(){
		   let out = document.querySelector('output.number');
		   //The card number field, allow space to be added in between each 4 digit group(total length 22 characters).
		   if(event.keyCode == 32 && this.value.length <22){
			   this.value += ' ';
		   }else if(this.value.length < 22){
			   this.value;
		   } 
		   out.style.fontSize= '18px';
		   //show typed input in the cards output
		   out.textContent= this.value;
	  });
	  //The month experation input 
	  document.querySelector('input.month').addEventListener('keyup',function(){
		   //allow maximum lenght=2 user input in the month field
		   if (this.value.length > 2) {
			   this.value = this.value.slice(0, 2);
		   }
		   let out = document.querySelector('output.month');
		   //show typed input in the cards output
		   out.textContent= this.value;
		   
	  });
	  //The year experation input
	  document.querySelector('input.year').addEventListener('keyup',function(){
		   //allow maximum lenght=2 user input in the year field
		   if (this.value.length > 2) {
			   this.value = this.value.slice(0, 2);
		   }
		   let out = document.querySelector('output.year');
		   //show typed input in the cards output
		   out.textContent= this.value;
	  });
	  //The cvc input 
	  document.querySelector('input.cvc').addEventListener('keyup',function(){
		   //allow maximum lenght=3 user input in the cvc field
		   if (this.value.length > 3) {
			   this.value = this.value.slice(0, 3);
		   }
		   let out = document.querySelector('output.cvc');
		   //show typed input in the cards output
		   out.textContent= this.value;
	  });
	  
	  let check; 
	  let nameCorrect = false;
	  let numberCorrect = false;
	  let monthCorrect = false;
	  let yearCorrect= false;
	  let cvcCorrect = false;
	  
	  //three:
	  //the user clicked the 'submit' button, and may or may not have filled out the form correctly or at all.
	  //on submit check all input values entered for correctness.
	  document.querySelector('.submit').addEventListener('click',function(){
		   event.preventDefault();
           const width = window.innerWidth;
		   
		   
	       const name_RegEx = /[a-zA-Z]+\s{1,2}[a-zA-Z]+/;
		   //check name input value
		   const name_value = data.input_name.value;
		   //check to see if it validates 
		   check = name_RegEx.test(name_value);
		   console.log('name check',check);
		   if(check=== false){
			    //name input was wrong format, set nameCorrect value to false so it won't load the success screen on submit
			    nameCorrect = false;
			    //set aria-invalid="true"
		        data.input_name.setAttribute('aria-invalid','true');
				//clear the 'Name format entered is valid' message 
				data.input_name_clear.textContent= '';
				//Display an error message when the user leaves this field blank or name is in the wrong format
				data.input_name_error.textContent= 'Wrong format,letters only';
				data.input_name_error.style.color= colors['Red'];
				data.input_name_error.style.position='relative';
				if(width < 1440 ){
					data.input_name_error.style.right='35px';
				} else {
					data.input_name_error.style.right='150px';
				}
		   }else {
			    //name input is correct, reverse all namecorrect=false changes or just set.
			    nameCorrect = true;
			    data.input_name_error.textContent= '';
				data.input_name.setAttribute('aria-invalid','false');
				data.input_name_clear.textContent ='Name format entered is valid';
		   }
		   //console.log('data aria', data.input_name.getAttribute('aria-invalid'));
		   
		   
		   //get number input value
		   const number_value = data.input_number.value;
		   const num_RegEx = /^(\d{4}\s{1,2}\d{4}\s{1,2}\d{4}\s{1,2}\d{4})$/;
		   check = num_RegEx.test(number_value);
		   console.log('number check',check);
		   if(check=== false){
			     //number input was the wrong format,//name input was wrong format, set numberCorrect value to false so it won't load the success screen on submit
			     numberCorrect = false;
			     data.input_number.setAttribute('aria-invalid','true');
				 //clear the 'Number format entered is valid' message 
				data.input_number_clear.textContent= '';
				//Display an error message when the user leaves this field blank;
				data.input_number_error.textContent= 'Wrong format,numbers only';
				data.input_number_error.style.color= colors['Red'];
				data.input_number_error.style.position='relative';
				if(width<1440){
				   data.input_number_error.style.right='30px';
				}else{
				   data.input_number_error.style.right='140px';
				}
		   }else {
			    //number input is correct, reverse all numbercorrect=false changes or just set. 
			    numberCorrect = true;
			    data.input_number_error.textContent= '';
				data.input_number.setAttribute('aria-invalid','false');
				data.input_number_clear.textContent= 'Number format entered is invalid';
		   }
		   
		   
		   //get month input value
		   const month_value = data.input_month.value;
		   if(month_value < 0 || month_value > 12 || month_value.length < 2){
			    check = false;
		   }else{
			    check= true;
		   }
		   console.log('month check',check);
		   if(check=== false){
			    monthCorrect = false;
			    data.input_month.setAttribute('aria-invalid','true');
				//clear the 'month format entered is valid' message 
				data.input_month_clear.textContent= '';
				//Display an error message when the user leaves this field blank;
				data.input_month_error.textContent= 'Can\'t be blank';
				data.input_month_error.style.color= colors['Red'];
				data.input_month_error.style.position='relative';
				if(width<1440){
					data.input_month_error.style.right = '20px';
				}else{
					data.input_month_error.style.right = '30px';
				}
				
		   }else {
			    //month input is correct, reverse all monthcorrect=false changes or just set.
			    monthCorrect = true;
			    data.input_month_error.textContent= '';
				data.input_month.setAttribute('aria-invalid','false');
				data.input_month_clear.textContent= 'Month input entered is valid';
		   }
		   
		   //get year input value
		   const year_value = data.input_year.value;
		   if(year_value < 23 || year_value > 40 || year_value.length < 2){
			    check = false;
		   } else{
			    check= true;
		   }
		   console.log('year check',check);
		   if(check=== false){
			    yearCorrect = false;
			    data.input_year.setAttribute('aria-invalid','true');
				//clear the 'year format entered is valid' message 
				data.input_year_clear.textContent= '';
				//Display an error message when the user leaves this field blank;
				data.input_year_error.textContent= 'Can\'t be blank';
				data.input_year_error.style.color= colors['Red'];
				data.input_year_error.style.position='relative';
				if(width<1440){
					data.input_year_error.style.right='10px';
				}else{
					data.input_year_error.style.right='20px';
				}
				
		   }else {
			    //year input is correct, reverse all yearcorrect=false changes, or just set
			    yearCorrect = true;
			    data.input_year_error.textContent= '';
				data.input_year.setAttribute('aria-invalid','false');
				data.input_year_clear.textContent= 'Year input entered is valid';
		   }
		   
		   
		   //get cvc input value
		   const cvc_value = data.input_cvc.value;
		   if(cvc_value > 999 || cvc_value.length < 3){
			    check = false;
		   }else {
			    check = true;
		   }
		   console.log('cvc check',check);
		   if(check=== false){
			    cvcCorrect = false;
			    data.input_cvc.setAttribute('aria-invalid','true');
				//clear the 'cvc format entered is valid' message 
				data.input_cvc_clear.textContent= '';
				//Display an error message when the user leaves this field blank;
				data.input_cvc_error.textContent= 'Can\'t be blank';
				data.input_cvc_error.style.color= colors['Red'];
				data.input_cvc_error.style.position='relative';
				if(width<1440){
					data.input_cvc_error.style.left='30px';
				}else{
					data.input_cvc_error.style.left='20px';
				}
				
		   }else {
			    //cvc input is correct, reverse all cvcCorrect=false changes or just set.
			    cvcCorrect = true;
			    data.input_cvc_error.textContent= '';
				data.input_cvc.setAttribute('aria-invalid','false');
				data.input_cvc_clear.textContent= 'CVC input entered is valid';
		   }
		   
		   //check if there are any wrong inputs , if so don't load the success screen until all are correct.
		   if(nameCorrect && numberCorrect && monthCorrect && yearCorrect && cvcCorrect){
              //hide card details form 
			  //$('.show').css('display','block');
			  $('#card-form').addClass('hideElement');
			  $('.success').removeClass('d-none');
			  //show the successful card details screen.
			  $('.success').addClass('showElement');
	       }
	  });
	
	  
	  //four , user presses continue button and so reset the page
	  document.querySelector('.continue').addEventListener('click',function(){
		   event.preventDefault();
		   
		   //do a page reload.
		   location.reload();
      });
}

$(window).on('load',function(){
	  
	  //start listening for user input
	  addListeners();
	  
});