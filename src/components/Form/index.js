import './Form.css';
import TextField from '../TextField';
import DropDownList from '../DropDownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
    
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const onSaving = (event) => {
        event.preventDefault();
        props.onContributor({
            name, 
            position,
            image,
            team
        });
    }

    return(
        <section className="form" onSubmit={onSaving}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                ></TextField>
                
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={position}
                    onChanged={value => setPosition(value)}
                ></TextField>
                
                <TextField 
                    required={true}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                ></TextField>
                
                <DropDownList 
                    required={true} 
                    label="Time" 
                    itens={teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                
                <Button >
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;