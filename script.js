alert("ยินดีต้อนรับเข้าสู่โปรแกรมคำนวณโบนัส!");

function calculateBonus() {
    const salary = parseFloat(document.getElementById('salary').value);
    const bonusRate = parseFloat(document.getElementById('bonusRate').value);

    if (isNaN(salary) || isNaN(bonusRate)) {
        alert("กรุณากรอกตัวเลขให้ถูกต้อง");
        return;
    }

    const bonus = (salary * bonusRate) / 100;
    const totalIncome = salary + bonus;

    document.getElementById('result').innerHTML = `
        <strong>ผลลัพธ์:</strong> <br>
        เงินเดือน: ${salary.toLocaleString()} บาท <br>
        โบนัสที่ได้รับ: ${bonus.toLocaleString()} บาท <br>
        รายได้รวม: ${totalIncome.toLocaleString()} บาท
    `;
}
