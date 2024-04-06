const Contacto = () => {
  return (
    <>
      <h2 className='my-4'>Cuentanos, ¿en que te podemos ayudar?</h2>
      <div className='m-5'>
        <label for='exampleFormControlInput1' className='form-label fs-5'>Correo</label>
        <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />
      </div>
      <div className='m-5'>
        <label for='exampleFormControlTextarea1' className='form-label fs-5'>Descripción</label>
        <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' />
      </div>
      <button type='submit' className='btn btn-danger my-5 px-5'>Enviar</button>
    </>
  )
}

export default Contacto
