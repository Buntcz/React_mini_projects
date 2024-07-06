


function Form() {

    function handleSubmit(e) {
        e.preventDefault()
        alert("Form submitted")
    }
   return (
    <div className="Form_container">
        <form className="accountForm" onSubmit={handleSubmit}>
            <label>
                Please enter your username: <input type="text" name="username" className="username" required />
            </label>
            <label>
                Please enter your e-mail: <input type="e-mail" name="email" className="email" required/>
            </label>
            <label>
                Please enter your password: <input type="password" name="pass" className="pass" required />
            </label>
            <button type="submit">Submit</button>
        </form>
      
    </div>
   )
}

export {Form} 