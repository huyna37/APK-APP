class BaseController {
    constructor() {
      // Khởi tạo các thứ cần thiết ở đây
    }
  
    // Phương thức để xử lý lỗi và gửi trả lỗi đến client
    handleError(res, error) {
      console.error(error); // Ghi log lỗi vào console
      res.status(500).json({ error: 'Có lỗi xảy ra.' }); // Trả về lỗi 500 cho client
    }
  
    // Phương thức để gửi dữ liệu thành công về client
    sendSuccess(res, data) {
      res.status(200).json(data); // Trả về dữ liệu thành công ở dạng JSON
    }
  }
  
  module.exports = BaseController;
  