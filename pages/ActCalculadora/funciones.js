let operacion = document.getElementById('operacion');
let resultado = document.getElementById('resultado');

function agregar(num)
{
    operacion.innerHTML+=num;
    calcular();
}
function calcular()
{
    resultado.innerHTML = eval(operacion.innerHTML);
}
function borrar()
{
    operacion.innerHTML="";
    resultado.innerHTML="";
}

function mostrarResultado()
{
    operacion.innerHTML= resultado.innerHTML;
    resultado.innerHTML="";
}
function Claro(){
	calculadora.classList.add('Claro');
	calculadora.classList.remove('Oscuro');
	//guardamos en la variable boton los elementos del HTML
	//que tengan la clase ".boton"
	let boton = document.querySelectorAll('.boton');
	let t=boton.length;

	for(i=t-1;i>=0;i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	operacion.classList.remove('toscuro');
	operacion.classList.add('tclaro');
	document.querySelector('.fa-sun').classList.add('Activado');
	document.querySelector('.fa-moon').classList.remove('Activado');
	document.querySelector('body').classList.add('Oscuro');
	document.querySelector('body').classList.remove('Claro');

	

}

function oscuro(){
	calculadora.classList.add('Oscuro');
	calculadora.classList.remove('Claro');
	//guardamos en la variable boton los elementos del HTML
	//que tengan la clase ".boton"
	let boton=document.querySelectorAll('.boton');
	let t=boton.length;
	for(i=t-1;i>=0;i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	operacion.classList.remove('toscuro');
	operacion.classList.add('tclaro');
	document.querySelector('.fa-moon').classList.add('Activado');
	document.querySelector('.fa-sun').classList.remove('Activado');
	document.querySelector('body').classList.add('Claro');
	document.querySelector('body').classList.remove('Oscuro');
}