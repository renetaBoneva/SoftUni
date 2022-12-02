import { postRegister } from "../api/data.js";
import { html } from "../lib.js";

let context;
export async function showRegister(ctx, next) {
    const content = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${handleRegister}>
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
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>`
    ctx.renderView(content)
    context = ctx;
}

async function handleRegister(event){
    event.preventDefault()
    const form = new FormData(event.target);
    const email = form.get('email')
    const password = form.get('password')
    const rePass = form.get('rePass')
    if(email == "" || password == "" || rePass == ''){
        return alert('Please, fill all filds!')
    }
    if(password !== rePass){
       return alert('Wrong password. Please, enter it again!')
    }
    await postRegister(email, password)
    context.page.redirect('/')
}