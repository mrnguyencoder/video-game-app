import { Grid, GridItem, Show } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"


function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`, //From 0em upwards
      lg: `"nav nav" "aside main"` //From 62em upwards
    }}>
      <GridItem area="nav">
        <NavBar/>  
      </GridItem>                   
      <Show above="lg">
        <GridItem area="aside" bg="yellow">Aside</GridItem>    
      </Show>               
      <GridItem area="main" bg="red">Main</GridItem>                   
    </Grid>
  )
}

export default App
