
//Template expression;

const TemplateExpression = () => {

var name ="julia";
//var name =  prompt("Qual o seu nome?")
const data = {
    age:21,
    job:'Dev'
};









    return (
        <div>
            <p>
                <h3>Seja bem vindo {name}</h3>
                A soma é {2+2}
            </p>
            <p>
                sua idade é {data.age} e seu job é {data.job}
            </p>
        </div>
    )
}



export default TemplateExpression;