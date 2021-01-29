// DOM - LATIHAN MEMBUAT IMAGE GALLERY

// CARA 1 : Ambil setiap element img dengan class thumb, lalu kita tempelkan sebuah event yg kalo diklik, maka gambar diatas yg besar itu akan berubah.

// CARA 2 : Cara yg lebih efektif, yaitu menggunakan EVENT BUBBLING dan EVENT DELEGATION. caranya yaitu dengan tangkap element containernya, lalu kita beri event pada element container itu, sehingga nanti eventnya ngecek apa yg sedang kita klik. 
	// misal : kita mengklik salah satu gambar thumb, maka ambil source dari gambarnya, lalu ubah gambar yg besar sesuai dengan source yg kita klik tadi. Teknik ini juga disebut dengan EVENT DELEGATION.

	const container = document.querySelector('.container');
	const jumbo = document.querySelector('.jumbo');
	const thumbs = document.querySelectorAll('.thumb');

	container.addEventListener('click', function(e) {

		// mengecek apakah yg diklik adalah thumb.
		if( e.target.className == 'thumb' ) {

			// mengubah source dari class jumbo seperti source pada class thumb yg diklik.
			jumbo.src = e.target.src; //ini adalah EVENT DELEGATION.

			// mengambah animasi yg bernama fade.
			jumbo.classList.add('fade');
			setTimeout(function() {
				jumbo.classList.remove('fade');
			}, 500)

			// menandai opacity setengah pada thumb yg sedang aktif (cara 1).
				// thumbs.forEach(function(thumb) {
				// 	if( thumb.classList.contains('active') ) {
				// 		thumb.classList.remove('active');
				// 	};

				// 	e.target.classList.add('active');
				// })
				

			// menandai opacity setengah pada thumb yg sedang aktif (cara 2).
			thumbs.forEach(function(thumb) {
				thumb.className = 'thumb'; // mau kelasnya apapun ubah jadi thumb.
			});
			e.target.classList.add('active');
		}
	});