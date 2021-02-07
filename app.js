const start = document.getElementById('start');
const TOSH ='TOSH'
const QOGOZ ='QOGOZ'
const QAYCHI = 'QAYCHI'
const DEFAULT_VALUE = QAYCHI 
const DURRANG = 'DURRANG'
const PLAYER_WIN = 'O\'YINCHI YUTDI'
const COMPUTER_WIN = 'KOMPUYUTER YUTDI'
const QOGOZ_IMG = 'https://tse3.mm.bing.net/th?id=OIP.LBesg3N_oPwgR_f8CCqfAwAAAA&pid=Api&P=0&w=300&h=300'
const TOSH_IMG = 'https://tse4.mm.bing.net/th?id=OIP.tNcd4to6apx02E0nP6dMgQAAAA&pid=Api&P=0&w=300&h=300'
const QAYCHI_IMG = 'https://tse3.mm.bing.net/th?id=OIP.b0fR3gOLPNYbp_4h1VM_EQAAAA&pid=Api&P=0&w=300&h=300'
let player_img = document.querySelector('#player-img')
let computer_img = document.querySelector('#computer-img')

function getUserChoice() {
  let chooice = prompt('Tosh,qaychi va qog\'ozdan birini tanlang', '').toUpperCase()
  
  if (chooice !== TOSH && chooice !== QAYCHI && chooice !== QOGOZ) {
    alert('Siz birortasini tanlamadingiz. Shuning uchun biz sizga qaychi uslubini oldik')
    return {
      belgi: DEFAULT_VALUE,
      rasm:QAYCHI_IMG
    }
  }

  return {
    belgi: chooice,
    rasm:(chooice === TOSH) ? TOSH_IMG:(chooice === QAYCHI)? QAYCHI_IMG: QOGOZ_IMG
  }
}
const getComputerChooice = function (){
  let selection = Math.random()
  if (selection < 0.34) {
    return {
      belgi: TOSH,
      rasm:TOSH_IMG
      }
  } else if (selection < 0.67) {
     return {
      belgi: QAYCHI,
      rasm:QAYCHI_IMG
      }
  } else {
    return {
      belgi: QOGOZ,
      rasm:QOGOZ_IMG
      }
    }
}
const findWinner = function (cChooice,pChooice) {
  if (cChooice === pChooice) {
     return DURRANG
  } else if (
    cChooice === TOSH && pChooice === QOGOZ
    || cChooice === QOGOZ && pChooice === QAYCHI
    || cChooice === QAYCHI && pChooice === TOSH
  ) {
    return PLAYER_WIN
  } else {
    return  COMPUTER_WIN
   }
}


const startGame = function () {
  let playerChooice = getUserChoice()
  let comChooice = getComputerChooice()
  let winner = findWinner(comChooice.belgi, playerChooice.belgi)
  player_img.src = playerChooice.rasm
  computer_img.src = comChooice.rasm
  let natija = document.querySelector('#natija')
  natija.textContent = winner
  natija.classList.add('natija') 

}




start.addEventListener('click', startGame);





//https://tse3.mm.bing.net/th?id=OIP.b0fR3gOLPNYbp_4h1VM_EQAAAA&pid=Api&P=0&w=300&h=300