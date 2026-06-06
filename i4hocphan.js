const scheduleData = [
    {
        "maLHP": "1011283.2521.yy.94",
        "tenMon": "Anh văn CN Cơ khí",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F308",
        "giangVien": "Hoàng Văn Thạnh"
    },
    {
        "maLHP": "1011263.2521.yy.93",
        "tenMon": "Bảo trì công nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 2-5,F206",
        "giangVien": "Đinh Đức Hạnh"
    },
    {
        "maLHP": "1012580.2521.yy.99",
        "tenMon": "Cơ sở công nghệ chế tạo máy",
        "tuanHoc": "46-51",
        "lichHoc": "Thứ 2: 2-4,F102; Thứ 4: 2-4,F102; Thứ 6: 2-4,F102",
        "giangVien": "Lưu Đức Bình"
    },
    {
        "maLHP": "1012440.2521.yy.98",
        "tenMon": "Cơ sở điều khiển hệ cơ khí",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F102",
        "giangVien": "Võ Như Thành"
    },
    {
        "maLHP": "1012930.2521.yy.94",
        "tenMon": "Công nghệ gia công tiên tiến",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F208",
        "giangVien": "Hoàng Văn Thạnh"
    },
    {
        "maLHP": "1013270.2521.yy.92",
        "tenMon": "Công nghệ xử lý hình ảnh & âm thanh",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F208; Thứ 4: 7-10,F208",
        "giangVien": "Đoàn Lê Anh"
    },
    {
        "maLHP": "1012680.2521.yy.92",
        "tenMon": "Dung sai và kỹ thuật đo",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 3: 2-5,F307; Thứ 5: 2-5,F403",
        "giangVien": "Trần Minh Sang"
    },
    {
        "maLHP": "1013180.2521.xx.01",
        "tenMon": "Kỹ năng viết báo cáo kỹ thuật và trình bày",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,XP",
        "giangVien": "Tào Quang Bảng"
    },
    {
        "maLHP": "1011093.2521.yy.92",
        "tenMon": "Kỹ thuật an toàn & Môi trường",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 7-10,F207; Thứ 4: 7-10,F207",
        "giangVien": "Tào Quang Bảng"
    },
    {
        "maLHP": "1013210.2521.yy.91",
        "tenMon": "Kỹ thuật phân tích dao động",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 2-5,F209",
        "giangVien": "Đặng Phước Vinh"
    },
    {
        "maLHP": "1012650.2521.yy.91",
        "tenMon": "Linh kiện điện tử và cảm biến công nghiệp",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 5: 7-10,F401; Thứ 6: 7-10,F308",
        "giangVien": "Đặng Phước Vinh"
    },
    {
        "maLHP": "1012590.2521.yy.90A",
        "tenMon": "TH Cơ sở công nghệ chế tạo máy",
        "tuanHoc": "50-52",
        "lichHoc": "Thứ 7: 2-5,M206",
        "giangVien": "Phạm Nguyễn Quốc Huy"
    },
    {
        "maLHP": "1012590.2521.yy.90B",
        "tenMon": "TH Cơ sở công nghệ chế tạo máy",
        "tuanHoc": "50-52",
        "lichHoc": "Thứ 7: 7-10,M206",
        "giangVien": "Phạm Nguyễn Quốc Huy"
    },
    {
        "maLHP": "1012280.2521.yy.92A",
        "tenMon": "TH Dung sai và kỹ thuật đo",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 6: 2-5,M206",
        "giangVien": "Phạm Nguyễn Quốc Huy"
    },
    {
        "maLHP": "1012280.2521.yy.92B",
        "tenMon": "TH Dung sai và kỹ thuật đo",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 6: 7-10,M206",
        "giangVien": "Phạm Nguyễn Quốc Huy"
    },
    {
        "maLHP": "1012990.2521.yy.96",
        "tenMon": "Thiết kế nhà máy cơ khí",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F209",
        "giangVien": "Nguyễn Phạm Thế Nhân"
    },
    {
        "maLHP": "1012230.2521.yy.96",
        "tenMon": "Toán CN 2: PP phần tử hữu hạn",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F101",
        "giangVien": "Nguyễn Phạm Thế Nhân"
    },
    {
        "maLHP": "1012940.2521.yy.95",
        "tenMon": "Trang bị công nghệ",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 7-10,F102",
        "giangVien": "Lưu Đức Bình"
    },
    {
        "maLHP": "1013340.2521.yy.93",
        "tenMon": "Truyền động và điều khiển thủy khí",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 4: 2-5,F109; Thứ 6: 2-5,F109",
        "giangVien": "Trần Xuân Tùy"
    },
    {
        "maLHP": "1013080.2521.yy.98",
        "tenMon": "Tư duy khởi nghiệp",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 4: 7-10,F101",
        "giangVien": "Nguyễn Quang Như Quỳnh"
    },
    {
        "maLHP": "1023290.2521.yy.99",
        "tenMon": "Cơ sở dữ liệu",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F208",
        "giangVien": "Võ Đức Hoàng"
    },
    {
        "maLHP": "1020413.2521.yy.96",
        "tenMon": "Kiểm thử phần mềm",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F109",
        "giangVien": "Võ Đức Hoàng"
    },
    {
        "maLHP": "1020292.2521.yy.95",
        "tenMon": "Mạng máy tính",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F206",
        "giangVien": "Nguyễn Thế Xuân Ly"
    },
    {
        "maLHP": "1033260.2521.yy.90",
        "tenMon": "Cơ học kỹ thuật",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,F404; Thứ 6: 2-5,F404",
        "giangVien": "Phạm Ngọc Quang"
    },
    {
        "maLHP": "1012120.2521.yy.95",
        "tenMon": "Cơ học kỹ thuật",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,F210; Thứ 6: 2-5,F210",
        "giangVien": "Trịnh Xuân Long"
    },
    {
        "maLHP": "1032792.2521.yy.96",
        "tenMon": "Cơ học kỹ thuật",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F208",
        "giangVien": "Nguyễn Thị Kim Loan"
    },
    {
        "maLHP": "1032750.2521.yy.94",
        "tenMon": "Đồ họa kỹ thuật",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 7-10,E2.104; Thứ 7: 7-10,E2.104",
        "giangVien": "Nguyễn Công Hành"
    },
    {
        "maLHP": "1032170.2521.yy.90",
        "tenMon": "Hình họa - vẽ kỹ thuật",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,E2.104; Thứ 7: 2-5,E2.104",
        "giangVien": "Nguyễn Công Hành"
    },
    {
        "maLHP": "1032170.2521.yy.91",
        "tenMon": "Hình họa - vẽ kỹ thuật",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 2-5,F208; Thứ 5: 2-5,F208",
        "giangVien": "Tôn Nữ Huyền Trang"
    },
    {
        "maLHP": "1032180.2521.yy.91",
        "tenMon": "Hình họa 1",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F301",
        "giangVien": "Tôn Nữ Huyền Trang"
    },
    {
        "maLHP": "1032853.2521.yy.97",
        "tenMon": "Kết cấu và tính toán ô tô",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 2-5,F404; Thứ 5: 2-5,F404",
        "giangVien": "Lưu Đức Lịch"
    },
    {
        "maLHP": "1032583.2521.yy.93",
        "tenMon": "Kỹ thuật ô tô hybrid _ Ô tô điện",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 2-5,F210",
        "giangVien": "Phạm Quốc Thái"
    },
    {
        "maLHP": "1033180.2521.yy.99",
        "tenMon": "Kỹ thuật thủy khí",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F210",
        "giangVien": "Phan Thành Long"
    },
    {
        "maLHP": "1033290.2521.yy.92",
        "tenMon": "Nguyên lý máy",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F301",
        "giangVien": "Trịnh Xuân Long"
    },
    {
        "maLHP": "1033270.2521.yy.91",
        "tenMon": "Sức bền vật liệu",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F310; Thứ 4: 7-10,F310",
        "giangVien": "Nguyễn Văn Thiên Ân"
    },
    {
        "maLHP": "1035700.2521.xx.18",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa Cơ khí GT"
    },
    {
        "maLHP": "1032310.2521.yy.92",
        "tenMon": "Vẽ kỹ thuật",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 2-5,E2.203",
        "giangVien": "Nguyễn Công Hành"
    },
    {
        "maLHP": "1032790.2521.yy.95",
        "tenMon": "Vẽ kỹ thuật cơ khí",
        "tuanHoc": "46-51",
        "lichHoc": "Thứ 2: 7-10,F101",
        "giangVien": "Nguyễn Độ"
    },
    {
        "maLHP": "1041630.2521.yy.94",
        "tenMon": "Đo lường & tự động hóa quá trình nhiệt",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 2-5,F103; Thứ 4: 2-5,F103",
        "giangVien": "Mã Phước Hoàng"
    },
    {
        "maLHP": "1040451.2521.yy.93",
        "tenMon": "Kỹ thuật nhiệt",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F209",
        "giangVien": "Lê Thị Châu Duyên"
    },
    {
        "maLHP": "1041790.2521.yy.95",
        "tenMon": "Kỹ thuật tầng sôi và ứng dụng",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F207",
        "giangVien": "Trần Thanh Sơn"
    },
    {
        "maLHP": "1053480.2521.yy.94",
        "tenMon": "Anh văn chuyên ngành",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F209",
        "giangVien": "Lê Hồng Lâm"
    },
    {
        "maLHP": "1050543.2521.yy.96",
        "tenMon": "Cảm biến",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F306",
        "giangVien": "Nguyễn Hoàng Mai"
    },
    {
        "maLHP": "1053740.2521.yy.99",
        "tenMon": "Điều khiển tự động truyền động điện trong CN",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 7-10,F209",
        "giangVien": "Nguyễn Khánh Quang"
    },
    {
        "maLHP": "1051620.2521.yy.99",
        "tenMon": "Hệ thống thời gian thực",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 2-5,F306; Thứ 4: 2-5,F302",
        "giangVien": "Ngô Đình Thanh"
    },
    {
        "maLHP": "1053750.2521.yy.90",
        "tenMon": "IoT công nghiệp",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 7-10,F210; Thứ 4: 7-10,F210",
        "giangVien": "Ngô Đình Thanh"
    },
    {
        "maLHP": "1053520.2521.yy.96",
        "tenMon": "Khởi nghiệp và đổi mới sáng tạo",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 2-5,F409",
        "giangVien": "Nguyễn Quang Như Quỳnh"
    },
    {
        "maLHP": "1050931.2521.yy.92",
        "tenMon": "Kỹ thuật điện",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 2-5,F107",
        "giangVien": "Nguyễn Hồ Sĩ Hùng"
    },
    {
        "maLHP": "1050931.2521.yy.93",
        "tenMon": "Kỹ thuật điện",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 2-5,F106",
        "giangVien": "Nguyễn Văn Tấn"
    },
    {
        "maLHP": "1052460.2521.yy.91",
        "tenMon": "Máy điện",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 4: 7-10,F209; Thứ 5: 7-10,F209; Thứ 6: 7-10,F209",
        "giangVien": "Võ Quang Sơn"
    },
    {
        "maLHP": "1051463.2521.yy.97",
        "tenMon": "Thực tập công nhân",
        "tuanHoc": "48-50",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Nguyễn Quang Chung"
    },
    {
        "maLHP": "1052540.2521.yy.90A",
        "tenMon": "TN máy điện (1TH)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 7: 2-5,I102",
        "giangVien": "Trần Anh Tuấn"
    },
    {
        "maLHP": "1052540.2521.yy.90B",
        "tenMon": "TN máy điện (1TH)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 7: 7-10,I102",
        "giangVien": "Trần Anh Tuấn"
    },
    {
        "maLHP": "1051653.2521.yy.90",
        "tenMon": "Trang bị điện",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F303",
        "giangVien": "Khương Công Minh"
    },
    {
        "maLHP": "1053760.2521.yy.91",
        "tenMon": "ƯD SCADA trong công nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F108",
        "giangVien": "Lê Tiến Dũng"
    },
    {
        "maLHP": "1051543.2521.yy.98",
        "tenMon": "Vận hành Hệ thống điện",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F302",
        "giangVien": "Hạ Đình Trúc"
    },
    {
        "maLHP": "1053660.2521.yy.97",
        "tenMon": "Vận hành nhà máy điện",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F302",
        "giangVien": "Lê Hồng Lâm"
    },
    {
        "maLHP": "1063360.2521.yy.92",
        "tenMon": "Anten và truyền sóng",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 2-5,F102; Thứ 5: 2-5,F102",
        "giangVien": "Võ Duy Phúc"
    },
    {
        "maLHP": "1063010.2521.yy.98",
        "tenMon": "Kỹ thuật số",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F301; Thứ 4: 7-10,F301",
        "giangVien": "Huỳnh Việt Thắng"
    },
    {
        "maLHP": "1063540.2521.yy.93",
        "tenMon": "Ngôn ngữ mô tả phần cứng và FPGA",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 2-5,F106; Thứ 4: 2-5,F106",
        "giangVien": "Huỳnh Việt Thắng"
    },
    {
        "maLHP": "1062043.2521.yy.97",
        "tenMon": "Thực tập công nhân",
        "tuanHoc": "47-49",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Lê Hồng Nam"
    },
    {
        "maLHP": "1063470.2521.xx.39",
        "tenMon": "Thực tập công nhân (KTMT)",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Lê Hồng Nam"
    },
    {
        "maLHP": "1063020.2521.yy.98A",
        "tenMon": "TN Kỹ thuật số (1TC)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 6: 2-5,C2.101",
        "giangVien": "Vũ Vân Thanh"
    },
    {
        "maLHP": "1063020.2521.yy.98B",
        "tenMon": "TN Kỹ thuật số (1TC)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 6: 7-10,C2.101",
        "giangVien": "Vũ Vân Thanh"
    },
    {
        "maLHP": "1070043.2521.yy.95",
        "tenMon": "Cơ sở Thiết kế nhà máy",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F101",
        "giangVien": "Nguyễn Hoàng Trung Hiếu"
    },
    {
        "maLHP": "1076010.2521.xx.48",
        "tenMon": "Đồ án Quá trình và Thiết bị",
        "tuanHoc": "46-51",
        "lichHoc": "Thứ 4: 2-4,E2.206",
        "giangVien": "Phan Thanh Sơn"
    },
    {
        "maLHP": "1073431.2521.yy.99",
        "tenMon": "Hóa đại cương",
        "tuanHoc": "46-50",
        "lichHoc": "Thứ 3: 3-5,F103; Thứ 5: 3-5,F103",
        "giangVien": "Trịnh Lê Huyên"
    },
    {
        "maLHP": "1073670.2521.yy.91",
        "tenMon": "Hóa đại cương",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 7-10,F210; Thứ 5: 7-10,F210",
        "giangVien": "Trịnh Lê Huyên"
    },
    {
        "maLHP": "1075153.2521.yy.95",
        "tenMon": "Hóa lý 1",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 7-10,F302",
        "giangVien": "Tạ Ngọc Ly"
    },
    {
        "maLHP": "1072673.2521.yy.98",
        "tenMon": "Quá trình & Thiết bị truyền chất",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 7-10,F308",
        "giangVien": "Nguyễn Thanh Bình"
    },
    {
        "maLHP": "1072652.2521.yy.97",
        "tenMon": "Quá trình thủy lực & cơ học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F309",
        "giangVien": "Phạm Thị Đoan Trinh"
    },
    {
        "maLHP": "1073630.2521.yy.90",
        "tenMon": "Thống kê ứng dụng",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F102; Thứ 5: 2-5,F106",
        "giangVien": "Nguyễn Thị Minh Xuân"
    },
    {
        "maLHP": "1079420.2521.xx.50",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa Hóa"
    },
    {
        "maLHP": "1073710.2521.yy.91A",
        "tenMon": "TN hóa đại cương",
        "tuanHoc": "46-48",
        "lichHoc": "Thứ 3: 1-4,A124",
        "giangVien": "Phạm Thị Kim Thảo"
    },
    {
        "maLHP": "1073710.2521.yy.91B",
        "tenMon": "TN hóa đại cương",
        "tuanHoc": "49-51",
        "lichHoc": "Thứ 3: 1-4,A124",
        "giangVien": "Phạm Thị Kim Thảo"
    },
    {
        "maLHP": "1076870.2521.yy.97",
        "tenMon": "Vật liệu nano",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 2-5,F207",
        "giangVien": "Phạm Ngọc Tùng"
    },
    {
        "maLHP": "1092170.2521.yy.98",
        "tenMon": "Kỹ năng nghề nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F301",
        "giangVien": "Trần Đình Minh"
    },
    {
        "maLHP": "1094990.2521.yy.90",
        "tenMon": "Thi công đường ô tô",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 7-10,F103; Thứ 6: 7-10,F103",
        "giangVien": "Trần Thị Thu Thảo"
    },
    {
        "maLHP": "1095200.2521.xx.59",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XD Cầu đường"
    },
    {
        "maLHP": "1095220.2521.xx.73",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XD Cầu đường"
    },
    {
        "maLHP": "1091123.2521.xx.59",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XD Cầu đường"
    },
    {
        "maLHP": "1091133.2521.xx.59",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XD Cầu đường"
    },
    {
        "maLHP": "1091270.2521.xx.64",
        "tenMon": "Thực tập tốt nghiệp (VLXD)",
        "tuanHoc": "46-50",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Vũ Hoàng Trí"
    },
    {
        "maLHP": "1095210.2521.xx.64",
        "tenMon": "Thực tập tốt nghiệp (VLXD)",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Vũ Hoàng Trí"
    },
    {
        "maLHP": "1092840.2521.yy.99",
        "tenMon": "Vật liệu cách nhiệt, chịu nhiệt",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 7-10,F108",
        "giangVien": "Nguyễn Tiến Dũng"
    },
    {
        "maLHP": "1102153.2521.xx.67",
        "tenMon": "An toàn lao động",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 7: 1-4,XP",
        "giangVien": "Phạm Mỹ"
    },
    {
        "maLHP": "1101382.2521.yy.92",
        "tenMon": "Cơ học công trình",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 2-5,F301; Thứ 5: 2-5,F301",
        "giangVien": "Đỗ Minh Đức"
    },
    {
        "maLHP": "1103020.2521.yy.94",
        "tenMon": "Cơ học kết cấu",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 2: 1-4,F407; Thứ 4: 1-4,F407; Thứ 6: 1-4,F407",
        "giangVien": "Lê Cao Tuấn"
    },
    {
        "maLHP": "1102950.2521.yy.93",
        "tenMon": "Học kỳ doanh nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F103",
        "giangVien": "Nguyễn Khánh Linh"
    },
    {
        "maLHP": "1100053.2521.yy.91",
        "tenMon": "Lý thuyết đàn hồi",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F102",
        "giangVien": "Phan Đình Hào"
    },
    {
        "maLHP": "1103800.2521.xx.67",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XDDD&CN"
    },
    {
        "maLHP": "1103250.2521.yy.95",
        "tenMon": "Tiếng Anh nâng cao",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F109; Thứ 4: 7-10,F109",
        "giangVien": "Nguyễn Thị Tú Trinh"
    },
    {
        "maLHP": "1111083.2521.xx.78",
        "tenMon": "Thực tập Kỹ thuật  viên",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XDCTT"
    },
    {
        "maLHP": "1113450.2521.xx.78",
        "tenMon": "Thực tập kỹ thuật viên",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XDCTT"
    },
    {
        "maLHP": "1111083.2521.xx.77",
        "tenMon": "Thực tập kỹ thuật viên",
        "tuanHoc": "46-48",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XDCTT"
    },
    {
        "maLHP": "1113690.2521.xx.77",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa XDCTT"
    },
    {
        "maLHP": "1111262.2521.yy.96",
        "tenMon": "Thủy văn",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F103",
        "giangVien": "Nguyễn Thành Phát"
    },
    {
        "maLHP": "1170011.2521.yy.90",
        "tenMon": "Môi trường",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 2-5,F101",
        "giangVien": "Nguyễn Lan Phương"
    },
    {
        "maLHP": "1170011.2521.yy.91",
        "tenMon": "Môi trường",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 2-5,F401",
        "giangVien": "Hồ Hồng Quyên"
    },
    {
        "maLHP": "1170011.2521.yy.92",
        "tenMon": "Môi trường",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 2-5,F401",
        "giangVien": "Trần Hà Quân"
    },
    {
        "maLHP": "1170843.2521.yy.91",
        "tenMon": "Quản lý tổng hợp nguồn nước",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F106",
        "giangVien": "Nguyễn Dương Quang Chánh"
    },
    {
        "maLHP": "1183230.2521.yy.99",
        "tenMon": "Chuyển giao công nghệ",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,E2.201; Thứ 6: 2-5,E2.201",
        "giangVien": "Trần Thị Hoàng Giang"
    },
    {
        "maLHP": "1180543.2521.yy.97",
        "tenMon": "Giao tiếp kinh doanh",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 4: 1-4,F408; Thứ 6: 2-5,F307",
        "giangVien": "Nguyễn Hồng Nguyên"
    },
    {
        "maLHP": "1182910.2521.yy.99",
        "tenMon": "Hệ thống thông tin quản lý",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F206",
        "giangVien": "Hồ Dương Đông"
    },
    {
        "maLHP": "1183030.2521.yy.94",
        "tenMon": "Khởi tạo doanh nghiệp công nghệ",
        "tuanHoc": "46-50",
        "lichHoc": "Thứ 2: 7-9,F206; Thứ 5: 7-9,F109",
        "giangVien": "Nguyễn Đặng Hoàng Thư"
    },
    {
        "maLHP": "1183130.2521.yy.97",
        "tenMon": "Kinh tế học trong quản trị doanh nghiệp",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 2-5,E2.102; Thứ 4: 2-5,E2.102",
        "giangVien": "Lê Thị Kim Oanh"
    },
    {
        "maLHP": "1182550.2521.yy.90",
        "tenMon": "Kinh tế và quản lý doanh nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F401",
        "giangVien": "Huỳnh Nhật Tố"
    },
    {
        "maLHP": "1182550.2521.yy.91",
        "tenMon": "Kinh tế và quản lý doanh nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F401",
        "giangVien": "Huỳnh Nhật Tố"
    },
    {
        "maLHP": "1182550.2521.yy.92",
        "tenMon": "Kinh tế và quản lý doanh nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F302",
        "giangVien": "Trần Thị Hoàng Giang"
    },
    {
        "maLHP": "1182550.2521.yy.93",
        "tenMon": "Kinh tế và quản lý doanh nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 2-5,F206",
        "giangVien": "Nguyễn Thị Thu Thủy"
    },
    {
        "maLHP": "1182550.2521.yy.94",
        "tenMon": "Kinh tế và quản lý doanh nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F206",
        "giangVien": "Nguyễn Thị Thu Thủy"
    },
    {
        "maLHP": "1183580.2521.yy.90",
        "tenMon": "Kỹ năng mềm trong quản lý dự án",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,E2.201",
        "giangVien": "Trương Quỳnh Châu"
    },
    {
        "maLHP": "1182950.2521.yy.92",
        "tenMon": "Lập lịch trình sản xuất",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F208",
        "giangVien": "Lê Thị Huỳnh Anh"
    },
    {
        "maLHP": "1182890.2521.yy.98",
        "tenMon": "Lý thuyết lãnh đạo",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 4: 7-10,E2.201; Thứ 6: 7-10,E2.201",
        "giangVien": "Nguyễn Hồng Nguyên"
    },
    {
        "maLHP": "1183210.2521.yy.98",
        "tenMon": "Nghiên cứu thị trường và khách hàng công nghiệp",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 7-10,E2.104; Thứ 5: 7-10,E2.104",
        "giangVien": "Lê Thị Kim Oanh"
    },
    {
        "maLHP": "1182920.2521.yy.90",
        "tenMon": "Quản lý bảo trì CN",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F101",
        "giangVien": "Hồ Dương Đông"
    },
    {
        "maLHP": "1180753.2521.yy.90",
        "tenMon": "Quản lý Dự án",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 2-5,F209",
        "giangVien": "Nguyễn Thị Cúc"
    },
    {
        "maLHP": "1180753.2521.yy.91",
        "tenMon": "Quản lý Dự án",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F207",
        "giangVien": "Nguyễn Thị Cúc"
    },
    {
        "maLHP": "1180933.2521.yy.93",
        "tenMon": "Quản trị học",
        "tuanHoc": "46-50",
        "lichHoc": "Thứ 2: 2-4,F302; Thứ 5: 2-4,F109",
        "giangVien": "Nguyễn Đặng Hoàng Thư"
    },
    {
        "maLHP": "1180933.2521.yy.94",
        "tenMon": "Quản trị học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 2-5,F401",
        "giangVien": "Trần Minh Trí"
    },
    {
        "maLHP": "1180933.2521.yy.95",
        "tenMon": "Quản trị học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F401",
        "giangVien": "Trần Minh Trí"
    },
    {
        "maLHP": "1183100.2521.yy.96",
        "tenMon": "Quản trị Logistics căn bản",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 2-5,E2.202; Thứ 4: 2-5,E2.202",
        "giangVien": "Nguyễn Thị Phương Quyên"
    },
    {
        "maLHP": "1183090.2521.yy.95",
        "tenMon": "Quản trị vận hành",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 3: 2-5,E2.202; Thứ 5: 2-5,E2.202",
        "giangVien": "Nguyễn Thị Phương Quyên"
    },
    {
        "maLHP": "1182940.2521.yy.91",
        "tenMon": "Sản xuất tinh gọn",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 2-5,F309",
        "giangVien": "Lê Thị Huỳnh Anh"
    },
    {
        "maLHP": "1210250.2521.xx.71",
        "tenMon": "Thực tập tốt nghiệp",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-10,XP; Thứ 3: 1-10,XP; Thứ 4: 1-10,XP; Thứ 5: 1-10,XP; Thứ 6: 1-10,XP",
        "giangVien": "Khoa Kiến trúc"
    },
    {
        "maLHP": "2090160.2521.yy.90",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 2-5,F308",
        "giangVien": "Hoàng Thị Kim Liên"
    },
    {
        "maLHP": "2090160.2521.yy.91",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 7-10,F308",
        "giangVien": "Hoàng Thị Kim Liên"
    },
    {
        "maLHP": "2090160.2521.yy.92",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F309",
        "giangVien": "Trương Thị Thu Hiền"
    },
    {
        "maLHP": "2090160.2521.yy.93",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 1-4,F108",
        "giangVien": "Vương Phương Hoa"
    },
    {
        "maLHP": "2090160.2521.yy.94",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 1-4,F306",
        "giangVien": "Trần Thị Thùy Trang"
    },
    {
        "maLHP": "2090160.2521.yy.95",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-4,F108",
        "giangVien": "Nguyễn Lê Thu Hiền"
    },
    {
        "maLHP": "2090160.2521.yy.96",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 1-4,F210",
        "giangVien": "Nguyễn Thị Kiều Trinh"
    },
    {
        "maLHP": "2090160.2521.yy.97",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F310",
        "giangVien": "Nguyễn Thị Thu Huyền"
    },
    {
        "maLHP": "2090160.2521.yy.98",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 7-10,F310",
        "giangVien": "Nguyễn Thị Thu Huyền"
    },
    {
        "maLHP": "2090160.2521.yy.99",
        "tenMon": "Chủ nghĩa Xã hội khoa học",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 7-10,F108",
        "giangVien": "Nguyễn Lê Thu Hiền"
    },
    {
        "maLHP": "2170020.2521.yy.90",
        "tenMon": "Kinh tế chính trị Mác - Lênin",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 1-4,F108",
        "giangVien": "Vương Phương Hoa"
    },
    {
        "maLHP": "2170020.2521.yy.91",
        "tenMon": "Kinh tế chính trị Mác - Lênin",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 4: 7-10,F402",
        "giangVien": "Văn Công Vũ"
    },
    {
        "maLHP": "2170020.2521.yy.92",
        "tenMon": "Kinh tế chính trị Mác - Lênin",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F409",
        "giangVien": "Nguyễn Thị Thu Huyền"
    },
    {
        "maLHP": "2170020.2521.yy.93",
        "tenMon": "Kinh tế chính trị Mác - Lênin",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 5: 1-4,F310",
        "giangVien": "Nguyễn Thị Kiều Trinh"
    },
    {
        "maLHP": "2170020.2521.yy.94",
        "tenMon": "Kinh tế chính trị Mác - Lênin",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 1-4,F306",
        "giangVien": "Trần Thị Thùy Trang"
    },
    {
        "maLHP": "2090170.2521.yy.90",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 3: 7-10,F108",
        "giangVien": "Ngô Văn Hà"
    },
    {
        "maLHP": "2090170.2521.yy.91",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 7: 1-4,F101",
        "giangVien": "Đinh Văn Trọng"
    },
    {
        "maLHP": "2090170.2521.yy.92",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F106",
        "giangVien": "Đỗ Thị Hằng Nga"
    },
    {
        "maLHP": "2090170.2521.yy.93",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 2: 7-10,F302",
        "giangVien": "Từ Ánh Nguyệt"
    },
    {
        "maLHP": "2090170.2521.yy.94",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "46-52",
        "lichHoc": "Thứ 6: 7-10,F108",
        "giangVien": "Nguyễn Văn Hoàn"
    },
    {
        "maLHP": "2090170.2521.yy.95",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 6: 1-4,F108; Thứ 7: 1-4,F108",
        "giangVien": "Nguyễn Văn Hoàn"
    },
    {
        "maLHP": "2090170.2521.yy.96",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 1-4,F303; Thứ 4: 1-4,F303",
        "giangVien": "Từ Ánh Nguyệt"
    },
    {
        "maLHP": "2090170.2521.yy.97",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 7-10,F106; Thứ 5: 7-10,F106",
        "giangVien": "Đỗ Thị Hằng Nga"
    },
    {
        "maLHP": "2090170.2521.yy.98",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 4: 1-4,F107; Thứ 6: 1-4,F107",
        "giangVien": "Ngô Văn Hà"
    },
    {
        "maLHP": "2090170.2521.yy.99",
        "tenMon": "Lịch sử Đảng Cộng sản Việt Nam",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 1-4,F408; Thứ 5: 1-4,F408",
        "giangVien": "Đinh Văn Trọng"
    },
    {
        "maLHP": "2090150.2521.yy.90",
        "tenMon": "Triết học Mác - Lênin",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,F206; Thứ 6: 2-5,F206",
        "giangVien": "Lưu Thị Mai Thanh"
    },
    {
        "maLHP": "2090150.2521.yy.91",
        "tenMon": "Triết học Mác - Lênin",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 7-10,F107; Thứ 6: 7-10, F107",
        "giangVien": "Phạm Huy Thành"
    },
    {
        "maLHP": "2090150.2521.yy.92",
        "tenMon": "Triết học Mác - Lênin",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 5: 7-10,F107; Thứ 7: 7-10, F107",
        "giangVien": "Phạm Huy Thành"
    },
    {
        "maLHP": "2090101.2521.yy.90",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 1-4,F402; Thứ 5: 1-4,F402",
        "giangVien": "Lê Sơn"
    },
    {
        "maLHP": "2090101.2521.yy.91",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 7-10,F402; Thứ 4: 7-10,F402",
        "giangVien": "Lê Sơn"
    },
    {
        "maLHP": "2090101.2521.yy.92",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 1-4,F309; Thứ 4: 1-4,F309",
        "giangVien": "Lê Thị Ngọc Hoa"
    },
    {
        "maLHP": "2090101.2521.yy.93",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 7-10,F309; Thứ 6: 7-10,F309",
        "giangVien": "Lê Thị Ngọc Hoa"
    },
    {
        "maLHP": "2090101.2521.yy.94",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 1-4,F405; Thứ 4: 1-4,F405",
        "giangVien": "Phạm Đức Thọ"
    },
    {
        "maLHP": "2090101.2521.yy.95",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 7-10,F308; Thứ 7: 7-10,F102",
        "giangVien": "Phạm Đức Thọ"
    },
    {
        "maLHP": "2090101.2521.yy.96",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 1-4,F403; Thứ 4: 1-4,F403",
        "giangVien": "Trịnh Quang Dũng"
    },
    {
        "maLHP": "2090101.2521.yy.97",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 1-4,F403; Thứ 6: 1-4,F402",
        "giangVien": "Trịnh Quang Dũng"
    },
    {
        "maLHP": "2090101.2521.yy.98",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 5: 1-4,F309; Thứ 7: 1-4,F309",
        "giangVien": "Lê Thị Ngọc Hoa"
    },
    {
        "maLHP": "2090101.2521.yy.99",
        "tenMon": "Tư tưởng Hồ Chí Minh",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 7-10,F303; Thứ 4: 7-10,F303",
        "giangVien": "Phạm Đức Thọ"
    },
    {
        "maLHP": "2100010.2521.yy.90",
        "tenMon": "Pháp luật đại cương",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 2-5,F406; Thứ 4: 2-5,F406",
        "giangVien": "Nguyễn Hoàng Duy Linh"
    },
    {
        "maLHP": "2100010.2521.yy.91",
        "tenMon": "Pháp luật đại cương",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 7-10,F406; Thứ 4: 7-10,F406",
        "giangVien": "Lê Hồng Phước"
    },
    {
        "maLHP": "2100010.2521.yy.92",
        "tenMon": "Pháp luật đại cương",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 7-10,F307; Thứ 5: 7-10,F307",
        "giangVien": "Lê Thị Hoàng Minh"
    },
    {
        "maLHP": "2100010.2521.yy.93",
        "tenMon": "Pháp luật đại cương",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 3: 2-5,F405; Thứ 5: 2-5,F405",
        "giangVien": "Dương Việt Anh"
    },
    {
        "maLHP": "2100010.2521.yy.94",
        "tenMon": "Pháp luật đại cương",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 2: 7-10,F306; Thứ 4: 7-10,F306",
        "giangVien": "Lê Thị Bích Thủy"
    },
    {
        "maLHP": "2070032.2521.yy.91",
        "tenMon": "Pháp luật trong kinh doanh",
        "tuanHoc": "46-49",
        "lichHoc": "Thứ 3: 2-5,F207; Thứ 5: 2-5,F207",
        "giangVien": "Trần Thị Sáu"
    },
    {
        "maLHP": "3050660.2521.yy.90A",
        "tenMon": "TN Vật lý (Cơ-Nhiệt)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 7: 7-10,D211",
        "giangVien": "Lê Vũ Trường Sơn"
    },
    {
        "maLHP": "3050660.2521.yy.90B",
        "tenMon": "TN Vật lý (Cơ-Nhiệt)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 5: 2-5,D211",
        "giangVien": "Lê Vũ Trường Sơn"
    },
    {
        "maLHP": "3050660.2521.yy.90C",
        "tenMon": "TN Vật lý (Cơ-Nhiệt)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 5: 7-10,D211",
        "giangVien": "Lê Vũ Trường Sơn"
    },
    {
        "maLHP": "3050670.2521.yy.91A",
        "tenMon": "TN Vật lý (Điện-Từ-Quang)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 6: 2-5,D212",
        "giangVien": "Trần Thị Hương Xuân"
    },
    {
        "maLHP": "3050670.2521.yy.91B",
        "tenMon": "TN Vật lý (Điện-Từ-Quang)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 6: 7-10,D212",
        "giangVien": "Trần Thị Hương Xuân"
    },
    {
        "maLHP": "3050670.2521.yy.91C",
        "tenMon": "TN Vật lý (Điện-Từ-Quang)",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 7: 2-5,D212",
        "giangVien": "Phan Liễn"
    },
    {
        "maLHP": "3050011.2521.yy.90",
        "tenMon": "Vật lý 1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 2-5,F307; Thứ 4: 2-5,F307",
        "giangVien": "Mai Thị Kiều Liên"
    },
    {
        "maLHP": "3050011.2521.yy.91",
        "tenMon": "Vật lý 1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F307; Thứ 4: 7-10,F307",
        "giangVien": "Mai Thị Kiều Liên"
    },
    {
        "maLHP": "3050011.2521.yy.92",
        "tenMon": "Vật lý 1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 7-10,F306; Thứ 5: 7-10,F306",
        "giangVien": "Tr T Hồng"
    },
    {
        "maLHP": "3050011.2521.yy.93",
        "tenMon": "Vật lý 1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 2-5,F406; Thứ 5: 2-5,F406",
        "giangVien": "Nguyễn Bá Vũ Chính"
    },
    {
        "maLHP": "3050011.2521.yy.94",
        "tenMon": "Vật lý 1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 5: 7-10,F207; Thứ 6: 7-10,F207",
        "giangVien": "Lê Thị Phương Thảo"
    },
    {
        "maLHP": "3050641.2521.yy.93",
        "tenMon": "Vật lý 2",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F405; Thứ 4: 6-9,F405",
        "giangVien": "Dụng Văn Lữ"
    },
    {
        "maLHP": "3050641.2521.yy.94",
        "tenMon": "Vật lý 2",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 1-4,F303; Thứ 5: 1-4,F303",
        "giangVien": "Đinh Thanh Khẩn"
    },
    {
        "maLHP": "3050641.2521.yy.95",
        "tenMon": "Vật lý 2",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 7-10,F303; Thứ 5: 7-10,F303",
        "giangVien": "Đinh Thanh Khẩn"
    },
    {
        "maLHP": "3190260.2521.yy.90",
        "tenMon": "Đại số tuyến tính",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 1-4,F109; Thứ 3: 1-4,F109; Thứ 4: 1-4,F409",
        "giangVien": "Nguyễn Đại Dương"
    },
    {
        "maLHP": "3190260.2521.yy.91",
        "tenMon": "Đại số tuyến tính",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 5: 7-10,F302; Thứ 6: 7-10,F101; Thứ 7: 7-10,F101",
        "giangVien": "Nguyễn Thị Sinh"
    },
    {
        "maLHP": "3190260.2521.yy.92",
        "tenMon": "Đại số tuyến tính",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 5: 1-4,F307; Thứ 6: 1-4,F307; Thứ 7: 1-4,F307",
        "giangVien": "Trần Nam Sinh"
    },
    {
        "maLHP": "3190111.2521.yy.92",
        "tenMon": "Giải tích 1",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 2: 1-4,F301; Thứ 4: 1-4,F301; Thứ 6: 1-4,F301",
        "giangVien": "Lương Quốc Tuyển"
    },
    {
        "maLHP": "3190111.2521.yy.93",
        "tenMon": "Giải tích 1",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 4: 7-10,F206; Thứ 6: 7-10,F206; Thứ 7: 1-4,F206",
        "giangVien": "Nguyễn Thị Thùy Dương"
    },
    {
        "maLHP": "3190121.2521.yy.90",
        "tenMon": "Giải tích 2",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 3: 1-4,F308; Thứ 4: 1-4,F207; Thứ 5: 1-4,F308",
        "giangVien": "Hoàng Nhật Quy"
    },
    {
        "maLHP": "3190121.2521.yy.91",
        "tenMon": "Giải tích 2",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 5: 1-4,F302; Thứ 6: 1-4,F302; Thứ 7: 1-4,F302",
        "giangVien": "Chử Văn Tiệp"
    },
    {
        "maLHP": "3190041.2521.yy.90",
        "tenMon": "Xác suất thống kê",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 1-4,F208; Thứ 4: 1-4,F208",
        "giangVien": "Lê Văn Dũng"
    },
    {
        "maLHP": "3190041.2521.yy.91",
        "tenMon": "Xác suất thống kê",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 2: 7-10,F403; Thứ 6: 7-10,F102",
        "giangVien": "Tôn Thất Tú"
    },
    {
        "maLHP": "3190041.2521.yy.92",
        "tenMon": "Xác suất thống kê",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 1-4,F306; Thứ 5: 1-4,F306",
        "giangVien": "Phan Trần Đức Minh"
    },
    {
        "maLHP": "3190041.2521.yy.93",
        "tenMon": "Xác suất thống kê",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 1-4,F310; Thứ 6: 1-4,F310",
        "giangVien": "Nguyễn Thị Hải Yến"
    },
    {
        "maLHP": "3190041.2521.yy.94",
        "tenMon": "Xác suất thống kê",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 3: 7-10,F309; Thứ 5: 7-10,F308",
        "giangVien": "Phan Quang Như Anh"
    },
    {
        "maLHP": "4130501.2521.yy.92",
        "tenMon": "Anh văn A2.1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,E2.205; Thứ 6: 2-5,E2.205",
        "giangVien": "Trần Thị Túy Phượng"
    },
    {
        "maLHP": "4130311.2521.yy.93",
        "tenMon": "Anh văn A2.2",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 3: 7-10,E2.202; Thứ 4: 7-10,E2.202; Thứ 6: 7-10,E2.202",
        "giangVien": "Phạm Thị Thu Hương"
    },
    {
        "maLHP": "4130311.2521.yy.94",
        "tenMon": "Anh văn A2.2",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 2: 2-5,E2.204; Thứ 4: 2-5,E2.204; Thứ 6: 2-5,E2.204",
        "giangVien": "Lê Thị Hải Yến"
    },
    {
        "maLHP": "4130311.2521.yy.95",
        "tenMon": "Anh văn A2.2",
        "tuanHoc": "48-52",
        "lichHoc": "Thứ 3: 2-5,E2.205; Thứ 5: 2-5,E2.205; Thứ 7: 2-5,E2.205",
        "giangVien": "Trần Thị Túy Phượng"
    },
    {
        "maLHP": "4130120.2521.yy.90",
        "tenMon": "Anh văn B1.1",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 1-4,E2.106; Thứ 4: 1-4,E2.106; Thứ 6: 1-4,E2.106",
        "giangVien": "Thiều Hoàng Mỹ"
    },
    {
        "maLHP": "4130120.2521.yy.91",
        "tenMon": "Anh văn B1.1",
        "tuanHoc": "49-52",
        "lichHoc": "Thứ 2: 7-10,E2.106; Thứ 4: 7-10,E2.106; Thứ 6: 7-10,E2.106",
        "giangVien": "Thiều Hoàng Mỹ"
    },
    {
        "maLHP": "4130120.2521.yy.92",
        "tenMon": "Anh văn B1.1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 2-5,E2.203; Thứ 6: 2-5,E2.203",
        "giangVien": "Lê Thị Nhi"
    },
    {
        "maLHP": "4130120.2521.yy.93",
        "tenMon": "Anh văn B1.1",
        "tuanHoc": "47-52",
        "lichHoc": "Thứ 4: 7-10,E2.203; Thứ 6: 7-10,E2.203",
        "giangVien": "Lê Thị Nhi"
    }
];
