const content = document.querySelector('h1')
content.innerHTML = dataBrasil()

function dataBrasil() {
  const data = new Date();
  let dataFinal = ''
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const diaSemana = data.getDay();
  const hora = data.getHours();
  const minuto = data.getMinutes();


  function getMesTexto(mes) {
    let mesTexto
    switch(mes) {
      case 1:
        mesTexto = 'Janeiro'
      break;
      case 2:
        mesTexto = 'Fevereiro'
      break;
      case 3:
        mesTexto = 'Março'
      break;
      case 4:
        mesTexto = 'Abril'
      break;
      case 5:
        mesTexto = 'Maio'
      break;
      case 6:
        mesTexto = 'Junho'
      break;
      case 7:
        mesTexto = 'Julho'
      break;
      case 8:
        mesTexto = 'Agosto'
      break;
      case 9:
        mesTexto = 'Setembro'
      break;
      case 10:
        mesTexto = 'Outubro'
      break;
      case 11:
        mesTexto = 'Novembro'
      break;
      case 12:
        mesTexto = 'Dezembro'
      break;
    }
    return mesTexto
  }
  
  function getDiaSemanaTexto(diaSemana){
  let diaSemanaTexto
  switch(diaSemana) {
    case 0:
    diaSemanaTexto = 'Domingo'
    return diaSemanaTexto;
    case 1:
    diaSemanaTexto = 'Segunda-feira'
    return diaSemanaTexto;
    case 2:
    diaSemanaTexto = 'Terça-feira'
    return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta-feira'
    return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta-feira'
      return diaSemanaTexto;
      case 5:
    diaSemanaTexto = 'Sexta-feira'
    return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado'
      return diaSemanaTexto;
    }
  }

  function corrigindoHoraEMinuto(num) {
    if (num < 10) {
    return num = `0${num}`
    } else {
      return num
    }
  }

  dataFinal = `${getDiaSemanaTexto(diaSemana)}, ${dia} de ${getMesTexto(mes)} de ${ano} ${corrigindoHoraEMinuto(hora)}:${corrigindoHoraEMinuto(minuto)}`;
  return dataFinal;
}

