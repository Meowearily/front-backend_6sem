// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button, CardBody, CardFooter, CardHeader, Heading,
         Input, Separator, Textarea, Card, Text, Select, 
         createListCollection, Portal} from "@chakra-ui/react";
import './App.css';
import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note";
import Filters from "./components/Filters";
import { useEffect } from "react";
import { fetchNotes } from "./services/notes";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      await fetchNotes();
    };

    fetchData();
  }, []);


  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm />
        <div className="flex flex-col gap-5">
          <Input placeholder="Поиск" />
          <Filters />
        </div>
      </div>

      <ul className="flex flex-col gap-5 w-1/2">
        <li>
          <Note />
        </li>

        <li>
          <Note />
        </li>

        <li>
          <Note />
        </li>

        <li>
          <Note />
        </li>

        <li>
          <Note />
        </li>

      </ul>
      
    </section>
  );
}

export default App;
