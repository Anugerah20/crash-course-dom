// console.dir(document); // Menampilkan semua daftar properti dari object dom //

// console.log(document.domain); // Mencetak domain dari dokumen dari konsol browser (Tidak Rekomendasi)
// console.log(document.URL); // Mencetak url atau alamat dari konsol browser
// console.log(document.title); // Mencetak judul dari konsol browser
// document.title = 222; // Mengubah judul dari dokumen di browser
// console.log(document.doctype); // Mencetak jenis dokumen dari konsol browser
// console.log(document.head); // Mencetak elemen head dari dokumen yang ditampilkan ke konsol browser
// console.log(document.body); // Mencetak elemen body dari dokumen yang ditampilkan ke konsol browse
// console.log(document.all); // (Tidak Rekomendasi)
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

/* getElementById */
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'asall';
// headerTitle.innerHTML = 'baday';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

/* getElementsByClassName */
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Memberikan warna ke semua list items
// for(let i = 0; i < items.length; i++){
//      items[i].style.backgroundColor = '#f4f4f4';
// }

/* getElementsByTagName */
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++){
//      li[i].style.backgroundColor = '#f4f4f4';
// }

/* querySelector */
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND NOW';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = 'orange';

/* querySelectorAll */
let titles = document.querySelectorAll('.title');
titles[0].textContent = 'HAHAHHA';

let dod = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for(let x = 0; x < dod.length; x++) {
     dod[x].style.backgroundColor = 'yellow';
     even[x].style.backgroundColor = 'blue';
}
