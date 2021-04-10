import { mount } from "@cypress/vue";
import AwesomeCard from "./AwesomeCard.vue";

describe("AwesomeCard", () => {
  it("renders a message", () => {
    const title = "This is the way!";
    const media =
      "https://images.unsplash.com/photo-1611250535839-94b88cf88bba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80";
    const content =
      "Arepa ipsum dolor amet parchita coroto Quisque eu le eche los perros amet cuál es la guachafita; Facilisis sifrino? Nam Suspendisse budare dejar el pelero regional light eu pretium que pasó el mío?. A hallaca soplar el bistec criolla amet! Edgar Rámirez tequeños ";
    mount(AwesomeCard, {
      propsData: {
        title,
        media,
      },
      slots: {
        default: content,
      },
    });

    cy.get("h2").should("have.text", title);
  });
});
