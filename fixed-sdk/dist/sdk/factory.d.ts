import { AuthenticationProvider } from '@microsoft/kiota-abstractions';
import { ApicurioRegistryClient } from '../generated-client/apicurioRegistryClient.js';
export declare class RegistryClientFactory {
    static createRegistryClient(baseUrl: string, authProvider?: AuthenticationProvider): ApicurioRegistryClient;
}
