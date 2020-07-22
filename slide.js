document.addEventListener("DOMContentLoaded", function () {
    // Khai báo một số đối tượng cần sử dụng
    var nut = document.querySelectorAll('.chuyenslide ul li');
    var slides = document.querySelectorAll('.cacslide ul li');
    //console.log(slides);
    // nút trả về một mảng

    // bắt sự kiện click cho từng nút
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function () {

            // Bỏ tất cả màu đèn trước khi add
            for (var i = 0; i < nut.length; i++) {
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            // Hết phần chuyển màu nút Slide

            // Xử lý phần tính vị trí
            console.log(this.previousElementSibling);
            var nutkichhoat = this;
            var vitrinut = 0;
            for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
                //console.log('bien i = ' + vitrinut);
                // console.log('phần tử nút kích hoạt là' + nutkichhoat)
            }
            // Hết vòng lặp này biến i = số thứ tự
            // console.log("Vị trí của phần tử có class là kích hoạt là = " + vitrinut);
            //Bước 1: Cho tất cả Slide ẩn đi remove class active
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                slides[vitrinut].classList.add("active");
            }
        })
    }
    // Hết sự kiện cho nút

    autoSlide();

    //Viết hàm tự chuyển slide
    function autoSlide() {
       // Bước 1: Xác định vị trí slide
		var vitrislide = 0;
		var slideHienTai = document.querySelector('.cacslide ul li.active');
		console.log(slideHienTai.previousElementSibling);
        // console.log(slideHienTai);
        for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling; vitrislide++){};
        console.log("Vi tri slide hien tai la" + vitrislide);

        //Bước 2: Cho phần tử tiếp theo của slide hiện ra
    }
})