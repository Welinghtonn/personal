import { Route, Routes } from "react-router-dom";
import { Alunos } from "../pages/Alunos";
import { FormAlunos } from "../pages/FormAlunos";
import { Home } from "../pages/Home";
import { LoginAluno } from "../pages/LoginAluno";
import { MainScreen } from "../pages/MainScreen";
import { DetalhesAluno } from './../pages/DetalhesAluno';
import { LoginProfessor } from './../pages/LoginProfessor';
import { RegisterAluno } from "../pages/RegisterAluno";
import { RegisterProfessor } from "../pages/RegisterProfessor";
import { Assinatura } from "../pages/Assinatura";

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/loginAluno" element={<LoginAluno />} />
            <Route path="/loginProfessor" element={<LoginProfessor />} />
            <Route path="/registerAluno" element={<RegisterAluno />} />
            <Route path="/registerProfessor" element={<RegisterProfessor />} />
            <Route path="/mainScreen" element={<MainScreen />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/formAlunos" element={<FormAlunos />} />
            <Route path="/alunos/:id" element={<DetalhesAluno />} />
            <Route path="/assinatura" element={<Assinatura/>}/>
        </Routes>
    )
}