import { mount } from "@cypress/vue";
import AwesomeCard from "./AwesomeCard.vue";
import { h } from "vue";

describe("AwesomeCard", () => {
  context("Basic Rendering", () => {
    it("renders a title", () => {
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
          default: h("p", content),
        },
      });

      cy.get("h2").should("have.text", title);
    });

    it("renders a paragraph inside of the default slot", () => {
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
          default: h("p", content),
        },
      });

      cy.get("p").should("have.text", content);
    });
  });

  context("Actions", () => {
    it("should hide the title when button is clicked", () => {
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
          default: h("p", content),
        },
      });

      cy.get('[data-cy="card-button"]').click();

      cy.get("h2").should("be.visible");
      cy.get(".card-content").should("have.class", "text-green-400");
    });
  });
});
