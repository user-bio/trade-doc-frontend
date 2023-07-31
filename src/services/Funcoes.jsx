export function formataCPF(cpf) {
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");
  
    //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  
  export function formataCNPJ(cnpj) {
    //retira os caracteres indesejados...
    cnpj = cnpj.replace(/[^\d]/g, "");
  
    //realizar a formatação...
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }

  export function limpaValores(valor) {
    return valor.match(/\d/g).join("");
  }
  
  export function dataPTBR(valor) {
    let date = new Date(valor).toLocaleString("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return date;
  }

  export function converterData(data) {
    const partes = data.split('/');
    const dataReorganizada = [partes[2], partes[1], partes[0]];
    return dataReorganizada.join('-');
  }

  export function converterDataAnoMes(data) {
    const partes = data.split('/');
    const dataReorganizada = [partes[1], partes[0]];
    return dataReorganizada.join('-');
  }