import { mount } from "@cypress/vue";
import AwesomeButton from "./AwesomeButton.vue";

describe("AwesomeButton", () => {
  it("renders a message", () => {
    const label = "I'm awesome 😎";
    mount(AwesomeButton, {
      propsData: {
        label,
      },
    });

    cy.get("button").should("have.text", label);
  });
});
