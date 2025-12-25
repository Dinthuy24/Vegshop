//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        const products = [
            // --- 1. RAU (11 món) ---
            {
                id: 1,
                status: 1,
                title: 'Rau Mồng tơi',
                img: './assets/img/products/rau-mong-toi.jpg',
                category: 'Rau',
                price: 15000,
                desc: 'Rau mồng tơi xanh non, lá to, thích hợp nấu canh cua, canh ngao giải nhiệt mùa hè cực tốt.'
            },
            {
                id: 2,
                status: 1,
                title: 'Rau muống',
                img: './assets/img/products/rau-muong.jpg',
                category: 'Rau',
                price: 10000,
                desc: 'Rau muống tươi, giòn, dễ chế biến các món luộc hoặc xào tỏi thơm ngon.'
            },
            {
                id: 3,
                status: 1,
                title: 'Súp lơ (Bông cải)',
                img: './assets/img/products/sup-lo.jpg',
                category: 'Rau',
                price: 25000,
                desc: 'Súp lơ tươi ngon, giàu chất xơ và vitamin, tốt cho sức khỏe tim mạch.'
            },
            {
                id: 4,
                status: 1,
                title: 'Cải thìa',
                img: './assets/img/products/cai-thia.jpg',
                category: 'Rau',
                price: 18000,
                desc: 'Cải thìa bẹ trắng, lá xanh, ngọt mát, thường dùng để xào nấm hoặc nấu canh.'
            },
            {
                id: 5,
                status: 1,
                title: 'Bắp cải',
                img: './assets/img/products/bap-cai.jpg',
                category: 'Rau',
                price: 20000,
                desc: 'Bắp cải cuộn chặt, lá giòn ngọt, thích hợp làm nộm, luộc hoặc xào.'
            },
            {
                id: 6,
                status: 1,
                title: 'Cải thảo',
                img: './assets/img/products/cai-thao.jpg',
                category: 'Rau',
                price: 22000,
                desc: 'Cải thảo tươi ngon, nguyên liệu chính để làm kim chi hoặc nhúng lẩu.'
            },
            {
                id: 7,
                status: 1,
                title: 'Cải ngọt',
                img: './assets/img/products/cai-ngot.jpg',
                category: 'Rau',
                price: 15000,
                desc: 'Cải ngọt thân mập, lá xanh, nấu canh thịt bằm hoặc xào đều rất ngon.'
            },
            {
                id: 8,
                status: 1,
                title: 'Rau ngót',
                img: './assets/img/products/rau-ngot.jpg',
                category: 'Rau',
                price: 12000,
desc: 'Rau ngót bổ dưỡng, thanh mát, giải nhiệt, rất tốt cho phụ nữ và trẻ em.'
            },
            {
                id: 9,
                status: 1,
                title: 'Rau dền',
                img: './assets/img/products/rau-den.jpg',
                category: 'Rau',
                price: 12000,
                desc: 'Rau dền đỏ/trắng nấu canh tôm hoặc luộc chấm mắm tỏi rất đưa cơm.'
            },
            {
                id: 10,
                status: 1,
                title: 'Xà lách',
                img: './assets/img/products/xa-lach.jpg',
                category: 'Rau',
                price: 25000,
                desc: 'Xà lách tươi rói, dùng để ăn sống, làm salad hoặc kẹp bánh mì.'
            },
            {
                id: 11,
                status: 1,
                title: 'Rau má',
                img: './assets/img/products/rau-ma.jpg',
                category: 'Rau',
                price: 18000,
                desc: 'Rau má tươi, có thể dùng để nấu canh hoặc xay lấy nước uống thanh nhiệt.'
            },

            // --- 2. CỦ (9 món) ---
            {
                id: 12,
                status: 1,
                title: 'Cà rốt',
                img: './assets/img/products/ca-rot.jpg',
                category: 'Củ',
                price: 20000,
                desc: 'Cà rốt Đà Lạt màu cam đẹp mắt, giàu vitamin A, tốt cho mắt và da.'
            },
            {
                id: 13,
                status: 1,
                title: 'Khoai sọ',
                img: './assets/img/products/khoai-so.jpg',
                category: 'Củ',
                price: 30000,
                desc: 'Khoai sọ dẻo thơm, bở tơi, nấu canh sườn hoặc hầm xương rất ngon.'
            },
            {
                id: 14,
                status: 1,
                title: 'Khoai tây',
                img: './assets/img/products/khoai-tay.jpg',
                category: 'Củ',
                price: 25000,
                desc: 'Khoai tây củ to, vỏ mỏng, thích hợp chiên, nấu súp hoặc hầm.'
            },
            {
                id: 15,
                status: 1,
                title: 'Khoai lang',
                img: './assets/img/products/khoai-lang.jpg',
                category: 'Củ',
                price: 22000,
                desc: 'Khoai lang ngọt bùi, giàu chất xơ, món ăn vặt lành mạnh hoặc ăn sáng.'
            },
            {
                id: 16,
                status: 1,
                title: 'Củ cải trắng',
                img: './assets/img/products/cu-cai-trang.jpg',
                category: 'Củ',
                price: 18000,
                desc: 'Củ cải trắng ngọt nước, được ví như nhân sâm trắng, kho thịt hoặc nấu canh.'
            },
            {
id: 17,
                status: 1,
                title: 'Hành tây',
                img: './assets/img/products/hanh-tay.jpg',
                category: 'Củ',
                price: 15000,
                desc: 'Hành tây củ to, giòn ngọt, gia vị không thể thiếu cho các món xào.'
            },
            {
                id: 18,
                status: 1,
                title: 'Su hào',
                img: './assets/img/products/su-hao.jpg',
                category: 'Củ',
                price: 16000,
                desc: 'Su hào non, giòn sần sật, dùng để xào mực hoặc luộc chấm muối vừng.'
            },
            {
                id: 19,
                status: 1,
                title: 'Khoai môn',
                img: './assets/img/products/khoai-mon.jpg',
                category: 'Củ',
                price: 35000,
                desc: 'Khoai môn bở, thơm lừng, chuyên dùng nấu chè, nấu vịt hoặc chiên lệ phố.'
            },
            {
                id: 20,
                status: 1,
                title: 'Củ sen',
                img: './assets/img/products/cu-sen.jpg',
                category: 'Củ',
                price: 45000,
                desc: 'Củ sen tươi, giòn, có tác dụng an thần, nấu canh hầm hoặc làm gỏi.'
            },

            // --- 3. QUẢ (12 món) ---
            {
                id: 21,
                status: 1,
                title: 'Cà tím',
                img: './assets/img/products/ca-tim.jpg',
                category: 'Quả',
                price: 18000,
                desc: 'Cà tím quả dài, vỏ bóng, nướng mỡ hành hoặc bung đậu thịt rất ngon.'
            },
            {
                id: 22,
                status: 1,
                title: 'Cà chua',
                img: './assets/img/products/ca-chua.jpg',
                category: 'Quả',
                price: 20000,
                desc: 'Cà chua chín mọng, đỏ tươi, dùng làm sốt, nấu canh hoặc ăn sống.'
            },
            {
                id: 23,
                status: 1,
                title: 'Bí đỏ',
                img: './assets/img/products/bi-do.jpg',
                category: 'Quả',
                price: 15000,
                desc: 'Bí đỏ dẻo ngọt, giàu vitamin A, nấu canh hoặc làm sữa bí đỏ bổ dưỡng.'
            },
            {
                id: 24,
                status: 1,
                title: 'Ớt chuông',
                img: './assets/img/products/ot-chuong.jpg',
                category: 'Quả',
                price: 45000,
                desc: 'Ớt chuông đủ màu, giòn ngọt, không cay, dùng xào lúc lắc hoặc làm salad.'
            },
            {
                id: 25,
                status: 1,
                title: 'Bắp Mỹ',
                img: './assets/img/products/bap-my.jpg',
category: 'Quả',
                price: 10000,
                desc: 'Bắp Mỹ hạt vàng đều, ngọt lịm, thích hợp luộc, xào bơ hoặc nấu chè.'
            },
            {
                id: 26,
                status: 1,
                title: 'Dưa leo',
                img: './assets/img/products/dua-leo.jpg',
                category: 'Quả',
                price: 15000,
                desc: 'Dưa leo giòn tan, thanh mát, món ăn kèm không thể thiếu trong bữa cơm.'
            },
            {
                id: 27,
                status: 1,
                title: 'Bí đao',
                img: './assets/img/products/bi-dao.jpg',
                category: 'Quả',
                price: 12000,
                desc: 'Bí đao (bí xanh) thanh nhiệt, nấu canh tôm hoặc ép nước uống giảm cân.'
            },
            {
                id: 28,
                status: 1,
                title: 'Mướp đắng (Khổ qua)',
                img: './assets/img/products/muop-dang.jpg',
                category: 'Quả',
                price: 20000,
                desc: 'Mướp đắng có vị đắng đặc trưng, giúp thanh lọc cơ thể, nhồi thịt hoặc xào trứng.'
            },
            {
                id: 29,
                status: 1,
                title: 'Đậu bắp',
                img: './assets/img/products/dau-bap.jpg',
                category: 'Quả',
                price: 25000,
                desc: 'Đậu bắp non xanh, luộc chấm chao hoặc nướng đều rất hấp dẫn.'
            },
            {
                id: 30,
                status: 1,
                title: 'Đậu cô ve',
                img: './assets/img/products/dau-co-ve.jpg',
                category: 'Quả',
                price: 22000,
                desc: 'Đậu cô ve hạt nhỏ, thân giòn, xào thịt bò hoặc luộc đều ngon.'
            },
            {
                id: 31,
                status: 1,
                title: 'Su su',
                img: './assets/img/products/su-su.jpg',
                category: 'Quả',
                price: 12000,
                desc: 'Su su quả xanh mướt, ngọt tự nhiên, luộc chấm muối vừng là nhất.'
            },
            {
                id: 32,
                status: 1,
                title: 'Bầu',
                img: './assets/img/products/bau.jpg',
                category: 'Quả',
                price: 15000,
                desc: 'Bầu sao hoặc bầu dài, vị ngọt mát, nấu canh ngao hoặc luộc rất mềm.'
            },

            // --- 4. TRÁI CÂY (17 món) ---
            {
                id: 33,
                status: 1,
                title: 'Cam',
                img: './assets/img/products/cam.jpg',
                category: 'Trái cây',
                price: 35000,
desc: 'Cam sành/cam vinh mọng nước, nhiều vitamin C, tăng cường sức đề kháng.'
            },
            {
                id: 34,
                status: 1,
                title: 'Kiwi',
                img: './assets/img/products/kiwi.jpg',
                category: 'Trái cây',
                price: 120000,
                desc: 'Kiwi nhập khẩu, vị chua ngọt hài hòa, giàu dinh dưỡng cho cả gia đình.'
            },
            {
                id: 35,
                status: 1,
                title: 'Táo',
                img: './assets/img/products/tao.jpg',
                category: 'Trái cây',
                price: 60000,
                desc: 'Táo giòn, ngọt, vỏ mỏng, cung cấp nhiều vitamin và khoáng chất.'
            },
            {
                id: 36,
                status: 1,
                title: 'Chuối',
                img: './assets/img/products/chuoi.jpg',
                category: 'Trái cây',
                price: 25000,
                desc: 'Chuối chín vàng thơm lừng, cung cấp năng lượng và kali cho cơ thể.'
            },
            {
                id: 37,
                status: 1,
                title: 'Mận',
                img: './assets/img/products/man.jpg',
                category: 'Trái cây',
                price: 40000,
                desc: 'Mận hậu giòn tan, chua chua ngọt ngọt, chấm muối ớt cực đã.'
            },
            {
                id: 38,
                status: 1,
                title: 'Hồng',
                img: './assets/img/products/hong.jpg',
                category: 'Trái cây',
                price: 55000,
                desc: 'Hồng giòn Đà Lạt, ngọt thanh, không chát, ăn là mê.'
            },
            {
                id: 39,
                status: 1,
                title: 'Dưa hấu',
                img: './assets/img/products/dua-hau.jpg',
                category: 'Trái cây',
                price: 18000,
                desc: 'Dưa hấu đỏ tươi, nhiều nước, giải khát tuyệt vời cho ngày nắng nóng.'
            },
            {
                id: 40,
                status: 1,
                title: 'Lê',
                img: './assets/img/products/le.jpg',
                category: 'Trái cây',
                price: 50000,
                desc: 'Lê vỏ vàng, thịt trắng giòn, nhiều nước, vị ngọt mát lành.'
            },
            {
                id: 41,
                status: 1,
                title: 'Thanh Long',
                img: './assets/img/products/thanh-long.jpg',
                category: 'Trái cây',
                price: 25000,
                desc: 'Thanh long ruột trắng/đỏ, ngọt mát, hỗ trợ tiêu hóa rất tốt.'
            },
            {
                id: 42,
                status: 1,
                title: 'Nho',
img: './assets/img/products/nho.jpg',
                category: 'Trái cây',
                price: 90000,
                desc: 'Nho chùm quả to, ngọt lịm, vỏ mỏng, món tráng miệng sang trọng.'
            },
            {
                id: 43,
                status: 1,
                title: 'Xoài',
                img: './assets/img/products/xoai.jpg',
                category: 'Trái cây',
                price: 45000,
                desc: 'Xoài cát/xoài thái chín vàng, thịt dày, thơm lừng và ngọt sắc.'
            },
            {
                id: 44,
                status: 1,
                title: 'Dứa (Thơm)',
                img: './assets/img/products/dua.jpg',
                category: 'Trái cây',
                price: 15000,
                desc: 'Dứa mật ngọt đậm đà, hương thơm quyến rũ, dùng ăn tươi hoặc ép nước.'
            },
            {
                id: 45,
                status: 1,
                title: 'Ổi',
                img: './assets/img/products/oi.jpg',
                category: 'Trái cây',
                price: 20000,
                desc: 'Ổi giòn, ruột trắng/hồng, giàu vitamin C bậc nhất trong các loại quả.'
            },
            {
                id: 46,
                status: 1,
                title: 'Bưởi',
                img: './assets/img/products/buoi.jpg',
                category: 'Trái cây',
                price: 40000,
                desc: 'Bưởi da xanh tép hồng, róc vỏ, ngọt thanh, không bị đắng.'
            },
            {
                id: 47,
                status: 1,
                title: 'Bơ',
                img: './assets/img/products/bo.jpg',
                category: 'Trái cây',
                price: 70000,
                desc: 'Bơ sáp dẻo quánh, béo ngậy, làm sinh tố hoặc salad đều tuyệt vời.'
            },
            {
                id: 48,
                status: 1,
                title: 'Chanh leo',
                img: './assets/img/products/chanh-leo.jpg',
                category: 'Trái cây',
                price: 30000,
                desc: 'Chanh leo thơm nức mũi, vị chua ngọt, pha nước giải khát cực đã.'
            },
            {
                id: 49,
                status: 1,
                title: 'Dâu tây',
                img: './assets/img/products/dau-tay.jpg',
                category: 'Trái cây',
                price: 150000,
                desc: 'Dâu tây đỏ mọng, vị chua nhẹ ngọt hậu, đẹp da và tốt cho sức khỏe.'
            },

            // --- 5. NẤM & RAU GIA VỊ (11 món) ---
            {
                id: 50,
                status: 1,
                title: 'Nấm kim châm',
                img: './assets/img/products/nam-kim-cham.jpg',
                category: 'Nấm & rau gia vị',
                price: 15000,
desc: 'Nấm kim châm giòn dai, là linh hồn của các món lẩu và nấm nướng giấy bạc.'
            },
            {
                id: 51,
                status: 1,
                title: 'Hành lá',
                img: './assets/img/products/hanh-la.jpg',
                category: 'Nấm & rau gia vị',
                price: 5000,
                desc: 'Hành lá tươi xanh, gia vị không thể thiếu giúp món ăn thêm màu sắc và hương vị.'
            },
            {
                id: 52,
                status: 1,
                title: 'Rau húng quế',
                img: './assets/img/products/hung-que.jpg',
                category: 'Nấm & rau gia vị',
                price: 8000,
                desc: 'Húng quế thơm nồng, ăn kèm phở, bún bò hoặc làm gia vị món Ý.'
            },
            {
                id: 53,
                status: 1,
                title: 'Tỏi',
                img: './assets/img/products/toi.jpg',
                category: 'Nấm & rau gia vị',
                price: 30000,
                desc: 'Tỏi củ chắc, tép to, thơm nồng, gia vị cơ bản cho mọi món xào nấu.'
            },
            {
                id: 54,
                status: 1,
                title: 'Ớt (hiểm/sừng)',
                img: './assets/img/products/ot.jpg',
                category: 'Nấm & rau gia vị',
                price: 10000,
                desc: 'Ớt tươi cay nồng, kích thích vị giác, làm nước chấm hoặc kho cá.'
            },
            {
                id: 55,
                status: 1,
                title: 'Gừng',
                img: './assets/img/products/gung.jpg',
                category: 'Nấm & rau gia vị',
                price: 15000,
                desc: 'Gừng già cay ấm, khử mùi tanh thực phẩm và giữ ấm cơ thể.'
            },
            {
                id: 56,
                status: 1,
                title: 'Sả',
                img: './assets/img/products/sa.jpg',
                category: 'Nấm & rau gia vị',
                price: 5000,
                desc: 'Sả cây thân trắng, thơm lừng, dùng để hấp sả, kho gà hoặc nấu cari.'
            },
            {
                id: 57,
                status: 1,
                title: 'Ngò rí (Rau mùi)',
                img: './assets/img/products/ngo-ri.jpg',
                category: 'Nấm & rau gia vị',
                price: 5000,
                desc: 'Ngò rí thơm dịu, trang trí món ăn đẹp mắt và tăng hương vị.'
            },
            {
                id: 58,
                status: 1,
                title: 'Nấm đùi gà',
                img: './assets/img/products/nam-dui-ga.jpg',
                category: 'Nấm & rau gia vị',
                price: 40000,
                desc: 'Nấm đùi gà thân to, thịt dày, giòn ngọt như thịt gà, xào hay nướng đều ngon.'
},
            {
                id: 59,
                status: 1,
                title: 'Nấm hương',
                img: './assets/img/products/nam-huong.jpg',
                category: 'Nấm & rau gia vị',
                price: 50000,
                desc: 'Nấm hương (nấm đông cô) thơm đặc trưng, làm dậy mùi các món hầm, súp.'
            },
            {
                id: 60,
                status: 1,
                title: 'Nấm bào ngư',
                img: './assets/img/products/nam-bao-ngu.jpg',
                category: 'Nấm & rau gia vị',
                price: 35000,
                desc: 'Nấm bào ngư xám dai ngon, ngọt tự nhiên, thích hợp ăn lẩu hoặc xào sả ớt.'
            }
        ];

        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "admin",
            phone: "0987654321",
            password: "123456",
            address: '122 Nguyễn Sinh Cung - Thành phố Huế',
            email: 'admin123@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })

        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();