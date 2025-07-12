import { RegistryClientFactory } from "@apicurio/apicurio-registry-sdk";

const client = RegistryClientFactory.createRegistryClient("http://example.com");

console.log(client);
