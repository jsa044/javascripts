//Variable declarations
			
			var incomeAmount;
			var noTax;
			var taxPercent1;
			var taxPercent2;
			var taxIncome1;
			var taxIncome2;
			var tax1;
			var tax2;
			var myIncome;
			
			//Assignments
			
			noTax = 1500;
			taxIncome1 = 25000;
			taxPercent1 = .15;
			taxIncome2 = 40000;
			taxPercent2 = .20;
			
			incomeAmount = prompt("Enter an income Amount", "");
			myIncome = parseInt(incomeAmount);
			
			
			//Logic and output
			
			switch (true)
			{
			
				case  (myIncome <= noTax):			
				
				alert("This Dollar amount is non-taxable");			
			
				break;
				
				case (myIncome > noTax  &&  myIncome <= taxIncome1):
				
					{ tax1 = (myIncome * taxPercent1);
					var mytax1 =parseInt(tax1);
			
					document.write ("You will need to pay $" + mytax1 + " on your $" + myIncome + " income.");
					}
			
				break;
				
				case (myIncome > taxIncome1 && myIncome <= taxIncome2):
				
					{tax2 = (myIncome * taxPercent2);
					var mytax2 = parseFloat(tax2);
					document.write ("You will need to pay $" + mytax2 + " on your $" + myIncome 
					+ " income.");	
					}
				
				break;
				
				case (myIncome > taxIncome2):
				
					{alert("A tax amount cannot be calculated on the income amount you entered.");}
				
			}