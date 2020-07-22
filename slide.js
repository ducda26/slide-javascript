document.addEventListener("DOMContentLoaded",function () {
	// Khai báo một số đối tượng cần sử dụng
    var nut = document.querySelectorAll('.chuyenslide ul li');
    // nút trả về một mảng
      
    // bắt sự kiện click cho từng nút
    for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function () {
            // Bỏ tất cả màu đèn trước khi add
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			// Hết phần chuyển màu nút Slide
        }