function SinhVien(ma, ten, email, matKhau, toan, ly, hoa) {
    this.ma = ma
    this.ten = ten
    this.email = email
    this.matKhau = matKhau
    this.toan = toan
    this.ly = ly
    this.hoa = hoa
    this.diemTb = () => Math.floor((this.toan + this.ly + this.hoa) / 3)
}