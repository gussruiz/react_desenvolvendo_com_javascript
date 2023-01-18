import './Form.css';
import TextField from '../TextField';
import DropDownList from '../DropDownList';
import Button from '../Button';

const Form = () => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const onSaving = (event) => {
        event.preventDefault();
    }

    return(
        <section className="form" onSubmit={onSaving}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"></TextField>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"></TextField>
                <TextField required={true}label="Imagem" placeholder="Digite o endereço da imagem"></TextField>
                <DropDownList required={true} label="Time" itens={teams}/>
                <Button >
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;