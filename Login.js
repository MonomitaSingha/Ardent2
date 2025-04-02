import '../css/login.css'
export default function login(){
    return (
        <div id="nav">
            <h2>Login Page</h2>
            <form>
                <label for="username"> USERNAME</label>
                <input type= "text" name="username" required></input><br></br>

                <label for='password'> PASSWORD</label>
                <input type="password" name="password" required></input><br></br>

                <br></br>
               <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}