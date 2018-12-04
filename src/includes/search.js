var input,search,pr,result,result_arr, locale_HTML, result_store;

function func() {
    locale_HTML = document.getElementById("mainField").innerHTML;
 	// locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
}
setTimeout(func, 1000);  //ждем подгрузки Jsona и выполняем

function FindOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html
	var FindOnPageGo = null;
	var FindOnPageBack = null;
	
	if(input.length<3&&status==true)
	{
		alert('Для поиска вы должны ввести три или более символов');
		FindOnPageBack = function() {
			document.getElementById("mainField").innerHTML = locale_HTML;
			let button = document.querySelector(".headerStart__button");
			button.addEventListener('click', function() {
				location.reload();
			})
			f_hideMenu();
		}
		//f_scrolling();
	}
	
	if(input.length>=3)
	{
		FindOnPageGo = function() {

			search = '/'+input+'/gi';  //делаем из строки регуярное выражение
			pr = document.getElementById("mainField").innerHTML;   // сохраняем в переменную весь body
			result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

			var warning = true;
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				alert('No matches found!');
			}

			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(var i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
			document.getElementById("mainField").innerHTML = pr;  //заменяем html код

			

			let button = document.querySelector(".headerStart__button");
			button.addEventListener('click', function() {
				location.reload();
			})
			//f_scrolling();
			
		}
	}
	FindOnPageBack = function() {
		document.getElementById("mainField").innerHTML = locale_HTML;
		let button = document.querySelector(".headerStart__button");
		button.addEventListener('click', function() {
			location.reload();
		})
		f_hideMenu();
	}
	if(status) {
		FindOnPageBack();
		FindOnPageGo();
		let button = document.querySelector(".headerStart__button");
		button.addEventListener('click', function() {
			location.reload();
		})
		f_scrolling();
	} //чистим прошлое и Выделяем найденное
	if(!status) {
		FindOnPageBack();
		let button = document.querySelector(".headerStart__button");
		button.addEventListener('click', function() {
			location.reload();
		})
		f_scrolling();
	} //Снимаем выделение
	
	//f_hide();
}


function f_scrolling() {
	let home = document.getElementById("home");
	let manager = document.getElementById("Manager");
	let gallery = document.getElementById("Gallery");
	let contact = document.getElementById("contact");

	let headerB = document.querySelector("header");
	let mainB = document.querySelector(".blockMain");
	let galleryB = document.querySelector(".sliderBlock");
	let headerMenuScrollable = document.querySelector(".headerMenuScrollable");

	home.addEventListener('click', function () {
		window.scrollTo(0, 0);
	});
	manager.addEventListener('click', function () {
		let offset = headerB.offsetHeight - headerMenuScrollable.offsetHeight;             //
		window.scrollTo(0, offset);
	});
	gallery.addEventListener('click', function () {
		let offset = headerB.offsetHeight + mainB.offsetHeight - headerMenuScrollable.offsetHeight;  //headerMenuScrollable.offsetHeight
		window.scrollTo(0, offset);
	});
	contact.addEventListener('click', function () {
		let offset = headerB.offsetHeight + mainB.offsetHeight + galleryB.offsetHeight - headerMenuScrollable.offsetHeight;   //headerMenuScrollable.offsetHeight
		window.scrollTo(0, offset);
	});
}