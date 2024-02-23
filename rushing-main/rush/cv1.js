function curri(CVName)
{
	if (CVName == "kevin")
	{
		
	}
	else if (CVName == "bernat")
	{


					// TODO MAKE THE NAV-BAR FIXED


			// TAKE THE DIVISION
		const my_cv = document.getElementById("cv");
		

			// CREATE THE 3 PARTS OF THE CURRICULUM
		const part1 = document.createElement("div");
		const part2 = document.createElement("div");
		const part3 = document.createElement("div");
			// ASSIGN THEM THE CLASS
		part1.className = "berni_part berni_part1";
		part2.className = "berni_part berni_part2";
		part3.className = "berni_part berni_part3";


			// APPEND THE 3 PARTS
		my_cv.appendChild(part1);
		my_cv.appendChild(part2);
		my_cv.appendChild(part3);



		const my_nav_bar = document.getElementsByName("nav_display");
		



					/***************************************************/
					/* 				       M A I N         				/
					/***************************************************/



					/***************************************************/
					/* 					P A R T  - 1         			/
					/***************************************************/


			// APPEND THE TEXT
		const text_1_1 = document.createTextNode("Bernat Canals");
		const text_1_2 = document.createTextNode("42BCN student");
		const parf_1_1 = document.createElement("h1");
		const parf_1_2 = document.createElement("h2");
		parf_1_1.appendChild(text_1_1);
		parf_1_2.appendChild(text_1_2);
		parf_1_1.id = "berni_text1_1";
		parf_1_2.id = "berni_text1_2";
		part1.appendChild(parf_1_1);
		part1.appendChild(parf_1_2);


			// APPEND THE IMAGE
		const img1 = document.createElement("div");
		img1.className = "berni_img1";
		part1.appendChild(img1);


					/***************************************************/
					/* 					P A R T  - 2         			/
					/***************************************************/

		
		const text_2_1 = document.createTextNode("CODING")
		const text_2_2 = document.createTextNode("De forma  autodidacta, he treballat diferents llenguatges de programació. El més rellevant és el BVA, amb què vaig preparar un simulador de posicions de rankings pel departament de Rankings&Analytics. També he creat petits jocs amb C++ i Bash, i he programat bots de Telegram amb Javascript. Durant el grau vam treballar amb R.")
		
		const text_2_3 = document.createTextNode("Experiència")
		const text_2_4 = document.createTextNode("- Becari del departament d'Analytics i Rankings d'ESADE")
		const text_2_5 = document.createTextNode("- Professor de l'acadèmia d'anglès Kids&Us de Vic")
		const text_2_6 = document.createTextNode("- Consultor extern del departament de Quality Assurance d'ESADE")

		const h_2_1 =document.createElement("h");
		const parf_2_1 = document.createElement("p");
		const h_2_2 = document.createElement("h");
		const parf_2_2 = document.createElement("p");
		const parf_2_3 = document.createElement("p");
		const parf_2_4 = document.createElement("p");

		h_2_1.appendChild(text_2_1);
		parf_2_1.appendChild(text_2_2);
		h_2_2.appendChild(text_2_3);
		parf_2_2.appendChild(text_2_4);
		parf_2_3.appendChild(text_2_5);
		parf_2_4.appendChild(text_2_6);

		part2.appendChild(h_2_1);
		part2.appendChild(parf_2_1);
		part2.appendChild(h_2_2);
		part2.appendChild(parf_2_2);		
		part2.appendChild(parf_2_3);
		part2.appendChild(parf_2_4);



		
					/***************************************************/
					/* 					P A R T  - 3         			/
					/***************************************************/
		


	}
}