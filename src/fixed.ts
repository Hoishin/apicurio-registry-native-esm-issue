import { RegistryClientFactory } from "@internal/fixed-sdk";

const client = RegistryClientFactory.createRegistryClient("http://example.com");

console.log(client.groups.byGroupId("default"));
