import { postRegister } from "../api/data.js";
import { html } from "../lib.js";

let context;
export function showRegister(ctx, next) {
    if (!sessionStorage.getItem('userData')) {
        const content = html`
        <section id="register">
            <div class="form">
                <h2>Register</h2>
                <form class="login-form" @submit=${handleRegister}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p class="message">Already registered? <a href="#">Login</a></p>
                </form>
            </div>
        </section>`
        ctx.renderView(content)
    }
    context = ctx;
}

async function handleRegister(event) {
    event.preventDefault()

    const form = new FormData(event.target);
    const email = form.get('email')
    const password = form.get('password')
    const rePass = form.get('re-password')

    try {
        if (email == '' || password == "" || rePass == "") {
            throw new Error('Please, fill all fields!')
        }
        if(password !== rePass){
            throw new Error('Wrong password! Please, enter it agait!')
        }

        await postRegister(email, password)
        context.page.redirect('/dashboard')
    } catch (error) {
        alert(error.message)
    }
}