import { html } from "../lib.js"

export function notFound(ctx, next){
    const content = html`<p>404 Not Found</p>`
    ctx.renderView(content)
}