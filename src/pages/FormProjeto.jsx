import * as C from "@chakra-ui/react"

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
          <C.Heading color="#3498db" fontSize="24px">Formulário de Projeto</C.Heading>
          <C.Input type= "text" placeholder="insira seu Projeto"/>
          <C.Input type= "text" placeholder="Area de atuação"/>
          <C.Input type= "text" placeholder="escola"/>
          <C.Input type= "text" placeholder="Coordenador/Professor"/>
          <C.Checkbox>CETCC</C.Checkbox>
        <C.Checkbox>CETAFEST</C.Checkbox>
        <C.Checkbox>CETICC</C.Checkbox>
        <C.Checkbox>CETAFAJU</C.Checkbox>
        </C.VStack>
    )
}

export default FormProjeto