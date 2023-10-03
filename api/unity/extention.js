const getPaginatedData = async (page = 0, limit, model, sortField, sortOrder, filterOptions, populateOptions, filter) => {
    try {
        const Model = model;
        let queryCount = {};

        // Tạo một đối tượng query để thực hiện các phương thức sắp xếp, lọc và populate
        let query = Model.find();

        // Lọc
        if (filterOptions) {
            query = query.where(filterOptions);
            queryCount = { ...queryCount, ...filterOptions }; // Thêm filterOptions vào queryCount
        }

        if (filter) {
            const filterData = {};
            for (const key in filter) {
                if (filter.hasOwnProperty(key)) {
                    const regex = new RegExp(filter[key], 'i');
                    filterData[key] = { $regex: regex };
                }
            }
            query = query.where(filterData);
            queryCount = { ...queryCount, ...filterData }; // Thêm filterData vào queryCount
        }

        // Populate
        if (populateOptions) {
            query = query.populate(populateOptions);
        }

        // Tính tổng số mục phù hợp với các điều kiện lọc đã áp dụng
        const totalItems = await Model.countDocuments(queryCount);

        // Sắp xếp
        if (sortField && sortOrder) {
            const sort = {};
            sort[sortField] = sortOrder === "asc" ? 1 : -1;
            query = query.sort(sort);
        }

        if (page || limit) {
            const skip = (page - 1) * limit;
            const totalPages = Math.ceil(totalItems / limit) || 0;

            // Lấy dữ liệu phân trang
            const data = await query.skip(skip).limit(parseFloat(limit));

            return {
                data,
                totalItems,
                totalPages,
                currentPage: page,
            };
        } else {
            // Nếu không có trang hoặc giới hạn, trả về dữ liệu mà không phân trang
            const data = await query;

            return {
                data,
                totalItems,
                currentPage: 1,
            };
        }
    } catch (error) {
        console.error("Error getting paginated data:", error);
        throw error;
    }
};



module.exports = { getPaginatedData }