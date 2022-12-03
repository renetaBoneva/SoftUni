import { postLogin } from "../api/data.js";
import { html } from "../lib.js"

let context;
export function showLogin(ctx, next) {

    let content;
    if (!sessionStorage.getItem("userData")) {
        content = html`
            <section id="login">
                <div class="form">
                    <h2>Login</h2>
                    <form class="login-form" @submit=${handleLogin}>
                        <input type="text" name="email" id="email" placeholder="email" />
                        <input type="password" name="password" id="password" placeholder="password" />
                        <button type="submit">login</button>
                        <p class="message">
                            Not registered? <a href="#">Create an account</a>
                        </p>
                    </form>
                </div>
            </section>`

    } else {
        content = html``;
    }
    ctx.renderView(content)
    context = ctx
}

async function handleLogin(event) {
    event.preventDefault()

    const form = new FormData(event.target);
    try {
        const email = form.get('email')
        const password = form.get('password')

        if (email == '' || password == '') {
            throw new Error('Please, fill all fields!')
        }

        await postLogin(email, password);
        context.page.redirect('/dashboard')
    } catch (error) {
        alert(error.message)
    }
} 
