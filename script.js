function calculate() {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
   

    if (!age || !weight || !height || !activity ) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อมูลไม่ครบถ้วน',
            text: 'กรุณากรอกข้อมูลให้ครบถ้วนก่อนทำการคำนวณ'
        });
        return;
    }

    // คำนวณ BMR
    let bmr;
    if (gender === "male") {
      bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age ; // สูตรสำหรับผู้ชาย
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161; // สูตรสำหรับผู้หญิง
    }

    // คำนวณ TDEE  
    const tdee = bmr * activity;

      // คำนวณแคลอรี่ที่เป็น 20% ของ TDEE
      const tdeePercentage = (tdee * 20) / 100;
      const carbo = (tdeePercentage / 4);
      const power = (carbo / 15);



      Swal.fire({
        icon: 'success',
        title: 'รมต. พานับคาร์บ',
        html: `
            <div style="text-align: center; font-family: sans-serif;">
                <h3>ผลคำนวณคาร์บของคุณ</h3>
                <p>สรุปอัตราการใช้พลังงานขั้นพื้นฐาน <br><strong>(BMR) : ${bmr.toFixed(2)} แคลอรี่ต่อวัน</strong></p>
                <p>สรุปอัตราการใช้พลังงานต่อวันโดยรวม <br><strong>(TDEE) : ${tdee.toFixed(2)} แคลอรี่ต่อวัน</strong></p>
                <p>ปริมาณคาร์บ/วันที่ต้องการควบคุม <br><strong>ไม่ให้เกิน : ${power.toFixed(2)} คาร์บต่อวัน</strong></p>
                <p style="font-size: smaller;">(หมายเหตุ: คาร์โบไฮเดรต 15กรัม = 1 คาร์บ = ข้าว 1 ทัพพี)</p>
            </div>
        `,
        confirmButtonText: 'OK'
    });
    
  }
  function refreshPage() {
    window.location.reload();
  }

  