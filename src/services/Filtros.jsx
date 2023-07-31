export const DOC_KEY = "@bioseta-filtros-documentos";
export const isDocFIltro = () => localStorage.getItem(DOC_KEY) !== null;
export const setDocFIltro = (dados) => localStorage.setItem(DOC_KEY, JSON.stringify(dados));

export function getDocFIltro() {
  return JSON.parse(localStorage.getItem(DOC_KEY));
}

export const ENVIO_KEY = "@bioseta-filtros-envios";
export const isEnvioFIltro = () => localStorage.getItem(ENVIO_KEY) !== null;
export const setEnvioFIltro = (dados) => localStorage.setItem(ENVIO_KEY, JSON.stringify(dados));

export function getEnvioFIltro() {
  return JSON.parse(localStorage.getItem(ENVIO_KEY));
}
