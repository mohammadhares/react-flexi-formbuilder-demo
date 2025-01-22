import FormBuilder from "react-flexi-formbuilder";
import { FormFieldsList } from "react-flexi-formbuilder/dist/types/type";
import 'react-flexi-formbuilder/dist/index.css';
import { useState } from "react";

function App() {

  const [formJson, setFormJson] = useState<FormFieldsList>();

  const handleGetFormJson = (data: FormFieldsList) => {
    setFormJson(data)
  }

  return (
    <main>
      <FormBuilder onGetFormJson={handleGetFormJson} />

      <div className="view_json_data">
        <h3>Results :</h3>
        <pre>{JSON.stringify(formJson, null, 2)}</pre>
      </div>
    </main>
  )
}

export default App
