// lấy data sinh viên
function getData() {
    let ma = $("#txtMaSV")[0].value.trim()
    let ten = $("#txtTenSV")[0].value
    let email = $("#txtEmail")[0].value
    let matKhau = $("#txtPass")[0].value
    let toan = $("#txtDiemToan")[0].value * 1
    let ly = $("#txtDiemLy")[0].value * 1
    let hoa = $("#txtDiemHoa")[0].value * 1
    return new SinhVien(
        ma,
        ten,
        email,
        matKhau,
        toan,
        ly,
        hoa,
    )
}

// load data sv lên form input
function showData(id) {
    let index = dssv.findIndex((sv) => sv.ma === id)
    let sv = dssv[index]
    $("#txtMaSV")[0].value = sv.ma
    $("#txtTenSV")[0].value = sv.ten
    $("#txtEmail")[0].value = sv.email
    $("#txtPass")[0].value = sv.matKhau
    $("#txtDiemToan")[0].value = sv.toan
    $("#txtDiemLy")[0].value = sv.ly
    $("#txtDiemHoa")[0].value = sv.hoa
    $("#txtMaSV")[0].disabled = 1
}

// Clear form
function clearForm() {
    $("#txtMaSV")[0].value = ""
    $("#txtTenSV")[0].value = ""
    $("#txtEmail")[0].value = ""
    $("#txtPass")[0].value = ""
    $("#txtDiemToan")[0].value = ""
    $("#txtDiemLy")[0].value = ""
    $("#txtDiemHoa")[0].value = ""
}

// Render Table
function render(dssv) {
    let trHtml = ""
    dssv.forEach(sv => {
        trHtml += `<tr>
            <td>${sv.ma}</td>
            <td>${sv.ten}</td>
            <td>${sv.email}</td>
            <td>${sv.diemTb()}</td>        
            <td>
                <button class="btn btn-warning" onclick="showData('${sv.ma}')">Sửa</button>
                <button class="btn btn-danger" onclick="xoaSv('${sv.ma}')">Xóa</button>
            </td>        
        </tr>`
    });
    $("#tbodySinhVien")[0].innerHTML = trHtml
}

function saveLocal(dssv) {
    localStorage.setItem("dssv", JSON.stringify(dssv))
}