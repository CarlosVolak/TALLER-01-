import propTypes from 'prop-types';

export const estudiante = () =>{
    
    const calcularNota= ({nota1,nota2, nota3, nombre}) =>{

        if (nota1 >= 0.0 && nota1 <= 5.0 &&
            nota2 >= 0.0 && nota2 <= 5.0 &&
            nota3 >= 0.0 && nota3 <= 5.0 ){
                var notaFinal = (nota1+nota2+nota3)/3
                if (notaFinal >= 3.0){
                    return(
                        <>
                        <span>El estudiante {nombre} paso la materia con {notaFinal} </span>
                        </>
                    )
                }
            }else{
                return(
                    <>
                    <span>El estudiante {nombre} no paso la materia con {notaFinal} </span>
                    </>
                )
            }

    }

    calcularNota.prototype = {
        nota1: propTypes.number.isRequired,
        nota2: propTypes.number.isRequired,
        nota3: propTypes.number.isRequired,
        nombre: propTypes.string.isRequired
    }

    calcularNota.defaultProps = {
        nota1: 0.0,
        nota2: 0.0,
        nota3: 0.0,
        nombre: "Nombre Estudiante"
        
    }


}