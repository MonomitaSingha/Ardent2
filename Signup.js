export default function Signup(){
    return (
        <div id="nav">
            <form>
                <h2>Signup Page</h2>
                <label for="firstname"> FIRSTNAME</label>
                <input type= "text" name="firstname" required></input><br></br>

                <label for="lastname"> LASTNAME</label>
                <input type= "text" name="lastname" required></input><br></br>

                <label for='password'> PASSWORD</label>
                <input type="password" name="password" required></input><br></br>
                <br></br>
               <button type="submit">Signup</button>
            </form>
        </div>
    )
}