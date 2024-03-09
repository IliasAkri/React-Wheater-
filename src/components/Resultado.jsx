import useClima from "../hooks/useClima"

const Resultado = () => {
    const {resultado, main} = useClima()
    console.log(resultado.main)
    const {name} = resultado

    // Grados kelvin
    const kelvin = 273.15
    return (
    <div className="contenedor">
      <h2>El clima de {name} es: </h2>
      <p>
        Temperatura Actual: {parseInt(resultado.main.temp - kelvin)} Grados
      </p>
      <p>
        Temperatura Minima: {parseInt(resultado.main.temp_min - kelvin)} Grados
      </p>
      <p>
        Temperatura Maxima: {parseInt(resultado.main.temp_max - kelvin)} Grados
      </p>
    </div>
  )
}

export default Resultado
