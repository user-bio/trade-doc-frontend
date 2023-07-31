import { httpRequest } from "./Api"
import { getToken } from "./Auth"

class Usuarios {
  static getUser = async (force = false) => {
    let dados
    if(!localStorage.getItem("@bioseta-User") || force){
        const resp = await httpRequest(`usuarios/meus-dados`, {
          method: "GET",
          token: getToken(),
        });
        dados = resp.body;
        localStorage.setItem("@bioseta-User", JSON.stringify(dados));
    }
    return JSON.parse(localStorage.getItem("@bioseta-User"));
  };
  static getUserStorage = () => {
    return JSON.parse(localStorage.getItem("@bioseta-User"));
  }
  static isAdmin(){
    
    let object = JSON.parse(atob(getToken().split(".")[1]));

    let conditions = ["admin"];
    return conditions.some((i) => object.permissoes.includes(i));
  }
}

export default Usuarios