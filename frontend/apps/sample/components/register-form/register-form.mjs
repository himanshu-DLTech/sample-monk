/**
 * Interprets and runs form.json files. Renders the
 * UI for the form. This component is a form UI generator
 * basically.
 *  
 * (C) 2022 TekMonks. All rights reserved.
 * License: See enclosed LICENSE file.
 */
import { util } from "/framework/js/util.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { signup } from "../../js/auth.mjs"

const COMPONENT_PATH = util.getModulePath(import.meta);

async function elementConnected(host) {
}

async function elementRendered(host, initialRender) {
}

// method that handles the incoming submit request from the UI Form
async function submitReq(event, element) {

    // preventing the default behaviour
    event.preventDefault(0);

    // getting shadowRoot using contained element
    const shadowRoot = register_form.getShadowRootByContainedElement(element);

    // getting user details
    const firstName = shadowRoot.querySelector("#first").value;
    const lastName = shadowRoot.querySelector("#last").value;
    const password = shadowRoot.querySelector("#password").value;
    const email = shadowRoot.querySelector("#email").value;

    // combining first and last name
    const name = firstName + lastName;

    // calling the signup api using custom authentication manager(js/auth.js)
    const response = await signup(email, name, password)

    console.log(response)
}

export const register_form = { submitReq, trueWebComponentMode: true, elementConnected, elementRendered };
monkshu_component.register("register-form", `${COMPONENT_PATH}/register-form.html`, register_form);