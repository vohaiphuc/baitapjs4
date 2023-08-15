let item = localStorage.getItem("dssv")
let dssv = (item != "null") ? JSON.parse(item) : []
dssv = dssv.map(sv => new SinhVien(...Object.values(sv)));
render(dssv)

function themSv() {

    let sv = getData()
    dssv.push(sv)

    saveLocal(dssv)
    clearForm()
    render(dssv)

}

function xoaSv(id) {
    let index = dssv.findIndex((sv) => sv.ma === id)
    dssv.splice(index, 1)
    saveLocal(dssv)
    render(dssv)
}

function suaSv() {
    let updateSv = getData()
    let index = dssv.findIndex((sv) => sv.ma === updateSv.ma)
    dssv[index] = updateSv

    saveLocal(dssv)
    clearForm()
    render(dssv)

    $("#txtMaSV")[0].disabled = 0
}

function resetSv() {
    saveLocal(null)
    clearForm()
    render([])
}

function timSv() {
    let ten = $("#txtSearch")[0].value.trim().toLowerCase()
    let filter = dssv.filter(sv => sv.ten.toLowerCase().includes(ten));
    render(filter)
}