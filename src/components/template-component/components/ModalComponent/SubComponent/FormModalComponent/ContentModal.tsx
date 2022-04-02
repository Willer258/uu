import { Button, Form, Row } from "antd";
import React from "react";
import ContactInput from "../../../InputComponent/SubComponent/ContactInput";
import EmailInput from "../../../InputComponent/SubComponent/EmailInput";
import TextInput from "../../../InputComponent/SubComponent/TextInput";

export default function ContentModal(props: any) {
  const ValidateForm = (value: any) => {
    console.log(value);
    window.alert(value);
    props.visible(false);
  };
  return (
    <Form name="basicInformation" layout="vertical" onFinish={ValidateForm}>
      <h3 className="mb-5 text-xl font-bold border-b-2">
        Formulaire dans un modal
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          {/*  champs nom */}
          <TextInput
            type="text"
            label={"Nom"}
            name={"name"}
            rules={[{ required: true, message: "Veuillez entrer un nom" }]}
          />
        </div>
        <div>
          {/*  champs nom */}
          <TextInput
            type="text"
            label={"Prenom"}
            name={"lastname"}
            rules={[{ required: true, message: "Veuillez entrer un prenom" }]}
          />
        </div>{" "}
        <div>
          {/*  champs nom */}
          <ContactInput
            type="text"
            label={"Numero de telephone"}
            name={"tel"}
            rules={[
              {
                required: true,
                message: "Veuillez entrer un numero de telephone",
              },
            ]}
            mask={"+225 11-11-11-11-11"}
          />
        </div>
        <div>
          {/*  champs nom */}
          <TextInput
            type="text"
            label={"Username"}
            name={"username"}
            rules={[
              {
                required: true,
                message: "Veuillez entrer un nom d'utilisteur",
              },
            ]}
          />
        </div>
        <div>
          {/*  champs nom */}
          <EmailInput
            type="text"
            label={"Email"}
            rules={[{ required: true, message: "Veuillez entrer un email" }]}
            name={"mail"}
          />
        </div>
      </div>

      <div className="space-x-3 border-t-2 pt-3 pr-2 text-right">
        <Button type="text" onClick={() => props.visible(false)}>
          Annuler
        </Button>{" "}
        <Button type="primary" htmlType="submit">
          Enregistrer
        </Button>
      </div>
    </Form>
  );
}
