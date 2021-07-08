export const CepFormatter = {
  addHyphen(cep: string) {
    return cep.slice(0, 5) + '-' + cep.slice(5)
  }
}
