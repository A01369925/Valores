function ejecutar(){
	v1=document.f_ciclos.v1.value;
	v2=document.f_ciclos.v2.value;
	if (v1.length==0){
		if (v2.length==0){
			alert("Necesita indicar los dos valores (x,y)")
			document.f_ciclos.v1.style.background="red";
			document.f_ciclos.v2.style.background="red";
		}
		else{
			alert("Necesita indicar el primer valor (x)")
			document.f_ciclos.v1.style.background="red";
		}
	}
	else if (v2.length==0 && v1.length!=0){
		alert("Necesita indicar el segundo valor (y)")
		document.f_ciclos.v2.style.background="red";
	}
	else{
		v1=parseInt(v1);
		v2=parseInt(v2);
		if (v1<1 || v1>10){
			if (v2<1 || v2>5){
				alert("Ninguno de los valores se encuentra entre los rangos especificados")
				document.f_ciclos.v1.style.background="red";
				document.f_ciclos.v2.style.background="red";		
			}
			else{
				alert("El primer valor no se encunetra entre 1 y 10")
				document.f_ciclos.v1.style.background="red";
			}
		}
		else if (v1>=1 && v1<=10){
			if (v2>=1 && v2<=5){
				exp=Math.pow(v1,v2);
				document.f_ciclos.res.value=exp;
			}
			else{
				alert("El segundo valor no se encuentra entre 1 y 5")
				document.f_ciclos.v2.style.background="red";
			}
		}
	}
}

function campo_x(){
	document.f_ciclos.v1.style.background="blue";
}

function campo_y(){
	document.f_ciclos.v2.style.background="blue";
}

function campos_xy(){
	document.f_ciclos.v1.style.background="blue";
	document.f_ciclos.v2.style.background="blue";
}