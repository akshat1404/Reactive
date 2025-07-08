import { useState } from "react";
import Modal from "./reactive-ui/Modal";

function App() {

  const [openModal, setModal] = useState(false);

  return (
    <>
      <Modal
        title="Submit Form"
        isOpen={openModal}
        actions={[
            {
                label: 'Close',
                onClick: () => setModal(false),
                style: { backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }
            },
            {
                label: 'Accept',
                onClick: () => console.log('Submit clicked'),
                style: { backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }
            }
        ]}
        onClose={()=>setModal(false)}
        submitButtonOnEnter="Accept"
      >
        <h3>Read Terms and Conditions Before Filling the Form</h3>
        <p style={{textAlign:'justify'}} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quia aperiam voluptatibus enim quis molestias, accusamus expedita dolorum sequi atque exercitationem, eligendi consequuntur non nisi aliqua
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam nesciunt quia iusto sapiente quam dolorum autem expedita minus libero, aliquid eveniet optio delectus repellendus perferendis aperiam eum consequatur in!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo autem, tempora voluptatum, modi neque laboriosam eaque repudiandae assumenda atque ut maxime fugiat soluta. Unde praesentium nisi eum aperiam sit magni.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia numquam ipsum a deleniti magni illum debitis amet aut mollitia sequi repellendus distinctio reprehenderit, impedit ullam animi assumenda, magnam veniam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus rem sequi quia vitae cum error. Quisquam nisi sed, dignissimos libero facilis, adipisci nam nemo tenetur ipsam eligendi at ea.
        </p>
      </Modal>

      <button onClick={() => setModal(true)} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: '#fff' }}>
        Open Modal
      </button>

    </>
  );
}

export default App;
