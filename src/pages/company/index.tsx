import React, { FC, useState } from 'react';
import Company from 'models/company';
import firebase from 'firebase'; 
import User from 'models/user';

interface CompanyPageInterface { 
  user: User
}



const CompanyPage: FC<CompanyPageInterface> = () => {
  const [name, setName] = useState();
  const [domain, setDomain] = useState();
  const database = firebase.database();

	const handleSubmit = () => {
    database.ref(`company/${domain}`).set({
      name,
      domain
    });
  }
  return (
    <div className="CompanyPage">
      <div>
        <label>Nome</label>
        <input name="name" value={name} placeholder="My company" onChange={setName} />
      </div>
      <div>
        <label>Dominio</label>
        <input name="dominio" value={domain} placeholder="mycompany.com.br" onChange={setDomain} />
      </div>
      <div>
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </div>
  );
}

export default CompanyPage;
