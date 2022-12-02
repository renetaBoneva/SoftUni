import { postLogin } from "../api/data.js";
import { html } from "../lib.js";

let context;
export function showLoginView(ctx, next){    
    const content = html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitHandler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`
    ctx.renderView(content)
    context = ctx;
}

async function submitHandler(event){
    event.preventDefault()
    const form = new FormData(event.target);
    const email = form.get('email')
    const password = form.get('password')
    await postLogin(email, password)
    context.page.redirect('/dashboard')
}